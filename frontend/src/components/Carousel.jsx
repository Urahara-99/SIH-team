import React from "react";
import Slider from "react-slick";
import"./css/carousel.css"

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots"
  };
  return (
    <div className="slider-container">
          <Slider {...settings}>
            <div className='carousel-container w-16 h-24 md:w-32 md:h-40 lg:w-48 lg:h-60 xl:w-64 xl:h-80 2xl:w-50 2xl:h-96'>
              <img className='w-full h-full object-cover carousel-image' src={require('./images/lib.jpg')} alt="Library" />
              <div className="overlay">
                 <h1 className="title">Revolutionizing Education</h1>
                 <p className="main-content" >Embrace cutting-edge technology in the classroom, transforming traditional teaching into an interactive and engaging experience for students.</p>
                 <a className="link-container" href="/register">Explore</a>
              </div> 
            </div>
            <div className='carousel-container w-16 h-24 md:w-32 md:h-40 lg:w-48 lg:h-60 xl:w-64 xl:h-80 2xl:w-50 2xl:h-96'>
              <img className='w-full h-full object-cover carousel-image' src={require('./images/board.jpg')} alt="Board" />
              <div className="overlay">
                 <h1 className="title">The Future of Personalized Learning</h1>
                 <p className="main-content">Empower every student with tailored learning paths that adapt to individual strengths and needs, ensuring growth at their own pace.</p>
                 <a className="link-container" href="/register">Explore</a>
              </div>
            </div>
            <div className='carousel-container w-16 h-24 md:w-32 md:h-40 lg:w-48 lg:h-60 xl:w-64 xl:h-80 2xl:w-50 2xl:h-96'>
               <img className='w-full h-full object-cover carousel-image' src={require('./images/laptop.jpg')} alt="Board" />
               <div className="overlay">
                 <h1 className="title">Experiential Learning for Real-World Success</h1>
                 <p className="main-content">Bridge the gap between theory and practice with hands-on learning experiences that prepare students for real-world challenges.</p>
                 <a className="link-container" href="/register">Explore</a>
              </div>
            </div>
          </Slider>
    </div>
  );
}

export default Carousel;
