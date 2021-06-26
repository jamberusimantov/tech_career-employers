import React from 'react'
import './BackgroundVideo.css'

const BackgroundVideo = ()=> {

    return (
        <>
      <div className="bg-video-wrap">
    <video src="https://designsupply-web.com/samplecontent/vender/codepen/20181014.mp4" loop muted autoplay>
    </video>
    <div className="overlay">
    </div>
    <h1>Fullscreen video background
    </h1>
  </div>
                </>
    )
}

export default BackgroundVideo
