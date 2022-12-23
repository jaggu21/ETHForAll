import { Container,Row,Col,Button,Card} from 'react-bootstrap';
import "../Styles/Card.css"


function Explore(){
    return(
        <Col className="overflow-hidden" style={{marginTop:"2vw",marginLeft:"15vw",marginRight:"15vw"}}>
            
            <Card style={{ width: '15rem', marginRight:"1vw"}} bg="dark" text='white' className='card'>
                <div style={{height:"20rem"}}>
                 <Card.Img variant="top" src={"https://m.media-amazon.com/images/M/MV5BOTYxOWU3OWYtOGM4NC00NDhlLTlmZTYtMGUxM2YwZmFhOGFlXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg"} />
                </div>
                <Card.Footer>
                <div className='d-grid'>
                    <Button size="lg" style={{background:"#FCE44D",color:"black"}}>
                    Add To Watchlist
                    </Button>
                </div>
                </Card.Footer>
            </Card>

            <Card style={{ width: '15rem',marginRight:"1vw"}} bg="dark" text='white' className='card'>
                <div style={{height:"20rem"}}>
                    <Card.Img variant="top" className="d-block w-100 h-100" src={"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/7d580583f656147607331c30f8000c39deef0e033c9bce9c21c01d70b50cefb8._RI_V_TTW_.jpg"} />
                </div>
                <Card.Footer>
                <div className='d-grid'>
                    <Button size="lg" style={{background:"#FCE44D",color:"black"}}>
                    Add To Watchlist
                    </Button>
                </div>
                </Card.Footer>
            </Card>

            <Card style={{ width: '15rem',marginRight:"1vw"}} bg="dark" text='white' className='card'>
                 <div style={{height:"20rem"}}>
                    <Card.Img variant="top" className="d-block w-100 h-100" src={"https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2022_11/story_13829/assets/4.jpeg?time=1669278969"} />       
                 </div>
                <Card.Footer>
                <div className='d-grid'>
                    <Button size="lg" style={{background:"#FCE44D",color:"black"}}>
                    Add To Watchlist
                    </Button>
                </div>
                </Card.Footer>
            </Card>

            <Card style={{ width: '15rem',marginRight:"1vw"}} bg="dark" text='white' className='card'>
                <div style={{height:"20rem"}}>
                    <Card.Img variant="top" className="d-block w-100 h-100" src={"https://wwwflickeringmythc3c8f7.zapwp.com/q:i/r:1/wp:1/w:371/u:https://cdn.flickeringmyth.com/wp-content/uploads/2022/06/muder-at-yellowstone-city-600x738.jpg"} />       
                </div>
                <Card.Footer>
                <div className='d-grid'>
                    <Button size="lg" style={{background:"#FCE44D",color:"black"}}>
                    Add To Watchlist
                    </Button>
                </div>
                </Card.Footer>
            </Card>

            <Card style={{ width: '14.1rem',marginRight:"1vw"}} bg="dark" text='white' className='card'>
                <div style={{height:"20rem"}}>
                    <Card.Img variant="top" className="d-block w-100 h-100" src={"https://m.media-amazon.com/images/M/MV5BYjNmOWIyYTUtODcyOC00YzA5LWJhYzQtOGNhNmE4NjVlYjg0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"} />       
                </div>
                
                <Card.Footer>
                <div className='d-grid'>
                    <Button size="lg" style={{background:"#FCE44D",color:"black"}}>
                    Add To Watchlist
                    </Button>
                </div>
                </Card.Footer>
            </Card>
        </Col>
    )
}

export default Explore;