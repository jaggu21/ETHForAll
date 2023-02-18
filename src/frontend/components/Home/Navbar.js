import {
    Link
} from "react-router-dom";
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
// import market from './market.png'
import drate from "../../Assets/Logo/drate-low-resolution-color-logo.png"
import makeBlockie from 'ethereum-blockies-base64';
import { useNavigate } from "react-router-dom";




const Navigation = ({ web3Handler, account }) => {
    let navigate = useNavigate(); 

    const ageVerifier = () =>{
        let path = `verifyAge`; 
        navigate(path);  
    }
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                
                <Navbar.Brand href="/">
                    <img src={drate} width="60" height="40" className="" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav variant = "tabs" className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/">Add Review</Nav.Link>
                        <Nav.Link as={Link} to="/create">Add Movie/Series</Nav.Link>
                    </Nav>
                    <Nav>
                        {account ? (
                            <Nav.Link
                                href={`https://etherscan.io/address/${account}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button nav-button btn-sm mx-4">
                                <Button variant="outline-light">
                                    {account.slice(0, 5) + '...' + account.slice(38, 42)}
                                </Button>

                            </Nav.Link>
                        ) : (
                            <div>
                                <img style={{height:"2vw",width:"2vw",marginRight:"1vw"}} src={makeBlockie("8f39B2De2a23D70a74AB3325025eB0b2167C9F27")}/>
                                <Button onClick={ageVerifier} variant="outline-light" style={{background:"#FCE44D",color:"black",marginRight:"1vw"}}>Verify Age</Button>
                                <Button onClick={web3Handler} variant="outline-light" style={{background:"#FCE44D",color:"black"}}>Sign Out</Button>
                            </div>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Navigation;