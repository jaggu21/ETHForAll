import { Container,Row,Col,Button,Card} from 'react-bootstrap';
import "./Card.css"


function TopRated(){
    return(
        <Col className="overflow-hidden" style={{marginTop:"2vw",marginLeft:"15vw",marginRight:"15vw"}}>
            
            <Card style={{ width: '15rem', marginRight:"1vw"}} bg="dark" text='white' className='card'>
                <div style={{height:"21rem"}}>
                 <Card.Img variant="top" src={"https://i.ytimg.com/vi/19THOH_dvxg/movieposter_en.jpg"} />
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
                    <Card.Img variant="top" className="d-block w-100 h-100" src={"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"} />
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
                    <Card.Img variant="top" className="d-block w-100 h-100" src={"https://resizing.flixster.com/WAHXGKleT3QvhqHUlFGIRgcQAjU=/206x305/v2/https://flxt.tmsimg.com/assets/p173378_p_v8_au.jpg"} />       
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
                    <Card.Img variant="top" className="d-block w-100 h-100" src={"http://timesofindia.indiatimes.com/photo/61246653.cms"} />       
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
                    <Card.Img variant="top" className="d-block w-100 h-100" src={"https://m.media-amazon.com/images/I/711eHgGtnFL._SL1209_.jpg"} />       
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

export default TopRated;