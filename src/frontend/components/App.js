
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
import Code from './Home/QRCode/QRcode'
import Rate from './Rate';

import {useLivepeerProvider} from "@livepeer/react";
import { Auth, useAuth } from "@arcana/auth-react";
import { useNavigate } from "react-router-dom";



function App({auth}) {
  const [loading,setLoading] = useState(true); 
  const [loggedIn,setLoggedIn] = useState(false); 
  const [account,setAccount] = useState(""); 
  const [drate,setDRate] = useState();   
  
  
 

  const web3Handler = async() => { 
  
    // console.time('auth_init')
    // await provider.init()
    // console.timeEnd('auth_init')
    // const isLoggedIn = await provider.isLoggedIn()

    // const accounts = await provider.provider.request({ method: 'eth_accounts' })
    // setAccount(accounts[0])
    // console.log(accounts)
    
    
    
    // // const accounts = await window.ethereum.request({method: 'eth_requestAccounts'}); 
    // // const provider  = new ethers.providers.Web3Provider(window.ethereum)
    // // setAccount(accounts[0])
    // // const signer = provider.getSigner()
    // // loadContracts(signer) 

    // loadContracts(signer) 
    // setLoggedIn(isLoggedIn)
  }

  const onLogin = async () =>{
    // console.time('auth_init')
    // await auth.init()
    // console.timeEnd('auth_init')
    // const isLoggedIn = await auth.isLoggedIn()

    // const accounts = await auth.provider.request({ method: 'eth_accounts' })
    // setAccount(accounts[0])
    // console.log(accounts)

    // console.log(auth)
    // const provider = auth.provider;

    // const sig = await provider.request({
    //   method: 'eth_signTransaction',
    //   params: [
    //     {
    //       from:accounts[0], // sender account address
    //       gasPrice: 0,
    //       to: accounts[0], // receiver account address
    //       value: '0x00000000000000',
    //     },
    //   ],
    // })
    
    setLoggedIn(true)
    const accounts = await window.ethereum.request({method: 'eth_requestAccounts'}); 
    const provider  = new ethers.providers.Web3Provider(window.ethereum)
    setAccount(accounts[0])
    const signer = provider.getSigner()
    loadContracts(signer)  
  }

  const loadContracts = async(signer) => { 
    const drate = new ethers.Contract(DRateAddress.address,DRateAbi.abi,signer); 
    setDRate(drate); 
    setLoading(false); 
  }

  return (
    <BrowserRouter>
      { 
       loggedIn? (
          <Routes>
            <Route path="/" element={<Home web3Handler={onLogin} account={account}/>} />
            <Route path="/create" element={<Create web3Handler={onLogin} account={account} drate={drate} auth={auth}/>}/>
            <Route path="/rate" element={<Rate web3Handler={onLogin} account={account} drate={drate} auth={auth}/>}/>
            <Route path="/verifyAge" element={<Code web3Handler={onLogin} account={account}/>}/>
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
