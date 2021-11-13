import axios from "axios";
import { inject, observer } from "mobx-react";
import "./Detail.css";
import { Col, Form, FormGroup, Label, Input } from "reactstrap";
import { Button, Modal } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Popover } from "@mui/material";
import { Typography } from "@mui/material";
import { HeartOutlined, HeartFilled } from "@ant-design/icons"; //icons 모듈을 갖고온다
import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import shareKakao from "../../kakao/shareKakao";
import icon_detail_writer from "../../detail_images/icon_detail_writer.JPG";
import icon_share from "../../detail_images/icon_share.png";
import icon_url from "../../detail_images/icon_url.jpg";
import FundingModal from "./FundingModal";
import { AlternateEmailTwoTone } from "@material-ui/icons";

function FundingStatus(props) {
  const { no } = useParams();
  const { mainStore } = props;
  const { works, work } = mainStore;
  const findFunding = works.find(function (result) {
    //사용자가 요청한 seq값과 일치하는 seq(db상의 seq값)을 찾는다.
    return result.work_no == no;
  });

//현재 로그인한 유저의 name, 보고 있는 작품의 work_no 
  console.log('현재작품 no>>', no);
  console.log('dzdz',findFunding.work_no)
  console.log('work>>', work);
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

  const [like, setLike] = useState(true); //좋아요(이미지)
  const [likeDB, setLikeDB] = useState(""); //좋아요(ArtWork DB)

  const today = new Date();
  const dday = new Date(findFunding.funding_deadline);
  const gap = dday.getTime() - today.getTime();
  const gapResult = Math.ceil(gap / (1000 * 60 * 60 * 24)); //남은날짜 계산용
  const fundingPercent = Math.round(
    (findFunding.funding_now / findFunding.funding_goal) * 100
  )

 //start of 결제 시 꺼내쓸 것
 localStorage.setItem("work_title", findFunding.work_title); 
 localStorage.setItem("funding_deadline", findFunding.funding_deadline);
 localStorage.setItem("artist_name", findFunding.artist_name);
 localStorage.setItem("funding_now", findFunding.funding_now);
 localStorage.setItem("gapResult", gapResult);
 localStorage.setItem("fundingPercent", fundingPercent);
 localStorage.setItem("detail_work_img", findFunding.work_img);
 localStorage.setItem("work_no", findFunding.work_no);
 localStorage.setItem("funding_now", findFunding.funding_now);
 //end of 결제 시 꺼내 쓸 것

localStorage.setItem("funding_startline", findFunding.funding_startline); //결제버튼 클릭 시 사용

  function FuncLike() {
    if (like == true) {
      setLikeDB(mainStore.likePlusUser());
      setLikeDB(mainStore.likePlus(no));
    } else setLikeDB(mainStore.likeMinus(no));
  }

  function handleLike() {
    return setLike(!like), FuncLike();
  }

  return (
    <>
      <div className="detail_head1">
        <div className="detail_head2">
          <h2
            style={{
              fontFamily: "NanumSquareB",
              fontSize: "40px",
              marginRight: "70px",
            }}
          >
            {findFunding.work_title}
          </h2>
          <center>
            <p className="writer_homeDetail">
              <img src={icon_detail_writer} />
              {findFunding.artist_name}
            </p>
          </center>
          <br />

          {/* public 폴더 내 이미지 가져오기
            <img src={`main1.jpeg`} /> */}
          {/* <img
            className="detail_image"
            src={`/image/${findFunding.work_img}`}
            alt={findFunding.work_img}
            style={{}}
          /> */}
           <img className="detail_image" src={`/image/${findFunding.work_img}`} />

          <div className="detail_head3">
            <div className="detail_head3_1">
              <span
                style={{
                  fontFamily: "NanumSquareL",
                  fontSize: "20px",
                  transform: "skew(-0.1deg)",
                }}
              >
                모인금액
              </span>
              <br />
              <span style={{ fontSize: "30px" }}>
                {numberWithCommas(findFunding.funding_now)}
              </span>{" "}
              <span style={{ fontFamily: "NanumSquareL" }}>원</span>
              <span style={{ fontFamily: "NanumSquareB", fontSize: "20px" }}>
                {fundingPercent}%
              </span>
              <br />
              <br />
              <span style={{ fontFamily: "NanumSquareL", fontSize: "20px" }}>
                남은시간
              </span>
              <br />
              <span style={{ fontSize: "30px" }}>{gapResult}</span>
              <span style={{ fontFamily: "NanumSquareL" }}>일</span>
              <br />
              <br />
              <span style={{ fontFamily: "NanumSquareL", fontSize: "20px" }}>
                후원자
              </span>
              <br />
              <span style={{ fontSize: "30px" }}>{findFunding.supporters}</span>
              <span style={{ fontFamily: "NanumSquareL" }}>명</span>
              <br />
            </div>
            <div className="fundingbox">
              <p
                style={{
                  fontFamily: "NanumSquareB",
                  fontSize: "15px",
                  textAlign: "left",
                }}
              >
                펀딩 진행중
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
                원입니다! <br />결제는 {findFunding.funding_deadline}까지 가능합니다.
              </p>
            </div>

            {/* 좋아요버튼 */}
            <Button
              aria-describedby={id}
              variant="outline-secondary"
              style={{ marginRight: "12px", borderColor: "#dcdcdc" }}
              onClick={() => {
                handleLike();
              }}
            >
              {like === true ? (
                <HeartOutlined style={{ fontSize: "27px" }} />
              ) : (
                <HeartFilled style={{ fontSize: "27px" }} />
              )}
            </Button>

            {/* 공유하기버튼 */}
            <Button
              aria-describedby={id}
              variant="outline-secondary"
              onClick={handleClick}
              style={{ marginRight: "12px", borderColor: "#dcdcdc" }}
            >
              <img src={icon_share} style={{ width: "25px", height: "25px" }} />
            </Button>

         

              <FundingModal/>
           
            
          </div>
        </div>
            

        {/* <Modal show={show} onHide={handleCloseDonataion}>
          <Modal.Header >
            <Modal.Title style={{margin:"auto"}}>소중한 후원 감사합니다!</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{color: "grey"}}> 
              후원하고자 하는 금액을 입력해주세요!<br/> 
              후원금을 입력하신 후 결제 페이지로 넘어갑니다.
              <br/><br/>
              <Form>
              <FormGroup>
                <Label
                  for="exampleEmail"
                  style={{
                    textAlign: "left",
                    float: "left",
                    fontFamily: "NanumSquareB",
                    fontWeight: "800px",
                    fontSize: "15px",
                    paddingTop: "25px",
                    paddingBottom: "12px",
                  }}
                >
                  목표 금액
                </Label>

                <Input
                  type="number"
                  style={{ textAlign: "right" }}
                  transform="skew(-0.1deg)"
                  className="Input-goal"
                  placeholder="후원하고자 하는 금액을 입력해주세요"
                  value={work.funding_goal}
                  onChange={event=> {work.funding_goal = event.target.value}}
                />
              
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
          <Link to="/donation">
            <Button variant="secondary" style={{marginRight:"200px"}}>
                확인
            </Button>
            </Link>
            
            
          </Modal.Footer>
        </Modal> */}
        {/* <hr/> */}
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
    </>
  );
}

export default inject("mainStore")(observer(FundingStatus));
