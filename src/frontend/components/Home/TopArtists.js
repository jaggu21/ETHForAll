import { Container,Row,Col,Button,Card} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import "../Styles/Card.css"


function TopArtists(){
    return(
        <Row className="overflow-hidden" style={{marginTop:"2vw",marginLeft:"15vw",marginRight:"15vw",marginBottom:"5vw"}}>
            <Col>
                <Image src="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcS8vYy2EaeIHi-nOXs2oaIrQks52cWHbC-ds66WbgVmrRrdfmfgSfVH-UsGBb0sFjzl1vxbdudVcV1k5Dg"  roundedCircle="true" fluid="true" style={{width:"11rem",height:"11rem",marginRight:"2vw"}} />
                <h5 style={{marginTop:"1vw",color:"white"}}>Robert Downey Jr.</h5>
            </Col>
            
            <Col>
                <Image src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQu47XJ7cN8YM9nBiB04R1CmCad79iZG18GVZfT7JptWEQDHt7uolqYedGNGFy8HS0tjfjIhuzUybYV3sw" roundedCircle="true" fluid="true" style={{ width: '11rem', height:"11rem",marginRight:"2vw"}} />
               <h5 style={{marginTop:"1vw",color:"white"}}>Jennifer Lawrence</h5>
            </Col>

            <Col>
                <Image src="https://cdn.siasat.com/wp-content/uploads/2022/03/prabhas-1.jpg" roundedCircle="true" fluid="true" style={{ width: '11rem', height:"11rem",marginRight:"2vw"}} />
                <h5 style={{marginTop:"1vw",color:"white"}}>Prabhas Uppalapati</h5>
            </Col>

            <Col>
                <Image src="https://nationaltoday.com/wp-content/uploads/2022/11/456841304-min-1-640x514.jpg" roundedCircle="true" fluid="true" style={{ width: '11rem',height:"11rem", marginRight:"2vw"}} />
                <h5 style={{marginTop:"1vw",color:"white"}}>Scarlett Johansson</h5>
            </Col>

            <Col>
                <Image src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQ1CUHjkHNjDtsNZ8L0tJIf9zxU9fd4-PFp4tD2tLXuT6eQesdR2TZZxESFtgqQbwMFl29hoMPUCDJ5uGw" roundedCircle="true" fluid="true" style={{width:"11rem",height:"11rem",marginRight:"2vw"}} />
                <h5 style={{marginTop:"1vw",color:"white"}}>Chris Hemsworth</h5>
            </Col>
        </Row>
    )
}

export default TopArtists;