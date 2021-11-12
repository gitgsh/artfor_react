import "./Community.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link, useHistory } from "react-router-dom";
import DetailBottom from "../detail/DetailBottom";
import { inject, observer } from "mobx-react";
import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import { event } from "jquery";
import { Label } from "reactstrap";

function Community(props) {
  const { no } = useParams();
  console.log("community no", no);
  const history = useHistory();
  const { communityStore } = props;
  const { cstores, cstore } = communityStore;
  const [state, setState] = useState("dd");

  //cstore
  cstore.c_writer = window.localStorage.getItem("name");
  cstore.work_no = parseInt(no);

  function cstoresCreate() {
    axios
      .post("http://localhost:8004/app/replyinput.do", cstore)
      .then((result) => {
        console.log("성공");
        console.log("dd", cstore);
        communityStore.cstoresRead();
      })
      .catch((err) => {
        console.log("실패함", err);
        console.log("dd", cstore);
      });
  }

  // communityStore.cstoresRead()
  const [community, setCommunity] = useState(null);
  useEffect(() => {
    let isComponentMounted = true;
    const fetchData = async () => {
      if (isComponentMounted) {
        setCommunity(communityStore.cstoresRead());
      }
    };
    fetchData();
    return () => {
      isComponentMounted = false;
    };
  }, []);

  const findCommunity = cstores.filter(function (result) {
    //사용자가 요청한 seq값과 일치하는 seq(db상의 seq값)을 찾는다.
    return result.work_no == no;
  });

  return (
    <div className="projectTitle_Home_Detail">
      <CommunityReply state={state} setState={setState} />
      <br />

      <p style={{ fontFamily: "NanumSquareR" }}>
        {findCommunity.map((data, i) => {
          return (
            <div
              key={i}
              style={{
                margin: "0 auto",
                transform: "skew(-0.1deg)",
                fontSize: "15px",
                fontFamily: "NanumSquareL",
                borderBottom: "1px solid",
                borderBottomColor: "rgb(228, 228, 228)",
                width: "800px",
                height: "90px",
              }}
            >
              {" "}
              <ReplyBox data={data} />
              <div style={{ marginTop: "5px", marginLeft: "58px" }}>
                {data.c_content}
              </div>
            </div>
          );
        })}
      </p>

      <div
        className="content_HomeDetail"
        style={{ fontFamily: "NanumSquareR" }}
      >
        ㅐㅐ
      </div>
      <hr />
      <div style={{ marginLeft: "10px", marginTop: "10px" }}>
        <div
          style={{
            fontSize: "20px",
            textAlign: "left",
            fontFamily: "NanumSquareR",
          }}
        >
          이런 프로젝트 어떠세요?
        </div>
      </div>
      <DetailBottom />
    </div>
  );
  function KeyPress(event) {
    if (event.target.value !== null && event.key === "Enter") {
      event.preventDefault();
      // /setState(event.target.value);
      cstore.c_content = event.target.value;
      onSubmit();
    }
  }
  function onSubmit(event) {
    cstoresCreate();

    // e.preventDefault();
    // cstore.c_content = e.target.value;
    // console.log(cstore.c_content);
    // let value = e.target.value;
    // console.log(value);
    // communityStore.cstoresCreate();
  }
  function onChange(e) {
    if (e.target.value !== "") {
      alert(e.currentValue);
    } else {
      e.preventDefault();
    }
  }

  function CommunityReply() {
    return cstore.c_writer === null ? (
      <Paper
        component="form"
        style={{
          marginTop: "-30px",
          margin: "0 auto",
          backgroundColor: "#F5F5F5",
        }}
        sx={{
          p: "20px 20px",

          display: "flex",
          alignItems: "center",
          width: 900,
          boxShadow: "none",
          border: "1px solid #F0F0F0",
        }}
      >
        <Avatar
          src="/broken-image.jpg"
          style={{ color: "", backgroundColor: "#F0F0F0" }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

        <Label
          sx={{ ml: 1, flex: 1 }}
          style={{ fontSize: "15px" }}
          onKeyPress={KeyPress}
          inputProps={{ "aria-label": "search google maps" }}
        >
          로그인을 해주세요
        </Label>
      </Paper>
    ) : (
      <Paper
        component="form"
        style={{ marginTop: "-30px", margin: "0 auto" }}
        sx={{
          p: "20px 20px",
          display: "flex",
          alignItems: "center",
          width: 900,
          boxShadow: "none",
          border: "1px solid #F0F0F0",
        }}
      >
        <Avatar
          src="/broken-image.jpg"
          style={{ color: "", backgroundColor: "#F0F0F0" }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="댓글을 입력하세요"
          onKeyPress={KeyPress}
          inputProps={{ "aria-label": "search google maps" }}
        />
      </Paper>
    );
  }
  function ReplyBox(props) {
    return (
      <div className="reply-box">
        <div className="row" style={{ width: "800px", marginTop: "19px" }}>
          <div className="col-2" style={{ width: "50px" }}>
            <Avatar
              src="/broken-image.jpg"
              style={{ backgroundColor: "#F0F0F0" }}
            />
          </div>
          <div className="col-2" style={{ width: "80px", margin: "0" }}>
            <div
              style={{
                fontSize: "20px",
                fontFamily: "NanumSquareR",
                transform: "skew(-0.1deg)",
                marginTop: "4px",
              }}
            >
              {props.data.c_writer}
            </div>
          </div>
          <div
            className="col-2"
            style={{ width: "100px", marginLeft: "-18px", paddingTop: "10px" }}
          >
            <div
              style={{
                fontSize: "10px",
                fontFamily: "NanumSquareR",
                transform: "skew(-0.1deg)",
                marginTop: "4px",
                color: "#828282",
              }}
            >
              {props.data.c_day}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}
export default inject("communityStore")(observer(Community));
