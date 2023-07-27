import { Carousel } from "react-bootstrap";
import carousel1 from '../../../img/carousel/carousel1.png'
import carousel2 from "../../../img/carousel/carousel2.png"
import carousel3 from "../../../img/carousel/carousel3.png"
import carousel4 from "../../../img/carousel/carousel4.png"
import carousel5 from "../../../img/carousel/carousel5.png"


const Banner = () =>
{
    return (
        <Carousel className="mt-1 rounded-box mx-auto w-full">
      <Carousel.Item>
        <img src={carousel1} alt="" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={carousel2} alt="" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={carousel3} alt="" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={carousel4} alt="" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={carousel5} alt="" />
        
      </Carousel.Item>
      </Carousel>
    );
};

export default Banner;