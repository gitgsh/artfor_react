import { inject, observer } from "mobx-react";
import { Link, Route } from "react-router-dom";
import React, { Component, useEffect } from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./Home.css";

function OpenExpectPrj(props) {
  const { mainStore } = props;
  const { works, work } = mainStore;

  var today = new Date();
  var year = today.getFullYear();
  var month = ("0" + (today.getMonth() + 1)).slice(-2);
  var day = ("0" + today.getDate()).slice(-2);
  var dateString = year + "-" + month + "-" + day; //현재날짜(2021-11-10 형태)

  //전체 데이터(반복문)
  const allList = works.map(function (data, i) {
    return data;
  });

  //전체 데이터 중 오픈예정 데이터 필터링
  const findOpenExp = allList.filter((data) => {
    return data.funding_startline > dateString;
  });

  return (
    <>
      <p
        className="main_home"
        style={{
          transform: "skew(-0.1deg)",
          fontWeight: "bold",
        }}
      >
        공개예정 프로젝트
      </p>
      <div className="main_home_in_1">
        <CardGroup className="cardgroup_Home">
          {findOpenExp.slice(0, 4).map(function (data, j) {
            return (
              <Card className="card_Home">
                <Link to={`/detailOpenExp/${data.work_no}`}>
                  <Card.Img
                    variant="top"
                    src={`image/${data.work_img}`}
                    style={{
                      width: "250px",
                      height: "200px",
                      borderRadius: 15,
                      overflow: "hidden",
                    }}
                  />
                </Link>
                <Card.Body className="cardbody_Home">
                  <Card.Title
                    className="cardtitle_Home"
                    style={{
                      transform: "skew(-0.1deg)",
                      fontWeight: "bold",
                      color: "#6c757d",
                    }}
                  >
                    예술 | {data.artist_name}
                  </Card.Title>
                  <Card.Text className="cardtext_Home">
                    <Link
                      to={`/detailOpenExp/${data.work_no}`}
                      style={{
                        textDecorationLine: "none",
                        transform: "skew(-0.1deg)",
                        color: "#495057",
                        fontWeight: "bold",
                      }}
                    >
                      {data.work_title}
                    </Link>
                  </Card.Text>
                  <div className="cardfooter" style={{ marginTop: "-7px"}}>
                  <p style={{color: "#FF5757"}}>
                     {data.alarm}
                      명이 찜하기 중
                    </p>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </CardGroup>
      </div>
    </>
  );
}

export default inject("mainStore")(observer(OpenExpectPrj));
