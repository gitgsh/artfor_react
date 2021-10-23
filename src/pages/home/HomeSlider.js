import React, { Component } from "react";
import Slider from "react-slick";
import './Home.css';

function HomeSlider() {
    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block", background: ""  }}
          onClick={onClick}
        />
      );
    }
    
    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block", background: "" }}
          onClick={onClick}
        />
      );
    }
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      autoplay: true,
      autoplaySpeed: 1300,
      pauseOnHover: true
    };
  
    return (
      <div className="homeSlider">
          <Slider className="homeSlider" {...settings}>
              <img className="slideImg" src="/slide01.jpg" />
              <img className="slideImg" src="/slide02.jpg" />
              <img className="slideImg" src="/slide03.jpg" />
              <img className="slideImg" src="/slide04.jpg" />
              <img className="slideImg" src="/slide05.jpg" />
              <img className="slideImg" src="/slide06.jpg" />
          </Slider>
      </div>
    )
  }
  
  
  export default HomeSlider;