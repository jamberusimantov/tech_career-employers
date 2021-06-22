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
              <span className="numData" ref={countUpRef} />
              <h1><TextAnimation>בוגרים </TextAnimation></h1>
            </div>
          )}
          </CountUp>
        </div>
        <div className='countUp'>
          <CountUp duration={5} start={0} end={112} delay={0}>{({ countUpRef }) => (
            <div>
              <span className="numData" ref={countUpRef} />
              <h1><TextAnimation>חברות מגייסות </TextAnimation></h1>

            </div>
          )}
          </CountUp>
        </div>
        <div className='countUp'>
          <CountUp duration={5} start={0} end={93} delay={0}>{({ countUpRef }) => (
            <div>
              <span className="numData" ref={countUpRef} /><span className="numData">%</span>
              <h1>השמה</h1>
            </div>
          )}
          </CountUp>
        </div>
        <div className='countUp'>
          <CountUp duration={5} start={0} end={10} delay={0}>{({ countUpRef }) => (
            <div>
              <span className="numData" ref={countUpRef} />
              <h1><TextAnimation>כלל הקורסים </TextAnimation></h1>

            </div>
          )}
          </CountUp>
        </div>
        <div className='countUp'>
          <CountUp duration={5} start={0} end={6} delay={0}>{({ countUpRef }) => (
            <div>
              <span className="numData" ref={countUpRef} />
              <h1><TextAnimation>קורסים פעילים </TextAnimation></h1>

            </div>
          )}
          </CountUp>
        </div>
      </div>
      <div></div>
      <Link className="c-about" to="coursesContainer" smooth={true}><CaretDownOutlined style={{ fontSize: '50px', color: 'black' }} /></Link>

=======
import { Carousel } from "antd";
import AnimatedNumber from "react-animated-numbers"

export default function Slider() {

  const [number, setNumber] = React.useState(0)
  const [diff, setDiff] = React.useState(0)

  const increaseNumber = () => {
    setNumber(number + diff)
  }

  const decreaseNumber = () => {
    setNumber(number - diff)
  }

  const onChangeValue = (e:any) => {
    const number = Number(e.target.value)
    setDiff(number)
  }
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
     
        <AnimatedNumber
          fontStyle={{ fontFamily: "Nunito", fontSize: 40 }}
          animateToNumber={number}
          includeComma
          config={{ tension: 89, friction: 40 }}
          onStart={() => console.log("onStart")}
          onFinish={() => console.log("onFinish")}
          animationType={"calm"}
        />
        <div
          style={{
            height: 60,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginTop: 40,
          }}
        >
  
        </div>
      </div>

    </div>
  )
}

