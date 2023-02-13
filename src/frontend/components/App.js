
import './Styles/App.css';
import {useEffect, useState} from 'react'; 


import { AppMode,AuthProvider, CHAIN } from '@arcana/auth'
import {ethers} from "ethers"; 
import DRateAbi from "../contractsData/DRate.json"; 
import DRateAddress from "../contractsData/DRate-address.json"; 
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import { Container,Row,Col,Button,Card} from 'react-bootstrap';
import Home from './Home';
import Create from './AddEvent';

import {useLivepeerProvider} from "@livepeer/react";
import { Auth, useAuth } from "@arcana/auth-react";





function App() {
  const [loading,setLoading] = useState(true); 
  const [loggedIn,setLoggedIn] = useState(false); 
  const [account,setAccount] = useState(""); 
  const [drate,setDRate] = useState();   
  const auth = useAuth();
  
  const provider = useLivepeerProvider()

  useEffect(()=>{
    console.log(auth)
  })

  const onLogin = () => {
    console.log("Logged In")
  }
  
  
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
      {auth.loading ? (
          "Loading"
        ) : auth.isLoggedIn ? (
          <Routes>
            <Route path="/" element={<Home web3Handler={web3Handler} account={account}/>} />
            <Route path="/create" element={<Create web3Handler={web3Handler} account={account} drate={drate} />}/>
          </Routes>
        ) : (
          <div>
             <Auth externalWallet={true} theme={"light"} onLogin={onLogin}/>
          </div>
      )}
    </BrowserRouter>
  );
}

export default App;
