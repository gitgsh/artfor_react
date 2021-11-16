import React from "react";
import { Route } from "react-router";
import styled from "styled-components";

function DonationHead() {
  const work_title = localStorage.getItem("work_title");
  const funding_deadline = localStorage.getItem("funding_deadline");
  const artist_name = localStorage.getItem("artist_name");
  const funding_now = localStorage.getItem("funding_now");
  const gapResult = localStorage.getItem("gapResult");
  const fundingPercent = localStorage.getItem("fundingPercent");
  const detail_work_img = localStorage.getItem("detail_work_img");
  return (
    <div>
      <사진>
        <img
          src={`image/${detail_work_img}`}
          style={{ width: "150px", height: "110px" }}
        />
      </사진>
      <틀>
        <작가
          style={{
            fontFamily: "NanumSquareR",
            transform: "skew(-0.1deg)",

            fontSize: "15px",
            color: "#6c757d",
          }}
        >
          {artist_name}
        </작가>
        <설명
          style={{
            fontFamily: "NanumSquareR",
            transform: "skew(-0.1deg)",
            color: "#495057",
            fontWeight: "bold",
          }}
        >
          {work_title}
        </설명>
        <후원액
          style={{
            fontFamily: "NanumSquareR",
            transform: "skew(-0.1deg)",
            color: "#495057",
            fontWeight: "bold",
            marginRight: "7px",
          }}
        >
          {funding_now.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
        </후원액>
        <퍼센트
          style={{
            fontFamily: "NanumSquareR",
            transform: "skew(-0.1deg)",
            fontWeight: "bold",
            marginRight: "9px",
            color: "#FF5757",
            fontSize: "15px",
          }}
        >
          {" "}
          {fundingPercent}%
        </퍼센트>
        <D_day
          style={{
            fontFamily: "NanumSquareL",
            transform: "skew(-0.1deg)",
            fontWeight: "bold",
            marginRight: "9px",
            fontSize: "15px",
          }}
        >
          {gapResult}일 남음
        </D_day>
      </틀>
      <hr style={{ marginTop: "30px", marginBottom: "5px" }} />
    </div>
  );
}

const 틀 = styled.div`
  text-align: left;
`;

const 사진 = styled.div`
  float: left;
  padding-right: 30px;
`;

const 작가 = styled.div`
  padding-top: 10px;
  font-family: "NunumSquareL";
  color: grey;
  font-size: 15px;
`;

const 설명 = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: "NunumSquareB";
  font-size: 25px;
`;

const 후원액 = styled.span`
  font-family: "NunumSquareB";
  font-weight: 700;
  font-size: 15px;
`;

const 퍼센트 = styled.span`
  font-family: "NunumSquareB";
  color: red;
  font-size: 12px;
`;

const D_day = styled.span`
  font-family: "NunumSquareB";
  font-size: 14px;
`;

export default DonationHead;
