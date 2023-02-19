import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Row, Col, Form, Button, Container, Card } from "react-bootstrap";
import Navigation from "./Home/Navbar";
import Footer from "./Home/Footer";
import Image from "react-bootstrap/Image";
import "./Styles/Card.css";

const resolveIPFS = (ipfs_url) => {
    return "https://dweb.link/ipfs/" + ipfs_url.split("ipfs/")[1]
} 

const Rate = ({ web3Handler, account, drate, auth }) => {
  const [movies, setMovies] = useState([]);
  const [numVotes, setNumVotes] = useState(0);
  const [rating, setRating] = useState(5);

  const QuadVote = async (eventID) => {
    let contract = await drate;

    console.log(eventID.toNumber(), "eventID");

    let txn = await contract.QVRating(
      parseInt(eventID),
      parseInt(numVotes),
      parseInt(rating),
      {
        gasLimit: 2000000,
      }
    );

    console.log(txn, " HASH ");
    console.log("voting done");
  };

  const getMovies = async () => {
    // we create a local variable with the same name as the state variable where were going to hold our people elements.
    let movieArray = [];
    let ContractInstance = await drate;

    console.log(ContractInstance, "ContractInstance");
    // // we query our counter.
    const eventCount = await ContractInstance.eventID();

    console.log(eventCount.toNumber(), "eventCount");

    for (var i = 0; i < eventCount.toNumber(); i++) {
      const movie = await ContractInstance.events(i);
      console.log(movie);
      movieArray.push(movie);
    }

    // we set the local varible value as our state variable, since it has the same name, you dont need to do {peopleArray: peopleArray}
    setMovies(movieArray);
    console.log(movieArray[1], "movieArray");
  };

  useEffect(() => {
    // Runs the function getVideos when the component is mounted
    getMovies();
  }, []);

  return (
    <div style={{ background: "black" }}>
      <Navigation web3Handler={web3Handler} account={account} />

      <h3
        style={{
          marginTop: "2vw",
          marginRight: "15vw",
          marginLeft: "15vw",
          color: "#FCE44D",
        }}
      >
        || Movie Rating
      </h3>

      <Col
        className="overflow-hidden"
        style={{ marginTop: "2vw", marginLeft: "15vw", marginRight: "15vw" }}
      >
        {movies.map((movie) => (
          <Card
            style={{ width: "15rem", marginRight: "1vw" }}
            bg="dark"
            text="white"
            className="card"
            key={movie.eventID}
          >
            <div style={{ height: "21rem" }}>
              <Card.Img variant="top" src={resolveIPFS(movie.posterURL)} />
            </div>
            <Card.Body>
              <Button
                size="lg"
                style={{ background: "#FCE44D", color: "black", margin: "10%" }}
              >
                {movie.rating / 1000 +
                  " ⭐️ - " +
                  movie.numberOfRatings +
                  " votes"}
              </Button>
              <Card.Title>{movie.eventName}</Card.Title>
              <Card.Text>{movie.eventDescription}</Card.Text>

              <Form.Control
                onChange={(e) => setNumVotes(e.target.value)}
                style={{
                  background: "black",
                  color: "#FCE44D",
                  marginBottom: "15px",
                }}
                required
                type="text"
                placeholder="Number of Votes"
              />
              <Form.Control
                onChange={(e) => setRating(e.target.value)}
                style={{
                  background: "black",
                  height: "4vw",
                  color: "#FCE44D",
                  marginBottom: "15px",
                }}
                required
                type="textarea"
                rows="5"
                placeholder="Your Rating"
              />
              <Button
                size="lg"
                style={{
                  background: "#FCE44D",
                  color: "black",
                  marginLeft: "20%",
                }}
                onClick={() => QuadVote(movie.eventID)}
              >
                Rate Now
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Col>

      <div
        style={{
          marginTop: "22vw",
          marginRight: "15vw",
          marginLeft: "15vw",
          color: "#FCE44D",
        }}
      >
        {" "}
      </div>

      <Footer />
    </div>
  );
};

export default Rate;

// const movies = [
//   {
//     eventID: 0,
//     eventType: "movie",
//     eventName: "The Matrix",
//     eventDescription:
//       "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
//     language: "English",
//     tags: ["Action", "Sci-Fi"],
//     author: "Wachowski Brothers",
//     rating: 4.5,
//     numberOfRatings: 100,
//     posterURL: "https://i.ytimg.com/vi/19THOH_dvxg/movieposter_en.jpg",
//   },

//   {
//     eventID: 0,
//     eventType: "movie",
//     eventName: "The Matrix 2",
//     eventDescription:
//       "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
//     language: "English",
//     tags: ["Action", "Sci-Fi"],
//     author: "Wachowski Brothers",
//     rating: 4.5,
//     numberOfRatings: 100,
//     posterURL:
//       "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
//   },

//   {
//     eventID: 0,
//     eventType: "movie",
//     eventName: "The Matrix 3",
//     eventDescription:
//       "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
//     language: "English",
//     tags: ["Action", "Sci-Fi"],
//     author: "Wachowski Brothers",
//     rating: 4.5,
//     numberOfRatings: 100,
//     posterURL:
//       "https://resizing.flixster.com/WAHXGKleT3QvhqHUlFGIRgcQAjU=/206x305/v2/https://flxt.tmsimg.com/assets/p173378_p_v8_au.jpg",
//   },

//   {
//     eventID: 0,
//     eventType: "movie",
//     eventName: "The Matrix 4",
//     eventDescription:
//       "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
//     language: "English",
//     tags: ["Action", "Sci-Fi"],
//     author: "Wachowski Brothers",
//     rating: 4.5,
//     numberOfRatings: 100,
//     posterURL: "http://timesofindia.indiatimes.com/photo/61246653.cms",
//   },

//   {
//     eventID: 0,
//     eventType: "movie",
//     eventName: "The Matrix 5",
//     eventDescription:
//       "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
//     language: "English",
//     tags: ["Action", "Sci-Fi"],
//     author: "Wachowski Brothers",
//     rating: 4.5,
//     numberOfRatings: 100,
//     posterURL: "https://m.media-amazon.com/images/I/711eHgGtnFL._SL1209_.jpg",
//   },
// ];
