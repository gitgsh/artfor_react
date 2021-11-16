import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./SearchModal.css";
import "./header.css";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { inject, observer } from "mobx-react";
import { Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FcMenu } from "react-icons/fc";
function SearchModal(props) {
  const [show, setShow] = useState(false);
  // jh
  const [keyword, setKeyword] = useState("");

  const { mainStore } = props;
  const { works, work } = mainStore;

  const count = work.length; // 총 프로젝트 갯수
  // 전체 작품 담기
  const workList = works.map(function (data, i) {
    // console.log("data.work_title", data.work_title);
    return data;
  });

  const findOpen = workList.filter((data) => {
    console.log("data.work_title", data.work_title);
    return (
      data.work_title.includes(keyword) || data.artist_name.includes(keyword)
    );
  });

  return (
    <div className="headerLeft" style={{ textAlign: "left" }}>
      <Button
        onClick={() => {
          setShow(true);
          setKeyword("");
        }}
        style={{
          marginTop: "2px",
          backgroundColor: "transparent",
          border: "0px",
          color: "#000000",
          fontFamily: "NanumSquareR",
          fontSize: "15px",
          fontWeight: "bold",
          padding: "0px",
          boxSadow: "none",
          marginLeft: "-22px",
        }}
      >
        <FcMenu
          // src="../icon_navbar.png"
          style={{
            marginTop: "-3px",
            width: "20px",
            marginRight: "3px",
            marginLeft: "20px",
          }}
        />
        프로젝트 둘러보기
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="main-modal"
        aria-labelledby="example-custom-modal-styling-title"
        style={{ marginTop: "60px" }}
      >
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title"></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "100%" }}>
          <>
            <center>
              <TextField
                id="standard-basic"
                label="프로젝트를 검색해보세요"
                variant="standard"
                color="success"
                style={{ width: "800px", borderRadiu: "red" }}
                onChange={(event) => {
                  setKeyword(event.target.value);
                }}
              />
              <button style={{ backgroundColor: "transparent", border: "0" }}>
                <SearchIcon style={{ fontSize: "40px" }} />
              </button>
              <div
                style={{
                  fontFamily: "NanumSquareB",
                  fontSize: "30px",
                  marginTop: "30px",
                }}
              >
                {keyword === "" ? (
                  <div>검색어를 입력해주세요!</div>
                ) : (
                  <div>
                    <div style={{ marginBottom: "30px" }}>모든 프로젝트</div>
                    <CardGroup className="cardgroup_Home">
                      {findOpen.slice(0, count).map(function (data, i) {
                        //8개
                        return (
                          <div
                            style={{
                              marginLeft: "20px",
                              marginBottom: "-80px",
                            }}
                          >
                            <Card className="card_Home">
                              <Link
                                to={`/detail/${data.work_no}`}
                                onClick={() => {
                                  mainStore.getWork(data.work_no);
                                  setShow(false);
                                }}
                              >
                                <Card.Img
                                  variant="top"
                                  src={`/image/${data.work_img}`}
                                  style={{
                                    width: "250px",
                                    height: "200px",
                                    borderRadius: 15,
                                    overflow: "hidden",
                                  }}
                                />
                              </Link>
                              <Card.Body className="cardbody_Home">
                                <Card.Title className="cardtitle_Home">
                                  공예 | {data.artist_name}
                                </Card.Title>
                                <Card.Text className="cardtext_Home">
                                  <Link
                                    to={`/detail/${data.work_no}`}
                                    onClick={() => {
                                      mainStore.getWork(data.work_no);
                                      setShow(false);
                                    }}
                                  >
                                    {data.work_title}
                                  </Link>
                                </Card.Text>
                                <div
                                  className="cardfooter"
                                  style={{
                                    fontSize: "18px",
                                    textAlign: "center",
                                  }}
                                >
                                  <p style={{ marginTop: "-25px" }}>
                                    {Math.round(
                                      (data.funding_now / data.funding_goal) *
                                        100
                                    )}
                                    % 달성
                                  </p>
                                </div>
                              </Card.Body>
                            </Card>
                          </div>
                        );
                      })}
                    </CardGroup>
                  </div>
                )}
                <div style={{ height: "575px" }}></div>
              </div>
            </center>
          </>
        </Modal.Body>
      </Modal>
    </div>
  );
}

// export default SearchModal;
export default inject("mainStore")(observer(SearchModal));
