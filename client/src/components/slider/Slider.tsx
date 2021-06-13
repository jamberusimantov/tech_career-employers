import React from "react";
import { Carousel } from "antd";
import "./index.css";

export default function Slider() {
  return (
    <div className="sliderContainer">
      <div className="sliderSmallContainer">
        <Carousel autoplay>
          <img src="./images/11.jpg" alt="N/A" />
          <img src="./images/22.jpeg" alt="N/A" />
          <img src="./images/33.jpeg" alt="N/A" />
          <img src="./images/44.jpeg" alt="N/A" />
          <img src="./images/55.jpeg" alt="N/A" />
        </Carousel>
      </div>
    </div>
  );
}
