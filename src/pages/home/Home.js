import React, { Component } from "react";
import Slider from "react-slick";
import './Home.css';
import HomeSlider from "./HomeSlider";
import axios from "axios";

function Home(props) {


  return (
    <div>
      <HomeSlider />
      <table width="50%" border="1" style={{ margin: 'auto' }}>
        <thead>
          <tr>
            <th>글번호</th>
            <th>글제목</th>
            <th>글쓴이</th>
            <th>작성일</th>
            <th>조회수</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}


export default Home;