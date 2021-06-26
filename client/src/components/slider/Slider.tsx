import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Link } from "react-scroll";
import { CaretDownOutlined } from '@ant-design/icons'
import CountUp from 'react-countup';
import TextAnimation from 'react-animate-text';
import BackgroundVideo from "../video/Video.mp4";
import Styled from "styled-components";



import "./index.css";

export default function Slider() {

  const heading = Styled.h1`

            @media (max-width: 767px) {
              font-size: x-small;
            }
            @media (max-width: 400px) {
                // text-align: left;
            }
    `;

  return (
    <div className="sliderContainer">
<video autoPlay loop muted
style={{
    position: "absolute",
    width:"100%",
    left:"50%",
    top:"50%",
    height:"100%",
    objectFit:"cover",
    transform:"translate(-50%, -50%)",

}

}
>
  <source src={BackgroundVideo} type ="video/mp4"/>
</video>

      <div className="techImage">
        
        <img src="./images/logotech.png" alt="" />
        <br/>
      </div>

      <div className="DataNumbersDiv">
{/* <BackgroundVideo/> */}
        <div className='countUp'>
          <CountUp duration={5} start={0} end={770} delay={0}>{({ countUpRef }) => (
            <div>
              <div className='numDataDiv'><span className="numData" ref={countUpRef} /></div>
              <heading><TextAnimation>בוגרים </TextAnimation></heading>
            </div>
          )}
          
          </CountUp>
        </div>
        <div className='countUp'>
          <CountUp duration={5} start={0} end={112} delay={0}>{({ countUpRef }) => (
            <div>
              <div className='numDataDiv'><span className="numData" ref={countUpRef} /></div>
              <h1><TextAnimation>חברות מגייסות </TextAnimation></h1>

            </div>
          )}
          </CountUp>
        </div>
        <div className='countUp'>
          <CountUp duration={5} start={0} end={93} delay={0}>{({ countUpRef }) => (
            <div>
              <div className='numDataDiv'><span className="numData" ref={countUpRef} /></div>
              <h1>השמה</h1>
            </div>
          )}
          </CountUp>
        </div>
        <div className='countUp'>
          <CountUp duration={5} start={0} end={10} delay={0}>{({ countUpRef }) => (
            <div>
              <div className='numDataDiv'><span className="numData" ref={countUpRef} /></div>
              <h1><TextAnimation>כלל הקורסים </TextAnimation></h1>

            </div>
          )}
          </CountUp>
        </div>
        <div className='countUp'>
          <CountUp duration={5} start={0} end={6} delay={0}>{({ countUpRef }) => (
            <div>
              <div className='numDataDiv'><span className="numData" ref={countUpRef} /></div>
              <h1><TextAnimation>קורסים פעילים </TextAnimation></h1>

            </div>
          )}
          </CountUp>
        </div>
      </div>
      <div></div>
      <Link className="c-about" to="coursesContainer" smooth={true}><CaretDownOutlined style={{ fontSize: '50px', color: 'black' }} /></Link>
  
        </div>

    
  )
}

