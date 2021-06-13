import React from 'react'
import './Collaboration.css'

function Collaboration() {
    return (
        <div className="coOpsMainDiv">
        <img className="tcLogo" src="./images/logotech.png" alt="" />
        <div className="texttext">
          <u><h1> שיתופי פעולה</h1></u>
          <div className="coImages">
           <a href="https://www.thejoint.org.il/"><img className="coLogo" src="./co-images/joint.png" alt="" /></a> 
            <a href="https://il.att.com/"><img className="coLogo" src="./co-images/atnt.jpg" alt="" /></a> 
            <a href="https://bherezbh.wixsite.com/mysite-1?fbclid=IwAR2SEwwATeH_JAhEJ1RYaLU_z4s23j_INzgaw6F561Sdy5z4ZB4idPLUklw"><img className="coLogo" src="./co-images/code.jpg" alt="" /></a>
            <a href="https://www.wix.com/"><img className="coLogo" src="./co-images/wix.png" alt="" /></a>
          </div>
        </div>
      </div>
    )
}

export default Collaboration