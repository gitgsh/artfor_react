import axios from "axios";
import axiosError from "axios";
import { inject, observer } from "mobx-react";
import "./Detail_OpenExp.css";
import { Col, Form, FormGroup, Label, Input } from "reactstrap";
import { Button, Modal } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Popover } from "@mui/material";
import { Typography } from "@mui/material";
import { HeartOutlined, HeartFilled } from "@ant-design/icons"; //icons 모듈을 갖고온다
import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import shareKakao from "../../../kakao/shareKakao";
import icon_detail_writer from "../../../detail_images/icon_detail_writer.JPG";
import icon_share from "../../../detail_images/icon_share.png";
import icon_url from "../../../detail_images/icon_url.jpg";
import FundingModal_OpenExp_true from "./FundingModal_OpenExp_true";
import FundingModal_OpenExp_false from "./FundingModal_OpenExp_false";

import DetailBottom_OpenExp from "./DetailBottom_OpenExp";
import { AlternateEmailTwoTone } from "@material-ui/icons";

function FundingStatus_OpenExp(props) {
  useEffect(() => {
    axios
      .get("http://localhost:8004/app/AlarmList/")
      .then((response) => {
        console.log("Done AlarmListRead", response);
        const findLike = response.data.find(function (result) {
          return result.user_email == user_email && result.work_no == no;
        });

        HandleLikeIcon();
        function HandleLikeIcon() {
          if (findLike == null) {
            setLike(true);
          } else {
            setLike(false);
          }
        }
      })
      .catch((error) => {
        console.log("AlarmListRead 실패...");
        axiosError(error);
      });
  }, []); //[]를 추가하면 첫 렌더링 시 한 번만 실행된다.

  const user_email = localStorage.getItem("user_email"); //현재 로그인한 유저의 email
  const { no } = useParams();
  const { mainStore } = props;
  const { works, work } = mainStore;
  const findFunding = works.find(function (result) {
    //사용자가 요청한 seq값과 일치하는 seq(db상의 seq값)을 찾는다.
    return result.work_no == no;
  });

  //현재 로그인한 유저의 name, 보고 있는 작품의 work_no
  console.log("현재작품 no>>", no);
  console.log("dzdz", findFunding.work_no);
  console.log("work>>", work);
  localStorage.setItem("work_no", no);

  //천단위 콤마 함수
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  //링크복사기능
  const currentUrl = window.location.href;

  //PopOver창..(공유하기 버튼)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  //PopOver창 끝

  const [like, setLike] = useState(true); //찜하기(버튼)
  const [likeDB, setLikeDB] = useState(""); //찜하기(ArtWork DB)

  const today = new Date();
  const dday = new Date(findFunding.funding_deadline);
  const gap = dday.getTime() - today.getTime();
  const gapResult = Math.ceil(gap / (1000 * 60 * 60 * 24)); //남은날짜 계산용
  const fundingPercent = Math.round(
    (findFunding.funding_now / findFunding.funding_goal) * 100
  );

  localStorage.setItem("funding_startline", findFunding.funding_startline); //결제버튼 클릭 시 사용
  const token = localStorage.getItem("token");

  function FuncLike() {
    if (like == true) {
      setLikeDB(mainStore.AlarmPlusMinusUser());
      setLikeDB(mainStore.AlarmPlus(no));
    } else {
      setLikeDB(mainStore.AlarmPlusMinusUser());
      setLikeDB(mainStore.AlarmMinus(no));
    }
  }

  function handleLike() {
    if (token == null) {
      alert("로그인해주세요!");
    } else {
      setLike(!like);
      FuncLike();
    }
  }

  return (
    <>
      <div className="detailOpenExp_head1">
        <div className="detailOpenExp_head2">
          <br />

          <img
            className="detail_image"
            src={`/image/${findFunding.work_img}`}
          />

          <div className="detail_head3" >
            <div className="detailOpenExp_head3_1" >
              <br />
              <div style={{minHeight:"50px", marginRight:"100px"}}>
              <span style={{ fontSize: "30px", fontFamily: "NanumSquareR"}} >
                {findFunding.work_title}
              </span>
              </div>
              <br />
              <p
                className="writer_homeDetail"
                style={{
                  fontSize: "17px",
                  transform: "skew(-0.001deg)",
                  fontWeight: "bold",
                  marginTop: "3px",
                }}
              >
                <img src={icon_detail_writer} style={{ marginRight: "4px" }} />
                {findFunding.artist_name}
              </p>

              <span
                style={{
                  fontFamily: "NanumSquareB",
                  fontSize: "17px",
                  transform: "skew(-0.1deg)",
                  marginLeft: "3px",
                }}
              >
                📅 {findFunding.funding_startline}공개예정
              </span>
              <br />
              <br />
            </div>
            <div className="fundingbox">
              <p
                style={{
                  fontFamily: "NanumSquareB",
                  fontSize: "15px",
                  textAlign: "left",
                  transform: "skew(-0.1deg)",
                  fontWeight: "bold",
                }}
              >
                공개 예정작
              </p>
              <p
                style={{
                  fontFamily: "NanumSquareR",
                  fontSize: "15px",
                  textAlign: "left",
                  transform: "skew(-1.0deg)",
                }}
              >
                목표 금액은 {numberWithCommas(findFunding.funding_goal)}
                원입니다! <br />
                후원은 {findFunding.funding_startline}부터 가능합니다.
              </p>
            </div>

            {/* 좋아요버튼 */}
            <Button
              style={{ backgroundColor: "transparent", border: "transparent" }}
              onClick={() => {
                handleLike();
              }}
            >
              {like === true ? (
                <Button
                  variant="danger"
                  style={{
                    fontWeight: "normal",
                    marginRight: "20px",
                    minWidth: "230px",
                    transform: "skew(-1.0deg)",
                  }}
                >
                  🔔 찜하기
                </Button>
              ) : (
                <Button
                  variant="danger"
                  style={{
                    fontWeight: "normal",
                    marginRight: "20px",
                    minWidth: "230px",
                    transform: "skew(-1.0deg)",
                    marginRight: "20px",
                    minWidth: "230px",
                  }}
                >
                  🔕 찜하기 취소
                </Button>
              )}
            </Button>

            {/* 공유하기버튼 */}
            <Button
              aria-describedby={id}
              variant="outline-secondary"
              onClick={handleClick}
              style={{ marginRight: "150px", borderColor: "#dcdcdc" }}
            >
              <img src={icon_share} style={{ width: "25px", height: "25px" }} />
            </Button>
          </div>
        </div>
        <div className="detail_head4" style={{ textAlign: "left" }}>
          <div>
            {/* <Link to={"#"} style={{marginLeft: '40px', marginRight:'15px', fontSize: '15px'}}>프로젝트 계획 </Link>
        <Link to={"#"} style={{marginRight:'10px', fontSize: '15px'}}>커뮤니티</Link> */}
          </div>
        </div>
        {/* <hr/> */}
      </div>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>
          {/* 카카오톡 공유버튼 */}
          <button
            onClick={shareKakao}
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
            }}
          >
            <img src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" />
          </button>

          <CopyToClipboard text={currentUrl}>
            <button
              onClick={() => {
                alert("링크가 복사되었습니다!");
              }}
              style={{ border: "0", borderRadius: "11px" }}
            >
              <img
                width="57px"
                height="67px"
                src={icon_url}
                style={{ backgroundColor: "transparent" }}
              />
            </button>
          </CopyToClipboard>
        </Typography>
      </Popover>
      <DetailBottom_OpenExp />
    </>
  );
}

export default inject("mainStore")(observer(FundingStatus_OpenExp));
