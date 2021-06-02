import React from "react";
import { Carousel } from "antd";
import "./Slider.css";

export default function Slider() {
  return (
    <div className="sliderslider">
      <Carousel autoplay>
        
          <img src="./images/11.jpg" alt="" />
          <img src="./images/22.jpeg" alt="" />
          <img src="./images/33.jpeg" alt="" />
          <img src="./images/44.jpeg" alt="" />
          <img src="./images/55.jpeg" alt="" />
      </Carousel>
    </div>
  );
}