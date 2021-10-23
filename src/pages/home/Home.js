import { inject, observer } from "mobx-react";
import { useEffect } from "react";

import { Link } from "react-router-dom";
import React, { Component } from "react";
import Slider from "react-slick";
import "./Home.css";
//editor

// function Home() {}export default inject("mainStore")(observer(Home));
function HomeSlider(props) {
  const { mainStore } = props;
  const { works, work } = mainStore;
  useEffect(() => {
    mainStore.worksRead();
  }, [mainStore]);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
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
    autoplaySpeed: 800,
    pauseOnHover: true,
  };

  return (
    <div>
      <div className="homeSlider">
        <div>
          <h2></h2>
          <Slider {...settings}>
            <div>
              <h3>
                1<img className="slideImg" src="/slide01.jpg" />
              </h3>
            </div>
            <div>
              <h3>
                2<img className="slideImg" src="/slide02.jpg" />
              </h3>
            </div>
            <div>
              <h3>
                3<img className="slideImg" src="/slide03.jpg" />
              </h3>
            </div>
            <div>
              <h3>
                4<img className="slideImg" src="/slide04.jpg" />
              </h3>
            </div>
            <div>
              <h3>
                5<img className="slideImg" src="/slide05.jpg" />
              </h3>
            </div>
            <div>
              <h3>
                6<img className="slideImg" src="/slide06.jpg" />
              </h3>
            </div>
          </Slider>
        </div>
      </div>
      <div>
        <h3>Members</h3>
        <hr className="d-block" />
        <div>
          <h4>Read</h4>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Modify</th>
                <th>Content</th>
              </tr>
            </thead>
            <tbody>
              {works.map((work, index) => (
                <tr key={index}>
                  <td>
                    <Link to={`/detail/${work.work_no}`}>
                      {work.work_title}
                    </Link>
                  </td>
                  <td>{work.artist_id}</td>
                  <div
                    dangerouslySetInnerHTML={{ __html: work.work_content }}
                  ></div>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr className="d-block" />
      </div>
    </div>
  );
}

export default inject("mainStore")(observer(HomeSlider));
