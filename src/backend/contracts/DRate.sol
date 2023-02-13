// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DRate{
    //maintains event-id 
    uint256 public eventID = 0; 

    //mapping of eventID to event 
    mapping(uint256 => CustomEvent) public allEvents; 

    //enum for eventType
    enum EventType{MOVIE, SERIES, MUSIC} 

    //enum for tags
    enum Tag{HORROR, ROMANTIC, SUSPENSE, THRILLER, ACTION, ADVENTURE} 

    //enum for Language
    enum Language{ENGLISH, TELUGU, HINDI, TAMIL, MALAYALAM, MARATHI, KANNADA}

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