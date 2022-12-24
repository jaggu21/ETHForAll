import { useState } from 'react'
import { ethers } from "ethers"
import { Row, Form, Button, Container } from 'react-bootstrap'
import Navigation from './Home/Navbar';
import Footer from './Home/Footer';
import Explore from './Home/Explore';

const NFTPortPrivateKey = `77bec83c-36ac-4130-8a24-d7ad6cc8b8c4`

const Create = ({web3Handler,account,drate}) => {
  const [image, setImage] = useState('')
  const [eventType,setEventType] = useState() 
  const [name,setName] = useState()
  const [description,setDescription] = useState()
  const [language,setLanguage] = useState()
  const [tag,setTag] = useState() 

  const uploadToIPFS = async (event) => {
    console.log("Uploading File to IPFS")
    //loading files
    event.preventDefault()
    const file = event.target.files[0];

    const form = new FormData();
    //const fileStream = fs.createReadStream(file.name,{encoding: 'UTF-8'});
    form.append('file', file);

    if (typeof file !== 'undefined') {
      try {
        const options = {
            method: 'POST',
            body: form,
            headers: {
              'Authorization': NFTPortPrivateKey,
            },
          };
          

        fetch('https://api.nftport.xyz/v0/files', options)
            .then(response => {
              return response.json()
            })
            .then(responseJson => {
              // Handle the response
              console.log(responseJson);
              setImage(responseJson['ipfs_url']);
        })
      } catch (error){
        console.log("ipfs image upload error: ", error)
      }
    }
  }

  const addNewEvent = async() =>{
    // const result = await(await drate.addEvent(parseInt(eventType),name,description,parseInt(language),parseInt(tag),image)).wait()
    // console.log(result)
    const value = drate.getMovieByName("Test Movie")
  }

  return (
    <div style={{background:"black"}}>
      <Navigation web3Handler = {web3Handler} account = {account}/>

      <h3 style={{marginTop:"2vw",marginRight:"15vw",marginLeft:"15vw",color:"#FCE44D"}}>|| Add New Event</h3>
      {/* <h5 style={{marginTop:".1vw",marginRight:"15vw",marginLeft:"15vw",color:"white"}}>Discover what's hot in your region</h5> */}

      <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 mx-auto" style={{ maxWidth: '1000px' }}>
            <div className="content mx-auto">
              <Row className="g-4">
              <Form.Control type="file" style={{background:"black",color:"#FCE44D"}} required name="file" onChange={uploadToIPFS} />

              <Form.Select aria-label="Event Type" style={{background:"black",color:"#FCE44D"}} onChange={(value)=> setEventType(value.target.value)}>
                    <option>Select The Event Type</option>
                    <option value="0">Movie</option>
                    <option value="1">Web-Series</option>
                    <option value="2">Music</option>
              </Form.Select>

              <Form.Select aria-label="Select Genre" style={{background:"black",color:"#FCE44D"}} onChange={(value)=> setTag(value.target.value)}>
                    <option>Select The Genre</option>
                    <option value="0">HORROR</option>
                    <option value="1">ROMANTIC</option>
                    <option value="2">SUSPENSE</option>
                    <option value="3">THRILLER</option>
                    <option value="4">ACTION</option>
                    <option value="5">ADVENTURE</option>
              </Form.Select>

              <Form.Select aria-label="Language" style={{background:"black",color:"#FCE44D"}} onChange={(value)=> {setLanguage(value.target.value)}}>
                    <option>Select The Language</option>
                    <option value="0">ENGLISH</option>
                    <option value="1">TELUGU</option>
                    <option value="2">HINDI</option>
                    <option value="3">TAMIL</option>
                    <option value="4">MALAYALAM</option>
                    <option value="5">MARATHI</option>
                    <option value="6">KANNADA</option>
              </Form.Select>

              <Form.Control onChange={(e) => setName(e)} style={{background:"black",color :"#FCE44D"}} required type="text" placeholder="Event Name"/>

              <Form.Control onChange={(e) => setDescription(e)} style={{background:"black",height:"4vw",color:"#FCE44D"}} required type="textarea" rows="5" placeholder="Event Description"/>


              <div className="d-grid px-0">
                <Button onClick={addNewEvent} style={{background:"#FCE44D",color:"black"}} size="lg">
                    Add Event
                  </Button>
              </div>
              </Row>
            </div>
          </main>
        </div>
      </div>

      <div style={{marginTop:"22vw",marginRight:"15vw",marginLeft:"15vw",color:"#FCE44D"}}> </div>   

      <Footer/>
    </div>
  );
}

export default Create