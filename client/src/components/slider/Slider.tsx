import React from "react";
import "antd/dist/antd.css";

import "./index.css";
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
