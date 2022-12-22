
import './App.css';
import {useState} from 'react'; 
import Navigation from './Navbar';
import UncontrolledExample from './Carousel';
import Explore from './Explore';
import TopRated from './TopRated';


import {ethers} from "ethers"; 
import DRateAbi from "../contractsData/DRate.json"; 
import DRateAddress from "../contractsData/DRate-address.json"; 
import { BrowserRouter } from 'react-router-dom';
import { Container,Row,Col,Button,Card} from 'react-bootstrap';
import Footer from './Footer';



function App() {
  const [loading,setLoading] = useState(true); 
  const [account,setAccount] = useState(); 
  const [drate,setDRate] = useState(); 

  const web3Handler = async() => {
    const accounts = await window.ethereum.request({method: 'eth_requestAccounts'}); 
    const provider  = new ethers.providers.Web3Provider(window.ethereum)
    setAccount(accounts[0])

    const signer = provider.getSigner()
    loadContracts(signer) 
  }

  const loadContracts = async(signer) => {
    //Get deployed copies of contract 
    const drate = new ethers.Contract(DRateAddress.address,DRateAbi.abi,signer); 
    setDRate(drate); 
    setLoading(false); 
  }

  return (
    <BrowserRouter>
      <div style={{backgroundColor:"black"}}>
        <Navigation web3Handler = {web3Handler} account = {account}/>
        
        <h3 style={{marginTop:"2vw",marginRight:"15vw",marginLeft:"15vw",color:"#FCE44D"}}>|| Featured Today</h3>
        <h5 style={{marginTop:".1vw",marginRight:"15vw",marginLeft:"15vw",color:"white"}}>Discover what's hot in your region</h5>
        <UncontrolledExample/>

        <h3 style={{marginTop:"2vw",marginRight:"15vw",marginLeft:"15vw",color:"#FCE44D"}}>|| Explore</h3>
        <h5 style={{marginTop:".1vw",marginRight:"15vw",marginLeft:"15vw",color:"white"}}>Getting bored? Why don't you try these out?</h5>
        <Explore />

        
        <h3 style={{marginTop:"2vw",marginRight:"15vw",marginLeft:"15vw",color:"#FCE44D"}}>|| Top Rated</h3>
        <h5 style={{marginTop:".1vw",marginRight:"15vw",marginLeft:"15vw",color:"white"}}>DRate Top movies as rated by regular DRate voters</h5>
        <TopRated />

        
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
