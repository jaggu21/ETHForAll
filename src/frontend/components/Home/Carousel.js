import Carousel from 'react-bootstrap/Carousel';
import {useLivepeerProvider} from "@livepeer/react";
import { Player } from '@livepeer/react';


const Avatar = () => {
  return(
    <img
    className="d-block w-100 h-100"
    src="https://lumiere-a.akamaihd.net/v1/images/csr_yt_ae2ddc55.jpeg?region=0,0,1920,1080"
    alt="Avatar: The Way of Water"
    />
  )
}

const RRR = () => {
  return(
    <img
      className="d-block w-100 h-100"
      src="https://images.indianexpress.com/2021/09/RRR-1200.jpg"
      alt="RRR"
    />
  )
}

const Oppenheimer = () => {
  return(
    <img
      className="d-block w-100 h-100"
      src="https://i.ytimg.com/vi/hflCiNtY6MA/maxresdefault.jpg"
      alt="Oppenheimer"
    />
  )
}
function UncontrolledExample() {
  const provider = useLivepeerProvider()
  return (
    <Carousel style={{marginTop:"2vw",marginLeft:"15vw",marginRight:"15vw"}} >
      <Carousel.Item interval={5000}>
          <Player
          title="Avatar: The Way of Water"
          playbackId="08128g4enlqey18l"
          poster={<Avatar />}
          showPipButton
          objectFit="cover"
          priority
        />
      </Carousel.Item>

      <Carousel.Item interval={5000}>
      <Player
          title="RRR"
          playbackId="568cye0kq2l6jg2g"
          poster={<RRR />}
          showPipButton
          objectFit="cover"
          priority
        />

       
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <Player
          title="Oppenheimer"
          playbackId="20e3g9ihazrbdpbi"
          poster={<Oppenheimer />}
          showPipButton
          objectFit="cover"
          priority
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;