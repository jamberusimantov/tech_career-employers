import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './GraduatesStories.css'
import Aos from 'aos';
import 'aos/dist/aos.css';


const GraduatesStories = () => {

  return (
    <div id="graduates" data-aos='fade-up'>
      <h1>בוגרים שלנו</h1>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={true}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="/images/lior.jpeg" />
          <div className="myCarousel">
            <h3>ליאור מזיג</h3>
            <h4>Wix</h4>
            <p>
              טק קריירה זו אחת ההחלטות הכי טובות שקיבלתי בחיים
            </p>
          </div>
        </div>

        <div>
          <img src="/images/yizhak.jpeg" />
          <div className="myCarousel">
            <h3>יצחק גטאי</h3>
            <h4>Wix</h4>
            <p>
              תמיד אהבתי ליצור דברים חדשים טק קריירה בהחלט גרמה לי להבין שזו תהייה הקריירה שלי
            </p>
          </div>
        </div>

      </Carousel>




    </div>
  )
}

export default GraduatesStories
