import React from "react";
import "antd/dist/antd.css";

import "./index.css";
import { Carousel } from "antd";
export default function Slider() {
  return (
    <Carousel className="caruselmain" autoplay>
      <img src="images/11.jpg" alt="" />
      <img src="images/1234.jpg" alt="" />
   
     
      <img src="images/44.jpeg" alt="" />
      <img src="images/665.jpg" alt="" />
      <img src="images/33.jpeg" alt="" />
      <img src="images/321.jpg" alt="" />
    </Carousel>
  );
}
