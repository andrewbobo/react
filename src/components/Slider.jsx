import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import lil from "../img/lil.jpg";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

export default class Slider extends Component {
  render() {
    return (
      <Carousel showArrows={false} showStatus={false} showThumbs={false}>
        <div>
          <img src={lil} alt="ing" />
        </div>
        <div>
          <img src={lil} alt="ing" />
        </div>
        <div>
          <img src={lil} alt="ing" />
        </div>
      </Carousel>
    );
  }
}
