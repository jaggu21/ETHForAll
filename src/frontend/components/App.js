
import './Styles/App.css';
import {useState} from 'react'; 
import Navigation from './Home/Navbar';
import UncontrolledExample from './Home/Carousel';
import Explore from './Home/Explore';
import TopRated from './Home/TopRated';

import { AuthProvider, CHAIN } from '@arcana/auth'
import {ethers} from "ethers"; 
import DRateAbi from "../contractsData/DRate.json"; 
import DRateAddress from "../contractsData/DRate-address.json"; 
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import { Container,Row,Col,Button,Card} from 'react-bootstrap';
import Footer from './Home/Footer';
import Home from './Home';
import Create from './AddEvent';



function App() {
  const [loading,setLoading] = useState(true); 
  const [account,setAccount] = useState(""); 
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
      <Routes>
              <Route path="/" element={<Home web3Handler={web3Handler} account={account}/>} />
              <Route path="/create" element={<Create web3Handler={web3Handler} account={account} drate={drate} />}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
