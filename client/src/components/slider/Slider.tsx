import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Link } from "react-scroll";
import { CaretDownOutlined } from '@ant-design/icons'
import CountUp from 'react-countup';
import TextAnimation from 'react-animate-text';
import "./index.css";

// import { Carousel } from "antd";
// import AnimatedNumber from "react-animated-numbers"

export default function Slider() {


  return (
    <div className="sliderContainer">
      <div className="techImage">
        {/* <img src="./images/logotech.png" alt="" /> */}
      </div>

      <div className="DataNumbersDiv">

        <div className='countUp'>
          <CountUp duration={5} start={0} end={770} delay={0}>{({ countUpRef }) => (
            <div>
              <div className='numDataDiv'><span className="numData" ref={countUpRef} /></div>
              <h1><TextAnimation>בוגרים </TextAnimation></h1>
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

