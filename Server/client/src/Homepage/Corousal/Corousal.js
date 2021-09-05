import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from "react-responsive-carousel";
import image from "../../asset/carousal_1.jpg";
import "./carousal.css"
import { ImageListItem } from "@material-ui/core";

function Corousel() {
  return (
    <div className="carousal-container">
      <Carousel className="corousal">
        <div>
          <img src={image} />
        </div>
        <div>
          <img src={image} />
        </div>
        <div>
          <img src={image} />
        </div>
      </Carousel>
    </div>
  );
}
export default Corousel;
