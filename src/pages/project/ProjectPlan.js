import React from "react";
import { useState } from "react";
import "./ProjectPlan.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputPage from "./input/InputPage";
import { Button, InputGroup } from "react-bootstrap";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FcRemoveImage, FcExternal } from "react-icons/fc";
import { Input } from "reactstrap";
function ProjectPlan(props) {
  const [category, setCategory] = useState("");
  const [detailCategory, setDetailCategory] = useState("");
  let [planModal, setPlanModal] = useState(false);

  const categoryChange = (event) => {
    setCategory(event.target.value);
  };
  const detailCategoryChange = (event) => {
    setDetailCategory(event.target.value);
  };

  function modalSwitch(event) {
    let value = event.target.value;
    if (value === "buttonClick") {
      setPlanModal(!planModal);
    }
  }
  return (
    <div
      className="projectPlan-container"
      style={{
        backgroundColor: "rgb(252, 252, 252)",
        height: "100%",
      }}
    >
      <div className="projectPlan-box" style={{}}>
        <div
          className="row"
          style={{
            paddingTop: "70px",
            // marginBottom: "-70px",
            borderBottom: "1px solid",
            borderBottomColor: "rgb(228, 228, 228)",
            margin: "0 auto",
            maxWidth: "1180px",
          }}
        >
          <div className="col-4" style={{}}>
            <div>
              <div
                style={{
                  fontSize: "16px",
                  fontFamily: "NanumSquareEB",
                  textAlign: "left",
                  transform: "skew(-0.1deg)",
                }}
              >
                프로젝트 카테고리
                <Star />
              </div>
              <div
                className="projectPlan-notice-box"
                style={{
                  backgroundColor: "rgb(252, 252, 252)",
                  // marginBottom: "-50px",
                }}
              >
                <Description />
              </div>
            </div>
          </div>
          <div
            className="col-8"
            style={
              {
                // height: "100px",
              }
            }
          >
            <div class="row justify-content-md">
              <div class="category-container" style={{ marginLeft: "100px" }}>
                <div
                  class="row justify-content-md"
                  style={{
                    textAlign: "left",
                    fontFamily: "NanumSquareB",
                    fontSize: "13px",
                    transform: "skew(-0.1deg)",
                    marginTop: "10px",
                  }}
                >
                  <div class="col" style={{ marginLeft: "0px" }}>
                    카테고리
                  </div>
                  <div class="col" style={{ marginRight: "112px" }}>
                    세부 카테고리(선택사항)
                  </div>
                </div>

                <div className="row">
                  <div
                    className="col-4"
                    style={{
                      paddingLeft: "0px",
                    }}
                  >
                    {" "}
                    <FormControl
                      sx={{
                        paddingTop: "5px",
                        m: 1,
                        minWidth: 300,
                        width: "307px",
                        backgroundColor: "#FFFFFF",
                      }}
                    >
                      <Select
                        style={{
                          textAlign: "left",
                          height: "38px",
                          fontSize: "16px",
                          fontFamily: "NanumSquareB",
                          transform: "skew(-0.1deg)",
                        }}
                        value={category}
                        onChange={categoryChange}
                        displayEmpty
                        inputProps={{}}
                      >
                        <MenuItem
                          style={{
                            fontFamily: "NanumSquareR",
                            color: "#3D3D3D",
                            transform: "skew(-0.1deg)",
                          }}
                          value="예술"
                          selected
                        >
                          예술
                        </MenuItem>
                        <MenuItem
                          style={{
                            fontFamily: "NanumSquareR",
                            color: "#3D3D3D",
                            transform: "skew(-0.1deg)",
                          }}
                          value={"공예"}
                        >
                          공예
                        </MenuItem>
                        <MenuItem
                          style={{
                            fontFamily: "NanumSquareR",
                            color: "#3D3D3D",
                            transform: "skew(-0.1deg)",
                          }}
                          value={"사진"}
                        >
                          사진
                        </MenuItem>
                        <MenuItem
                          style={{
                            fontFamily: "NanumSquareR",
                            color: "#3D3D3D",
                            transform: "skew(-0.1deg)",
                          }}
                          value={"디자인"}
                        >
                          디자인
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  {/* <div className="col"></div> */}
                  <div className="col" style={{ marginRight: "50px" }}>
                    {" "}
                    <FormControl
                      sx={{
                        paddingTop: "5px",
                        m: 1,
                        minWidth: 300,
                        width: "307px",
                        backgroundColor: "#FFFFFF",
                        color: "green",
                      }}
                    >
                      <Select
                        style={{
                          textAlign: "left",
                          backgroundColor: "#FFFFFF",
                          height: "38px",
                          color: "#3D3D3D",
                          fontSize: "16px",
                          fontFamily: "NanumSquareB",
                          transform: "skew(-0.1deg)",
                        }}
                        value={detailCategory}
                        onChange={detailCategoryChange}
                        displayEmpty
                      >
                        <MenuItem
                          style={{
                            fontFamily: "NanumSquareR",
                            color: "#3D3D3D",
                            transform: "skew(-0.1deg)",
                          }}
                          value={"예술"}
                        >
                          예술
                        </MenuItem>
                        <MenuItem
                          style={{
                            fontFamily: "NanumSquareR",
                            color: "#3D3D3D",
                            transform: "skew(-0.1deg)",
                          }}
                          value={"공예"}
                        >
                          공예
                        </MenuItem>
                        <MenuItem
                          style={{
                            fontFamily: "NanumSquareR",
                            color: "#3D3D3D",
                            transform: "skew(-0.1deg)",
                          }}
                          value={"사진"}
                        >
                          사진
                        </MenuItem>
                        <MenuItem
                          style={{
                            fontFamily: "NanumSquareR",
                            color: "#3D3D3D",
                            transform: "skew(-0.1deg)",
                          }}
                          value={"디자인"}
                        >
                          디자인
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 제목 */}

      <Titleupload />
      <Imageupload />

      {/* 프로젝트 설명 - 에디터 */}
      <div className="projectPlan-box">
        <div
          className="col"
          style={{
            paddingBottom: "40px",
            paddingTop: "70px",
            borderBottom: "1px solid",
            borderBottomColor: "rgb(228, 228, 228)",
            margin: "0 auto",
            maxWidth: "1180px",
          }}
        >
          <div
            className="row"
            style={{
              fontSize: "16px",
              fontFamily: "NanumSquareEB",
              textAlign: "left",
              transform: "skew(-0.1deg)",
            }}
          >
            <div style={{ marginLeft: "130px" }}>
              프로젝트 설명
              <Star />
            </div>

            <Description />
          </div>

          <div
            className="row"
            style={{
              margin: "0 auto",
              borderColor: "rgb(240, 240, 240)",
              borderRadius: "5px",
              paddingLeft: "25px",
              paddingRight: "25px",
              paddingBottom: "20px",
              paddingTop: "30px",
            }}
          >
            <div
              style={{
                border: "1px solid ",
                borderColor: "rgb(240, 240, 240)",
                backgroundColor: "#FFFFFF",
                borderRadius: "5px",
                paddingLeft: "17px",
                paddingRight: "25px",
                paddingBottom: "20px",
                width: "900px",
                margin: "0 auto",
                paddingTop: "30px",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                  marginBottom: "30px",
                  marginRight: "-5px",
                }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "17px",
                    paddingLeft: "5px",
                  }}
                >
                  프로젝트 설명
                </div>

                {planModal === true ? (
                  <button
                    style={{
                      fontSize: "17px",
                      background: "none",
                      color: "#3399ff",
                      border: "0",
                      marginLeft: "",
                    }}
                    onClick={modalSwitch}
                    value="buttonClick"
                  >
                    <img
                      src={"../../../up-arrow.png"}
                      style={{ height: "20px" }}
                    ></img>
                  </button>
                ) : (
                  <button
                    style={{
                      fontSize: "17px",
                      background: "none",
                      color: "#3399ff",
                      border: "0",
                      display: "inline-flex",
                    }}
                    onClick={modalSwitch}
                    value="buttonClick"
                  >
                    <img
                      src={"../../../down-arrow.png"}
                      style={{
                        width: "20px",
                        height: "20px",
                        marginTop: "5px",
                      }}
                    ></img>
                  </button>
                )}
              </div>
              <div>
                {planModal === true ? (
                  <div>
                    <PlanModal />
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <hr
                style={{
                  marginBottom: "10px",
                  color: "#6c757d",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{}}>
        <div className="col-5" style={{}}>
          <div></div>
          <div className="col-7" style={{}}></div>
        </div>
      </div>
    </div>
  );

  function Description() {
    return (
      <div
        className="projectPlan-description"
        style={{
          color: "#6D6D6D",
          fontFamily: "NanumSquareR",
          fontSize: "14px",
          letterSpacing: "0px",
          transform: "skew(-0.1deg)",
          marginLeft: "130px",
        }}
      >
        <p>무엇을 만들기 위한 프로젝트인지 분명히 알려주세요.</p>
      </div>
    );
  }
  function Star() {
    return (
      <span
        className="projectPlan-star"
        style={{
          fontSize: "25px",
          fontFamily: "NanumSquareEB",
          color: "#F86453",
        }}
      >
        *
      </span>
    );
  }
  function PlanModal() {
    return (
      <div>
        <form>
          <InputPage />
        </form>
      </div>
    );
  }
  function Notice() {
    return (
      <div
        className="funding-notice"
        style={{
          fontFamily: "NanumSquareR",
          fontSize: "14px",
          width: "400px",
          backgroundColor: "rgb(253, 244, 243)",
          paddingTop: "23px",
          paddingLeft: "24px",
          paddingRight: "22px",
          paddingBottom: "25px",
          borderRadius: "8px",
        }}
      >
        <p
          style={{
            fontFamily: "NanumSquareB",
            color: "#F86453",
            fontSize: "16px",
            transform: "skew(-0.1deg)",
          }}
        >
          ⓘ 목표 금액 설정 시 꼭 알아두세요!
        </p>
        <p>* 프로젝트를 완수하기 위해 필요한 금액을 설정해주세요.</p>
        <p>
          * 종료일까지 목표금액을 달성하지 못하면 후원자 결제가 진행되지
          않습니다.
        </p>
        <p>
          * 종료 전 후원 취소를 대비해 10% 이상 초과 달성을 목표로 해주세요.
        </p>
      </div>
    );
  }
  function TitleDescription() {
    return (
      <div
        className="projectPlan-description"
        style={{
          color: "#6D6D6D",
          fontFamily: "NanumSquareR",
          fontSize: "14px",
          letterSpacing: "0px",
          transform: "skew(-0.1deg)",
        }}
      >
        <p>프로젝트의 주제, 창작물의 특징이 드러나는 멋진 제목을 붙여주세요.</p>
      </div>
    );
  }

  function ImageDescription() {
    return (
      <div
        className="projectPlan-description"
        style={{
          color: "#6D6D6D",
          fontFamily: "NanumSquareR",
          fontSize: "14px",
          letterSpacing: "0px",
          transform: "skew(-0.1deg)",
        }}
      >
        <p>
          후원자들이 프로젝트의 내용을 쉽게 파악하고 좋은 인상을 받을 수 있도록
          이미지 가이드 라인을 따라주세요.
        </p>
      </div>
    );
  }

  // 프로젝트 제목
  function Titleupload() {
    let [titleModal, setTitleModal] = useState(false);

    function modalSwitch(e) {
      let value = e.target.value;
      if (value === "title") {
        setTitleModal(!titleModal);
      }
    }
    return (
      <div className="projectPlan-box">
        <div
          className="row"
          style={{
            paddingTop: "70px",
            paddingBottom: "35px",
            borderBottom: "1px solid",
            borderBottomColor: "rgb(228, 228, 228)",
            margin: "0 auto",
            maxWidth: "1180px",
          }}
        >
          <div className="col" style={{ paddingRight: "50px" }}>
            {" "}
            <div>
              <div
                style={{
                  fontSize: "16px",
                  fontFamily: "NanumSquareEB",
                  textAlign: "left",
                  transform: "skew(-0.1deg)",
                }}
              >
                프로젝트 제목
                <Star />
              </div>
              <div
                className="projectPlan-notice-box"
                style={{
                  backgroundColor: "rgb(252, 252, 252)",
                }}
              >
                <TitleDescription />
              </div>
            </div>
          </div>
          <div
            className="col-6"
            style={{
              maxWidth: "630px",

              borderRadius: "6px",
              paddingLeft: "0px",
              paddingRight: "0px",
              paddingBottom: "50px",
            }}
          >
            <div style={{ textAlign: "left" }}>
              {/* <button className="tbtn" >제목 <AiOutlineQuestionCircle size="16px" color="red"/></button> */}
              {titleModal === true ? (
                <button className="tbtn" onClick={modalSwitch} value="title">
                  제목 <AiOutlineQuestionCircle size="16px" color="red" />
                </button>
              ) : (
                <button className="tbtn" onClick={modalSwitch} value="title">
                  제목 <AiOutlineQuestionCircle size="16px" color="red" />
                </button>
              )}
            </div>
            <div style={{ textAlign: "left" }}>
              {
                titleModal === true ? <TitleModal /> : null
                // <p>안눌렀을떄</p>
              }
            </div>
            <div>
              <Input
                className="Input-title"
                placeholder="     제목을 입력해주세요"
              />
            </div>
          </div>
        </div>
      </div>
    );
  } // Titleuplad()

  // 이미지 올리기
  function Imageupload() {
    let [imageModal, setImageModal] = useState(false);
    const [attachment, setAttachment] = useState("");

    function modalSwitch(e) {
      let value = e.target.value;
      if (value === "image") {
        setImageModal(!imageModal);
      }
    }

    const onFileChange = (event) => {
      console.log(event.target.files[0]);
      const {
        target: { files },
      } = event;
      const reader = new FileReader();
      //
      reader.onloadend = (progressEvent) => {
        const {
          currentTarget: { result },
        } = progressEvent;
        // 파일보여줄려고
        setAttachment(result);
      };
      reader.readAsDataURL(files[0]);
    };

    return (
      <div className="projectPlan-box">
        <div
          className="row"
          style={{
            paddingTop: "70px",
            paddingBottom: "35px",
            borderBottom: "1px solid",
            borderBottomColor: "rgb(228, 228, 228)",
            maxWidth: "1180px",
            margin: "0 auto",
          }}
        >
          <div className="col" style={{ paddingRight: "50px" }}>
            {" "}
            <div>
              <div
                style={{
                  fontSize: "16px",
                  fontFamily: "NanumSquareEB",
                  textAlign: "left",
                  transform: "skew(-0.1deg)",
                }}
              >
                프로젝트 대표 이미지
                <Star />
              </div>
              <div
                className="projectPlan-notice-box"
                style={{ backgroundColor: "rgb(252, 252, 252)" }}
              >
                <ImageDescription />
              </div>
            </div>
          </div>
          <div
            className="col"
            style={{
              margin: "0 auto",
              maxWidth: "630px",
              border: "1px solid rgb(228, 228, 228)",
              backgroundColor: "#FFFFFF",
              borderRadius: "6px",
              paddingLeft: "0px",
              paddingRight: "0px",
              paddingBottom: "50px",
            }}
          >
            <div style={{ textAlign: "left", paddingBottom: "20px" }}>
              {/* <button className="tbtn" >이미지 <AiOutlineQuestionCircle size="16px" color="red"/></button> */}
              {imageModal === true ? (
                <button className="tbtn" onClick={modalSwitch} value="image">
                  이미지 <AiOutlineQuestionCircle size="16px" color="red" />
                </button>
              ) : (
                <button className="tbtn" onClick={modalSwitch} value="image">
                  이미지 <AiOutlineQuestionCircle size="16px" color="red" />
                </button>
              )}
            </div>
            <div style={{ textAlign: "left" }}>
              {imageModal === true ? <ImageModal /> : null}
            </div>

            <div>
              <div
                style={{ maxWidth: "630px", maxHeight: "auto" }}
                src={attachment}
              >
                {attachment === "" ? (
                  <div style={{ paddingTop: "10px", paddingBottom: "20px" }}>
                    <FcRemoveImage size="100px" />
                  </div>
                ) : (
                  <img
                    src={attachment}
                    style={{
                      width: "100%",
                      height: "auto",
                      paddingBottom: "20px",
                    }}
                  />
                )}
              </div>

              <div>
                <label className="imgbtn" value="title" onChange={onFileChange}>
                  <p style={{ textAlign: "center", marginTop: "-12px" }}>
                    이미지 업로드 <FcExternal size="16px" color="red" />
                  </p>
                  <input
                    type="file"
                    id="uploadFile"
                    style={{ display: "none" }}
                    name="uploadFile"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } // 이미지 끝

  function TitleModal() {
    return (
      <div
        style={{
          margin: "0 auto",
          maxWidth: "630px",
          borderRadius: "6px",
          paddingLeft: "0px",
          paddingRight: "0px",
          paddingBottom: "130px",
        }}
      >
        <div className="tleft">
          제목은 <br />
          어디다쓰나요?
        </div>
        <div className="tright">
          <img src="/title1.png" style={{ width: "100%" }} />
        </div>
      </div>
    );
  }

  function ImageModal() {
    return (
      <div
        style={{
          margin: "0 auto",
          maxWidth: "630px",
          borderRadius: "6px",
          paddingLeft: "0px",
          paddingRight: "0px",
        }}
      >
        <div style={{ textAlign: "center", margin: "0" }}>
          <img src="/img.png" style={{ width: "100%", padding: "2%" }} />
        </div>
      </div>
    );
  }
}

export default ProjectPlan;
