import './Styles/App.css';
import {useState} from 'react'; 
import Navigation from './Home/Navbar';
import UncontrolledExample from './Home/Carousel';
import Explore from './Home/Explore';
import TopRated from './Home/TopRated';
import TopArtists from './Home/TopArtists';

import { AuthProvider, CHAIN } from '@arcana/auth'
import {ethers} from "ethers"; 
import DRateAbi from "../contractsData/DRate.json"; 
import DRateAddress from "../contractsData/DRate-address.json"; 
import { BrowserRouter } from 'react-router-dom';
import { Container,Row,Col,Button,Card} from 'react-bootstrap';
import Footer from './Home/Footer';

function Home({web3Handler,account}){
    return(
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

        <h3 style={{marginTop:"2vw",marginRight:"15vw",marginLeft:"15vw",color:"#FCE44D"}}>|| Top Artists</h3>
        <h5 style={{marginTop:".1vw",marginRight:"15vw",marginLeft:"15vw",color:"white"}}>Explore movies/shows by top rated artists</h5>
        <TopArtists/>

        
        <Footer/>
      </div>
    )
}

export default Home; 