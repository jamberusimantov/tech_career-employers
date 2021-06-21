import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Link } from "react-scroll";
import { CaretDownOutlined } from '@ant-design/icons'
import CountUp from 'react-countup';

import "./index.css";

// import { Carousel } from "antd";
// import AnimatedNumber from "react-animated-numbers"

export default function Slider() {


  return (
    <div className="container">
    <div className="DataNumbersDiv">
      <div className='countUp'>
<CountUp duration={5} start={0} end={350} delay={0}>{({ countUpRef }) => (
    <div>
      <span className="numData" ref={countUpRef} />
      <h1>סטודנטים מגוייסים</h1>
    </div>
  )}
</CountUp>
</div>
<div  className='countUp'>
<CountUp duration={5} start={0} end={20} delay={0}>{({ countUpRef }) => (
    <div>
      <span className="numData" ref={countUpRef} />
      <h1>חברות מגייסות</h1>
    </div>
  )}
</CountUp>
</div>
<div className='countUp'>
<CountUp  start={0} end={7} delay={0}>{({ countUpRef }) => (
    <div>
      <span className="numData" ref={countUpRef} />
      <h1>קורסים פעילים</h1>
    </div>
  )}
</CountUp>
</div>
    </div>

    <Link className="c-about" to="aboutMainDiv" smooth={true}><CaretDownOutlined style={{ fontSize: '50px', color: 'black' }}/></Link>

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

