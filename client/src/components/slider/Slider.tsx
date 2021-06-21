import React from "react";
import "antd/dist/antd.css";
import { Link } from "react-scroll";
import "./index.css";
import { Carousel } from "antd";
import { CaretDownOutlined } from '@ant-design/icons'

export default function Slider() {
 
  return (
   <div> <h1 className="h1title">
   <img className="tcLogo" src="./img/tek.png" alt="" />
   קריירה
 </h1>
    {/* <Carousel className="caruselmain" autoplay>
      
      <img src="images/11.jpg" alt="" />
      <img src="images/1234.jpg" alt="" />
   
     
      <img src="images/44.jpeg" alt="" />
      <img src="images/665.jpg" alt="" />
      <img src="images/33.jpeg" alt="" />
      <img src="images/321.jpg" alt="" />
    </Carousel><br/><br/> */}
    <Link className="c-about" to="aboutMainDiv" smooth={true}><CaretDownOutlined style={{ fontSize: '50px', color: 'black' }}/></Link>
    </div>
  );
}
