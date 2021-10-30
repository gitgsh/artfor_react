import React from "react";
import PlanTabs from "./Tab";
import { Col, Form, FormGroup, Label, Input } from "reactstrap";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

function FundingPlan(props) {
  const [value, setValue] = React.useState(new Date());

  return (
    <div
      className="fundingPlan-container"
      style={{ backgroundColor: "rgb(252, 252, 252)", height: "100%" }}
    >
      <div className="funding-box">
        <div
          className="row"
          style={{
            paddingTop: "70px",
            paddingBottom: "35px",
            borderBottom: "1px solid",
            borderBottomColor: "rgb(228, 228, 228)",
          }}
        >
          <div class="col" style={{ paddingRight: "100px" }}>
            {" "}
            <div>
              <div
                style={{
                  fontSize: "22px",
                  fontFamily: "NanumSquareB",
                  textAlign: "left",
                }}
              >
                목표 금액
                <span
                  style={{
                    fontSize: "25px",
                    fontFamily: "NanumSquareEB",
                    color: "#F86453",
                  }}
                >
                  *
                </span>
              </div>

              <div
                className="funding-goal-box"
                style={{ backgroundColor: "rgb(252, 252, 252)" }}
              >
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
                    }}
                  >
                    ⓘ 목표 금액 설정 시 꼭 알아두세요!
                  </p>
                  <p>* 프로젝트를 완수하기 위해 필요한 금액을 설정해주세요.</p>
                  <p>
                    * 종료일까지 목표금액을 달성하지 못하면 후원자 결제가
                    진행되지 않습니다.
                  </p>
                  <p>
                    * 종료 전 후원 취소를 대비해 10% 이상 초과 달성을 목표로
                    해주세요.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col"
            style={{
              backgroundColor: "#FFFFFF",

              maxWidth: "630px",
              // height: "309px",
              height: "309px",
              border: "1px solid rgb(234, 234, 234)",
              borderRadius: "6px",
              paddingBottom: "50px",
              paddingLeft: "21px",
              paddingRight: "22px",
            }}
          >
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
                  className="Input-goal"
                  placeholder="50만원 이상의 금액을 입력해주세요"
                />

                <div
                  className="input-goal-box"
                  style={{
                    marginTop: "30px",
                    paddingTop: "20px",
                    paddingBottom: "10px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    textAlign: "left",
                    fontFamily: "NanumSquareR",
                    fontWeight: "800px",
                    fontSize: "15px",
                  }}
                >
                  <div
                    className="row justify-content-between"
                    style={{
                      borderBottom: "1px solid ",
                      borderBottomColor: "rgb(228, 228, 228)",
                    }}
                  >
                    <div class="col-4" style={{ width: "200px" }}>
                      {" "}
                      목표금액 달성시 예상 수령액
                    </div>
                    <div
                      class="col-4"
                      style={{
                        color: "#F86453",
                        fontFamily: "NanumSquareEB",
                        fontSize: "20px",
                        textAlign: "right",
                      }}
                    >
                      {0} 원
                    </div>
                  </div>
                  {/* 
                  <hr
                    style={{
                      borderTop: "1px solid grey",
                      width: "100%",
                      borderColor: "rgb(228, 228, 228)",
                      color: "rgb(228, 228, 228)",
                    }}
                  /> */}

                  <div
                    className="taxContent"
                    style={{
                      textAlign: "left",
                      paddingTop: "20px",

                      //float: "left",
                    }}
                  >
                    {/* 총수수료 */}

                    <div
                      className="row justify-content-between"
                      style={{ color: "#9E9E9E", paddingBottom: "0px" }}
                    >
                      <div class="col-4">총 수수료</div>
                      <div
                        class="col-4"
                        style={{ textAlign: "right", marginBottom: "2px" }}
                      >
                        {0} 원
                      </div>
                    </div>

                    {/* 결제대행 수수료 */}
                    {/* 총수수료 */}

                    <div
                      className="row justify-content-between"
                      style={{ color: "#9E9E9E", paddingBottom: "0px" }}
                    >
                      <div class="col-4" style={{ width: "300px" }}>
                        결제대행 수수료 (총 결제액의 3% + VAT)
                      </div>
                      <div
                        class="col-4"
                        style={{ textAlign: "right", marginBottom: "2px" }}
                      >
                        {0} 원
                      </div>
                    </div>

                    {/* 플랫폼 수수료 */}

                    <div
                      className="row justify-content-between"
                      style={{ color: "#9E9E9E", paddingBottom: "0px" }}
                    >
                      <div class="col-4" style={{ width: "300px" }}>
                        플랫폼 수수료(총 모금액의 5%+VAT)
                      </div>
                      <div
                        class="col-4"
                        style={{ textAlign: "right", marginBottom: "2px" }}
                      >
                        {0} 원
                      </div>
                    </div>
                  </div>
                </div>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
      <div className="funding-box" style={{ height: "100%" }}>
        <div
          className="row"
          style={{
            paddingTop: "70px",
            paddingBottom: "35px",
            borderBottom: "1px solid",
            borderBottomColor: "rgb(228, 228, 228)",
            height: "100%",
          }}
        >
          <div
            class="col"
            style={{ borderRight: "1px solid", height: "487px" }}
          >
            {" "}
            <div>
              <div
                style={{
                  fontSize: "22px",
                  fontFamily: "NanumSquareB",
                  textAlign: "left",
                }}
              >
                펀딩 일정
                <span
                  style={{
                    fontSize: "25px",
                    fontFamily: "NanumSquareEB",
                    color: "#F86453",
                  }}
                >
                  *
                </span>
              </div>

              <div
                className="funding-goal-box"
                style={{
                  backgroundColor: "rgb(252, 252, 252)",
                  width: "400px",
                }}
              >
                <div
                  className="funding-notice"
                  style={{
                    fontFamily: "NanumSquareR",
                    fontSize: "14px",
                    // width: "400px",
                    // backgroundColor: "rgb(253, 244, 243)",
                    // paddingTop: "23px",
                    // paddingLeft: "24px",
                    // paddingRight: "22px",
                    // paddingBottom: "25px",
                    // borderRadius: "8px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "NanumSquareR",
                      fontSize: "16px",
                      letterSpacing: "0px",
                    }}
                  >
                    설정한 일시가 되면 펀딩이 자동 시작됩니다. 펀딩 시작 전까지
                    날짜를 변경할 수 있고, 즉시 펀딩을 시작할 수도 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col"
            style={{
              float: "left",
              marginTop: "-20px",
              marginLeft: "-36px",
              maxWidth: "630px",
              backgroundColor: "#FFFFFF",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              // height: "309px",
              height: "100%",
              border: "1px solid rgb(234, 234, 234)",
              borderRadius: "6px",
              paddingBottom: "50px",
              paddingLeft: "21px",
              paddingRight: "22px",
            }}
          >
            <ul>
              <li style={{ color: "tomato", fontSize: "30px" }}>
                <p
                  style={{
                    marginTop: "0px",
                    color: "black",
                    fontSize: "15px",
                    textAlign: "left",
                  }}
                >
                  시작일
                </p>
                <div
                  className="funding-start-date"
                  // style={{ backgroundColor: "green" }}
                >
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <div
                      style={{
                        fontSize: "12px",
                        textAlign: "left",
                        marginLeft: "38px",
                        marginBottom: "-17px",
                      }}
                    >
                      시작 날짜를 선택해주세요
                    </div>
                    <DesktopDatePicker
                      // label="시작 날짜를 선택해주세요"
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          color="warning"
                          sx={{ width: 500, fontSize: "100px" }}
                          {...params}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </div>
              </li>

              <li
                style={{
                  color: "tomato",
                  fontSize: "30px",
                  listStyleType: "none",
                }}
              >
                <br />
                <p
                  style={{
                    marginTop: "0px",
                    color: "black",
                    fontSize: "15px",
                    textAlign: "left",
                  }}
                >
                  펀딩기간
                  <div
                    style={{
                      textAlign: "left",
                      fontSize: "16px",
                      color: "#6D6D6D",
                    }}
                  >
                    최대 60일
                  </div>
                </p>
              </li>
              <li style={{ color: "tomato", fontSize: "30px" }}>
                <p
                  style={{
                    marginTop: "0px",
                    color: "black",
                    fontSize: "15px",
                    textAlign: "left",
                  }}
                >
                  종료일
                </p>
                {/* EndDate*/}
                <div
                  className="funding-end-date"
                  // style={{ backgroundColor: "red" }}
                >
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <div
                      style={{
                        fontSize: "12px",
                        textAlign: "left",
                        marginLeft: "38px",
                        marginBottom: "-17px",
                      }}
                    >
                      종료 날짜를 선택해주세요
                    </div>
                    <DesktopDatePicker
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          color="warning"
                          sx={{ width: 500 }}
                          {...params}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </div>
              </li>
              <br />
              <li
                style={{
                  color: "tomato",
                  fontSize: "30px",
                }}
              >
                <p
                  style={{
                    marginTop: "0px",
                    color: "black",
                    fontSize: "15px",
                    textAlign: "left",
                  }}
                >
                  후원자 결제종료
                </p>
                <div
                  style={{
                    textAlign: "left",
                    fontSize: "16px",
                    color: "#6D6D6D",
                  }}
                >
                  종료일 다음 날부터 7일
                </div>
              </li>
              <br />
              <br />
              <li
                style={{
                  color: "tomato",
                  fontSize: "30px",
                }}
              >
                <p
                  style={{
                    marginTop: "0px",
                    color: "black",
                    fontSize: "15px",
                    textAlign: "left",
                  }}
                >
                  정산일
                </p>
                <div
                  style={{
                    textAlign: "left",
                    fontSize: "16px",
                    color: "#6D6D6D",
                  }}
                >
                  후원자 결제 종료 다음 날부터 7영업일
                </div>
              </li>
            </ul>
            {/* StartDate */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FundingPlan;
