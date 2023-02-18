import { Container,Row,Col,Button,Card} from 'react-bootstrap'
import QRCode from "react-qr-code";
import proofRequest from './proofRequest';
import "../../Styles/Card.css"
import Footer from '../Footer';
import Navigation from '../Navbar';


const DEPLOYED_CONTRACT_ADDRESS = "0xc108e3ae375b0414d6c08b4cac1ae0beb932ab8cef771f40286195690efbc886";


let qrProofRequestJson = { ...proofRequest };
qrProofRequestJson.body.transaction_data.contract_address = DEPLOYED_CONTRACT_ADDRESS;
qrProofRequestJson.body.scope[0].rules.query.req = {
  // NOTE: this value needs to match the Attribute name in https://platform-test.polygonid.com
  "Date": {
    // NOTE: this value needs to match the erc20ZkpRequest.ts L34 or erc721ZkpRequest.ts L34
    // - $tl = operator 2 erc20ZkpRequest.ts L38
    // - 20020101 = value erc20ZkpRequest.ts L41
    "$lt": 20020101
  }
};
// NOTE1: if you change this you need to resubmit the erc10|erc721ZKPRequest
// NOTE2: type is case-sensitive
// You can generate new schemas via https://platform-test.polygonid.com
qrProofRequestJson.body.scope[0].rules.query.schema = {
  "url": "https://s3.eu-west-1.amazonaws.com/polygonid-schemas/3f84ca59-cd5c-43df-98b2-5119017a67fe.json-ld",
  "type": "Ami13orolder"
};

// Main Component
// ========================================================
const Code = ({web3Handler,account}) => {

  return (
    <div style={{backgroundColor:"black"}}>
      <Row>
        <Navigation web3Handler = {web3Handler} account = {account}/>
      </Row>
      <Row>
          <Col className="overflow-hidden" style={{marginTop:"3vw",marginLeft:"30vw",marginRight:"30vw",color:"white"}}>
            
            <h1>Verify Your Age Anonymously🚀🚀</h1>
            <p style={{color:"#FCE44D"}}>Powered by Polygon ID💜</p>
        
          </Col>

      </Row>
      <Row>
      <Col className="overflow-hidden" style={{marginTop:"3vw",marginLeft:"40vw",marginRight:"42vw",color:"white"}}>
        <Card style={{backgroundColor:"white"}}>
            <QRCode
          size={500}
          style={{ height: "auto", maxWidth: "15vw", width: "100%",marginLeft:"1vw",marginRight:"1vw",marginTop:"1vw",marginBottom:"1vw"}}
          value={JSON.stringify(qrProofRequestJson)}
          viewBox={`0 0 500 500`}
          />
        </Card>
      </Col>
      </Row>
      <Row>
      <Col className="overflow-hidden" style={{marginTop:"5vw",marginLeft:"30vw",marginRight:"30vw",color:"white"}}>
        
            <h3>Please Verify Your Age in order to rate the events 🚀</h3>
            <ul>
              <li>Download and install Polygonid app on your mobile.</li>
              <li>Connect your polygonid app with your account.</li>
              <li>Get a claim issued by an issued by DRate which should contain the details of your Birthday.</li>
              <li>After recieving the claim, scan the QRCode to verify your age successfully.</li>
              <li>If you're legally above the age of 18, you will be able to rate any event on the platform.</li>
              <li>For more details visit https://polygon.technology/blog/introducing-polygon-id-zero-knowledge-own-your-identity-for-web3</li>
            </ul>
        
      </Col>
      </Row>
      <Footer />
    </div>
  )
};

export default Code ;

