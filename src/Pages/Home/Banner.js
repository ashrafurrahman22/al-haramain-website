import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../../images/Carousel/carousel 1.jpg'
import carousel2 from '../../images/Carousel/carousel 2.jpg'
import carousel3 from '../../images/Carousel/carousel 3.jpg'

const Banner = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel1}
            alt="First slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;