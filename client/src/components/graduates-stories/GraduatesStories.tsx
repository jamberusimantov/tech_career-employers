import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './GraduatesStories.css'
const GraduatesStories =()=> {

    return (
      <div className='graduatContainer'>
        <div className='graduatInnerDiv'>
            <h1>בוגרים שגוייסו השנה</h1>
            <Carousel className='carouselComponent'
    showArrows={true}
    infiniteLoop={true}
    showThumbs={true}
    showStatus={false}
    autoPlay={true}
    interval={6100}
  >
    <div>
      <img src="/images/lior.jpeg" alt =''/>
      <div className="myCarousel">
        <h3>ליאור מזיג</h3>
        <h4>Wix</h4>
        <p>
          טק קריירה זו אחת ההחלטות הכי טובות שקיבלתי בחיים
        </p>
      </div>
    </div>

        <div>
          <img src="/images/yizhak.jpeg" alt=''/>
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
        </div>
    )
}

export default GraduatesStories
