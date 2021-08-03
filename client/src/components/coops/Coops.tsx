import React from "react";
import "./Coops.css"

export default function Coops() {


  return (
    <div id="footer-container">
      <div className="coImages">
        <div className='coImage'> 
               <a href="https://https://www.bynet.co.il//"><img className="coLogo1" src="./co-images/binat.png" alt="" /></a>
        </div>
        <div className='coImage'>     
           <a href="https://https://www.is.com//"><img className="coLogo" src="./co-images/iron.png" alt="" /></a>
        </div>
        <div className='coImage'>   
             <a href="https://www.oracle.com/index.html"><img className="coLogo" src="./co-images/oracle.png" alt="" /></a>
        </div>
        <div className='coImage'>    
            <a href="https://www.wix.com/"><img className="coLogo" src="./co-images/wix.png" alt="" /></a>
        </div>
        <div className='coImage'>    
            <a href="https://www.redhat.com/en"><img className="coLogo" src="./co-images/redhat.jpg" alt="" /></a>
        </div>
      </div>

      <div className='footer-middle'>
        <div>
          <h1>צרו קשר</h1>
          <h2>0533345685</h2>
          <h2>Sara@tech-career.org</h2>
        </div>
        <div>
          <h1>כתובת</h1>
          <h2>בת שבע 3, מתחם טלרד, לוד</h2>
        </div>
       
        <div>
        <h1>סמנכ״ל טק קריירה</h1>
          <h2>מורית דרורי</h2>
        </div>
        <div>
          <h1>מנכ״ל טק קריירה</h1>
          <h2>טקלה מקונן</h2>
        </div>
      </div>
    </div>
  );
}