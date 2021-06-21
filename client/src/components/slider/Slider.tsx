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

    </div>
  )
}

