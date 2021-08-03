import React from "react";
import "antd/dist/antd.css";
import { PercentageOutlined } from '@ant-design/icons'
import CountUp from 'react-countup';
import TextAnimation from 'react-animate-text';


import "./index.css";

export default function Slider() {



  return (
    <div id="sliderContainer">
      <video autoPlay loop muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100vh",
          objectFit: "cover",
          transform: "translate(-50%, -50%)"
        }}>
        <source src='./assets/video/video.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      <div className="DataNumbersDiv">
        <div className='countUp'>
          <CountUp duration={5} start={0} end={770} delay={0}>{({ countUpRef }) => (
            <div>
              <div className='numDataDiv'><span className="numData" ref={countUpRef} /></div>
              <h1 className="sliderH1"><TextAnimation>בוגרים </TextAnimation></h1>
            </div>
          )}

          </CountUp>
        </div>
        <div className='countUp'>
          <CountUp duration={5} start={0} end={112} delay={0}>{({ countUpRef }) => (
            <div>
              <div className='numDataDiv'><span className="numData" ref={countUpRef} /></div>
              <h1 className="sliderH1"><TextAnimation>חברות מגייסות </TextAnimation></h1>

            </div>
          )}
          </CountUp>
        </div>
        <div className='countUp'>
          <CountUp duration={5} start={0} end={93} delay={0}>{({ countUpRef }) => (
            <div>
              <div className='numDataDiv'><span className="numData" ref={countUpRef} /><span><PercentageOutlined className="percentIcone" style={{ fontSize: '55px' }} /></span></div>
              <h1 className="sliderH1">השמה</h1>
            </div>
          )}
          </CountUp>
        </div>
        <div className='countUp'>
          <CountUp duration={5} start={0} end={10} delay={0}>{({ countUpRef }) => (
            <div>
              <div className='numDataDiv'><span className="numData" ref={countUpRef} /></div>
              <h1 className="sliderH1"><TextAnimation>כלל הקורסים </TextAnimation></h1>

            </div>
          )}
          </CountUp>
        </div>
        <div className='countUp'>
          <CountUp duration={5} start={0} end={6} delay={0}>{({ countUpRef }) => (
            <div>
              <div className='numDataDiv'><span className="numData" ref={countUpRef} /></div>
              <h1 className="sliderH1"><TextAnimation>קורסים פעילים </TextAnimation></h1>

            </div>

          )}
          </CountUp>
        </div>
      </div>

    </div>


  )
}

