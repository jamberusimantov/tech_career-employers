import React from "react";
import "./Coops.css"

export default function Coops() {
  return (
    <div id="coOpsMainDiv">
      <img className="tcLogo" src="./images/logotech.png" alt="" />
      <div className="texttext">
        <u><h1> שיתופי פעולה</h1></u>
        <div className="coImages">
         <a href="https://https://www.bynet.co.il//"><img className="coLogo1" src="./co-images/binat.png" alt="" /></a> 
          <a href="https://https://www.is.com//"><img className="coLogo" src="./co-images/iron.png" alt="" /></a> 
          <a href="https://www.oracle.com/index.html"><img className="coLogo" src="./co-images/oracle.png" alt="" /></a>
          <a href="https://www.wix.com/"><img className="coLogo" src="./co-images/wix.png" alt="" /></a>
          <a href="https://www.redhat.com/en"><img className="coLogo" src="./co-images/redhat.jpg" alt="" /></a>
        </div>
      </div>
    </div>
  );
}