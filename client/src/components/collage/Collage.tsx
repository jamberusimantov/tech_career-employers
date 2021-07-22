import React from 'react';
import "./Collage.css";
const Collage = () => {


    return (
        <div className="grid-container">
            <div className='collageDiv'><img src="/images/image.jpeg" alt=""/></div>
            <div className='titleDiv'>
                
            <img src="./images/logotech.png" alt=""/><span className='collageH1'>
                <span className='collageFirstLetters'>קר</span>
                <span className='collageSecondLetters'>י</span>
                <span className='collageThirdLetters'>י</span>
                <span className='collageLastLetters'>רה</span>

                </span><br></br><br></br>
            <h1 className="typewriter ">הכשרת כוכבים להייטק</h1>
            </div>
            
        </div>
    )
}
export default Collage