import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel style={{marginTop:"2vw",marginLeft:"15vw",marginRight:"15vw"}}>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://lumiere-a.akamaihd.net/v1/images/csr_yt_ae2ddc55.jpeg?region=0,0,1920,1080"
          alt="Avatar: The Way of Water"
        />
        {/* <Carousel.Caption>
          <h3 style={{color:"#FCE44D"}}>Avatar: The Way of Water</h3>
          <p>Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.</p>
        </Carousel.Caption>  */}
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://images.indianexpress.com/2021/09/RRR-1200.jpg"
          alt="RRR"
        />

        {/* <Carousel.Caption>
          <h3>RRR</h3>
          <p>A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in the 1920s.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://i.ytimg.com/vi/hflCiNtY6MA/maxresdefault.jpg"
          alt="Oppenheimer"
        />

        {/* <Carousel.Caption>
          <h3>Oppenheimer</h3>
          <p>
          The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;