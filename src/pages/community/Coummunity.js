import "./Community.css";
import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";
import { Link, useHistory } from "react-router-dom";
import DetailBottom from "../detail/DetailBottom";
import { inject, observer } from "mobx-react";
import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import { Label } from "reactstrap";
import { data, param } from "jquery";

function Community(props) {
  const { no } = useParams();
  console.log("community no", no);
  const history = useHistory();
  const { communityStore } = props;
  const { cstores, cstore } = communityStore;
  const { membersStore } = props;
  const { members, member } = membersStore;
  const [state, setState] = useState("dd");
  const [click, setClick] = useState(false);
  const [btnValue, setBtnValue] = useState("");

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
  const [content, setContent] = useState("");

  const changeContent = (event) => {
    console.log(event.target.value);
    setContent(event.target.value);
    // cstore.c_content = content;
  };
  return (
    <div className="projectTitle_Home_Detail">
      <CommunityReply />
      <br />

      <p style={{ fontFamily: "NanumSquareR" }}>
        {findCommunity.map((cm, i) => {
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
              <ReplyBox cm={cm} />
              <div style={{ marginTop: "5px", marginLeft: "58px" }}>
                <div className="row" style={{}}>
                  {click && btnValue == i ? (
                    <div className="col" style={{ paddingTop: "1px" }}>
                      <input
                        key={i}
                        type="text"
                        value={content}
                        onChange={changeContent}
                      />
                    </div>
                  ) : (
                    <div className="col" style={{ paddingTop: "4.5px" }}>
                      {cm.c_content}
                    </div>
                  )}

                  {cstore.c_writer === cm.c_writer && click === false ? (
                    <>
                      <div
                        className="col-2"
                        style={{
                          width: "70px",
                          margin: "0",
                          padding: "0",

                          marginRight: "-20px",
                        }}
                      >
                        <button
                          size="sm"
                          style={{
                            border: "none",
                            borderRadius: "3px",
                            backgroundColor: "grey",
                            margin: "0 auto",
                            transform: "skew(-0.1deg)",
                            fontSize: "15px",
                            color: "white",
                            fontFamily: "NanumSquareL",
                          }}
                          key={i}
                          onClick={() => {
                            setBtnValue(i);
                            setClick(!click);
                            setContent(cm.c_content);
                          }}
                        >
                          수정
                        </button>
                      </div>
                      <div
                        className="col-2"
                        style={{ width: "70px", margin: "0", padding: "0" }}
                      >
                        <button
                          className="col"
                          size="sm"
                          style={{
                            border: "none",
                            backgroundColor: "#E4E4E4",
                            margin: "0 auto",
                            transform: "skew(-0.1deg)",
                            fontSize: "15px",
                            fontFamily: "NanumSquareR",
                          }}
                          onClick={() => {
                            console.log(cm.c_no);
                            cstore.c_no = cm.c_no;
                            axios
                              .post(
                                "http://localhost:8004/app/replydelete.do",
                                cstore
                              )
                              .then((response) => {
                                console.log("data", data);
                                console.log("Done cstoresDelete", response);
                                console.log(response);
                                communityStore.cstoresRead();
                              })
                              .catch((error) => {
                                console.log("삭제 실패");
                              });
                          }}
                        >
                          삭제
                        </button>
                      </div>
                    </>
                  ) : btnValue === i && cstore.c_writer === cm.c_writer ? (
                    <>
                      <div
                        className="col-2"
                        style={{
                          width: "70px",
                          margin: "0",
                          padding: "0",
                          marginRight: "-20px",
                        }}
                      >
                        <button
                          size="sm"
                          style={{
                            border: "none",
                            borderRadius: "3px",
                            backgroundColor: "grey",
                            margin: "0 auto",
                            transform: "skew(-0.1deg)",
                            fontSize: "15px",
                            color: "white",
                            fontFamily: "NanumSquareL",
                          }}
                          onClick={(event) => {
                            console.log(event.target.value);
                            setContent(event.target.value);
                            cstore.c_content = content;
                            cstore.c_no = cm.c_no;
                            axios
                              .post(
                                "http://localhost:8004/app/replyupdate.do",
                                cstore
                              )
                              .then((response) => {
                                console.log("Done ctoresUpdate", response);
                                communityStore.cstoresRead();
                              })
                              .catch((error) => {
                                console.log(error);
                              });
                            setClick(!click);
                          }}
                        >
                          확인
                        </button>
                      </div>
                      <div
                        className="col-2"
                        style={{ width: "70px", margin: "0", padding: "0" }}
                      >
                        <button
                          className="col"
                          size="sm"
                          style={{
                            border: "none",
                            backgroundColor: "#E4E4E4",
                            margin: "0 auto",
                            transform: "skew(-0.1deg)",
                            fontSize: "15px",
                            fontFamily: "NanumSquareR",
                          }}
                          onClick={() => {
                            console.log(cm.c_no);
                            cstore.c_no = cm.c_no;
                            axios
                              .post(
                                "http://localhost:8004/app/replydelete.do",
                                cstore
                              )
                              .then((response) => {
                                console.log("data", data);
                                console.log("Done cstoresDelete", response);
                                console.log(response);
                                communityStore.cstoresRead();
                              })
                              .catch((error) => {
                                console.log("삭제 실패");
                              });
                          }}
                        >
                          삭제
                        </button>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </p>

      <div
        className="reply-content"
        style={{ fontFamily: "NanumSquareR", paddingBottom: "25px" }}
      ></div>
      <hr style={{ backgroundColor: "#B8B8B8" }} />
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
  }

  function btnUpdate() {
    console.log();
    // cstore.c_no = communityStore.cstoresDelete();
  }
  function btnDelete() {}

  function CommunityReply() {
    return cstore.c_writer === null ? (
      <Paper
        component="form"
        style={{
          marginTop: "-30px",
          margin: "0 auto",
          backgroundColor: "#d4d4d4",
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
          style={{ color: "", backgroundColor: "#B2B2B2" }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

        <Label
          sx={{ ml: 1, flex: 1 }}
          style={{ fontSize: "17px", paddingLeft: "10px", color: "#414141" }}
          onKeyPress={KeyPress}
        >
          로그인을 해주세요
        </Label>
      </Paper>
    ) : (
      <div>
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
          {/* <Avatar
            src="/broken-image.jpg"
            style={{ color: "", backgroundColor: "#F0F0F0" }}
          /> */}
          {localStorage.getItem("photo") === "null" ? (
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "70%",
                overflow: "hidden",
              }}
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src="/basicphoto.png"
              />
            </div>
          ) : (
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "70%",
                overflow: "hidden",
              }}
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={`/myphoto/${localStorage.getItem("photo")}`}
              />
            </div>
          )}
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="댓글을 입력하세요"
            onKeyPress={KeyPress}
            inputProps={{ "aria-label": "search google maps" }}
          />
        </Paper>
      </div>
    );
  }
  function ReplyBox(props) {
    console.log("ReplyBox의 props는 ? ", props);
    return (
      <div className="reply-box">
        <div className="row" style={{ width: "800px", marginTop: "19px" }}>
          <div className="col-2" style={{ width: "50px" }}>
            {/* <Avatar
              src="/broken-image.jpg"
              style={{ backgroundColor: "#F0F0F0" }}
            /> */}
            {props.cm.user_photo === null ? (
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "70%",
                  overflow: "hidden",
                }}
              >
                <img
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src="/basicphoto.png"
                />
              </div>
            ) : (
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "70%",
                  overflow: "hidden",
                }}
              >
                <img
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={`/myphoto/${props.cm.user_photo}`}
                />
              </div>
            )}
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
              {props.cm.c_writer}
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
              {props.cm.c_day}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}
export default inject("communityStore", "membersStore")(observer(Community));
