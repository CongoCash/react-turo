import React, {Component} from "react";
import './Carousel.css';
import {Carousel} from 'react-bootstrap';
export default class CarouselImages extends Component {
  render() {

    return (
      <Carousel interval={2000}>
        <Carousel.Item>
          <img className="carousel" width={"100%"} height="500" alt="900x500" src="http://www.gpluxurycarhire.com/images/diapo_marque/i8xY.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel" width={"100%"} height="500" alt="900x500" src="https://cdn2.evo.co.uk/sites/evo/files/styles/gallery_adv/public/images/dir_803/car_photo_401659.jpg?itok=EYtGK1M1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel" width={"100%"} height="500" alt="900x500" src="https://blogmedia.dealerfire.com/wp-content/uploads/sites/538/2017/10/red-2017-Toyota-Prius-driving_o.jpg" />
        </Carousel.Item>
      </Carousel>
    );
  }
}