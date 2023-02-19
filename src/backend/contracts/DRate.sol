// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DRate{
    //maintains event-id 
    uint256 public eventID = 0; 

    //mapping of eventID to event 
    mapping(uint256 => CustomEvent) public allEvents; 

    // Array of all events
    CustomEvent[] public events;

    //enum for eventType
    enum EventType{MOVIE, SERIES, MUSIC} 

    //enum for tags
    enum Tag{HORROR, ROMANTIC, SUSPENSE, THRILLER, ACTION, ADVENTURE} 

    //enum for Language
    enum Language{ENGLISH, TELUGU, HINDI, TAMIL, MALAYALAM, MARATHI, KANNADA}

    //mapping for users balances
    mapping(address => uint256) public _balances;

    //mapping for users voted
    mapping(address => bool) public _voted;

    //custom event   
    struct CustomEvent{
        uint256 eventID; 
        EventType eventType; 
        string eventName; 
        string eventDescription; 
        Language language; 
        Tag tags; 
        address author; 
        uint256 rating; 
        uint256 numberOfRatings; 
        string posterURL; 
    }   

    //trigger event 
    event EventAdded(
        uint256 eventID,
        EventType eventType, 
        string eventName,
        string eventDescription, 
        Language language,
        Tag tags, 
        address author,
        uint256 rating,
        uint256 numberOfRatings,
        string posterURL
    );

    //function to add an event
    function addEvent(
        EventType _eventType, 
        string memory _eventName, 
        string memory _eventDescription, 
        Language _language,
        Tag _tags,
        string memory _posterURL
    ) payable public {
        require(bytes(_eventName).length > 0);
        require(bytes(_eventDescription).length > 0);

        //increment eventID 
        eventID++; 

        //add the new event to the map 
        allEvents[eventID] = CustomEvent(
            eventID,
            _eventType, 
            _eventName, 
            _eventDescription,
            _language, 
            _tags, 
            msg.sender,//skipped in return statement
            0,
            0,
            _posterURL
        );

        //add the new event to the array
        events.push(allEvents[eventID]);

        _balances[msg.sender] += 50;

        //Trigger the event
        emit EventAdded(
            eventID,
            _eventType, 
            _eventName, 
            _eventDescription, 
            _language,
            _tags, 
            msg.sender,
            0,
            0,
            _posterURL
        );
    }

    //constructor
    constructor() {}

    //QV function for rating
    function QVRating(uint256 _eventID, uint numVotes, uint rating) public {
        require(numVotes > 0, "Number of votes should be greater than zero");
        require(rating > 0 && rating <= 10, "Rating should be between range of 1 - 10");
        require(_eventID > 0 && _eventID <= eventID, "EventID will be between 1 and eventID");

        if(_voted[msg.sender] == false){
            _voted[msg.sender] = true;
            _balances[msg.sender] += 100;
        }

        uint256 numTokens = numVotes * numVotes;

        //check if the user has enough tokens
        require(_balances[msg.sender] >= numTokens, "Not enough balance to vote");

        //update the user's balance
        _balances[msg.sender] -= numTokens;

        //update the event's rating
        events[eventID-1].rating = (allEvents[eventID].rating * allEvents[eventID].numberOfRatings + rating * numVotes) * 1000 / (allEvents[eventID].numberOfRatings + numVotes);

        //update the event's number of ratings
        events[eventID-1].numberOfRatings += numVotes;
    }
        


    //get movie by name
    function getMovieByName(string memory _eventName) public view returns(
        uint256,
        EventType,
        string memory,
        string memory,
        Language,
        Tag,
        uint256,
        uint256,
        string memory
    ){
        require(bytes(_eventName).length > 0);   

        for(uint256 i = 0;i<eventID;i++){
            if(keccak256(abi.encodePacked(allEvents[i].eventName)) == keccak256(abi.encodePacked(_eventName))){
                return (
                    allEvents[i].eventID,
                    allEvents[i].eventType,
                    allEvents[i].eventName,
                    allEvents[i].eventDescription,
                    allEvents[i].language,
                    allEvents[i].tags,
                    allEvents[i].rating,
                    allEvents[i].numberOfRatings,
                    allEvents[i].posterURL 
                ); 
            }
        }

        return (0,EventType.MOVIE,"","",Language.ENGLISH,Tag.ACTION,0,0,""); 
    }

    

}