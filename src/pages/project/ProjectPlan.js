import React from "react";
import { useState } from "react";
import "./ProjectPlan.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputPage from "./input/InputPage";

function ProjectPlan(props) {
  const [category, setCategory] = useState("");
  const [detailCategory, setDetailCategory] = useState("");

  const categoryChange = (event) => {
    setCategory(event.target.value);
  };
  const detailCategoryChange = (event) => {
    setDetailCategory(event.target.value);
  };

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
                프로젝트 제목
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
          <div className="col-8">
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
      {/* 프로젝트 설명 - 에디터 */}
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
                프로젝트 설명
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
          <div className="col-8" style={{}}>
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
        }}
      >
        <p>
          프로젝트 성격과 가장 일치하는 카테고리를 선택해주세요. 적합하지 않을
          경우 운영자에 의해 조정될 수 있습니다.
        </p>
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
}

export default ProjectPlan;
