import React from "react";
import PlanTabs from "./Tab";
import { Col, Form, FormGroup, Label, Input } from "reactstrap";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
// jh
import { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";
import dayjs from "dayjs";

function FundingPlan(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [fee1, setFee1] = useState(0);
  const [fee2, setFee2] = useState(0);

  //jh
  const { mainStore } = props;
  const { works, work } = mainStore;

  // 얘를 없애면 home안감
  // useEffect(()=>{
  //   mainStore.worksRead();
  // }, [mainStore]);

  function Soso1() {
    console.log(work.funding_goal);
    const mfee1 = work.funding_goal * 0.03;
    const rfee = mfee1 + mfee1 * 0.1;
    setFee1(rfee);
    return fee1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function Soso2() {
    const mfee2 = work.funding_goal * 0.05;
    const rfee = mfee2 + mfee2 * 0.1;
    setFee2(rfee);
    return fee2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  function Soso3() {
    const total = fee1 + fee2;
    return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  function Soso4() {
    const goal = work.funding_goal;
    const total = fee1 + fee2;
    const expect = goal - total;

    return expect.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

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
                  fontSize: "20px",
                  fontFamily: "NanumSquareEB",
                  textAlign: "left",
                  transform: "skew(-0.1deg)",
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
                style={{
                  backgroundColor: "rgb(252, 252, 252)",
                  transform: "skew(-0.1deg)",
                }}
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
                      transform: "skew(-0.1deg)",
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
                    fontSize: "15px",
                    paddingTop: "25px",
                    paddingBottom: "12px",
                    transform: "skew(-0.1deg)",
                    fontWeight: "bold",
                  }}
                >
                  목표 금액
                </Label>

                <Input
                  type="number"
                  style={{ textAlign: "right", transform: "skew(-0.1deg)" }}
                  className="Input-goal"
                  placeholder="50만원 이상의 금액을 입력해주세요"
                  value={work.funding_goal}
                  onChange={(event) => {
                    work.funding_goal = event.target.value;
                  }}
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
                    fontFamily: "NanumSquareL",
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
                    <div
                      class="col-4"
                      style={{
                        width: "200px",
                        fontWeight: "bold",
                        transform: "skew(-0.1deg)",
                      }}
                    >
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
                      <Soso4 /> 원{/* {work.funding_goal} */}
                    </div>
                  </div>

                  <div
                    className="taxContent"
                    style={{
                      textAlign: "left",
                      paddingTop: "20px",
                    }}
                  >
                    {/* 총수수료 */}

                    <div
                      className="row justify-content-between"
                      style={{
                        color: "#9E9E9E",
                        paddingBottom: "0px",
                        transform: "skew(-0.1deg)",
                      }}
                    >
                      <div class="col-4">총 수수료</div>
                      <div
                        class="col-4"
                        style={{ textAlign: "right", marginBottom: "2px" }}
                      >
                        {/* {0} 원 */}
                        <Soso3 /> 원
                      </div>
                    </div>

                    {/* 결제대행 수수료 */}
                    {/* 총수수료 */}

                    <div
                      className="row justify-content-between"
                      style={{
                        color: "#9E9E9E",
                        paddingBottom: "0px",
                        transform: "skew(-0.1deg)",
                      }}
                    >
                      <div class="col-4" style={{ width: "300px" }}>
                        결제대행 수수료 (총 결제액의 3% + VAT)
                      </div>
                      <div
                        class="col-4"
                        style={{ textAlign: "right", marginBottom: "2px" }}
                      >
                        <Soso1 /> 원{/* {0} 원 */}
                      </div>
                    </div>

                    {/* 플랫폼 수수료 */}

                    <div
                      className="row justify-content-between"
                      style={{
                        color: "#9E9E9E",
                        paddingBottom: "0px",
                        transform: "skew(-0.1deg)",
                      }}
                    >
                      <div class="col-4" style={{ width: "300px" }}>
                        플랫폼 수수료(총 모금액의 5%+VAT)
                      </div>
                      <div
                        class="col-4"
                        style={{ textAlign: "right", marginBottom: "2px" }}
                      >
                        {/* {0} 원 */}
                        <Soso2 /> 원
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
            style={{
              marginTop: "26px",
              marginRight: "5.8px",
              borderRight: "1px solid",
              height: "570px",
            }}
          >
            {" "}
            <div>
              <div
                style={{
                  fontSize: "20px",
                  fontFamily: "NanumSquareEB",
                  textAlign: "left",
                  transform: "skew(-0.1deg)",
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
                  }}
                >
                  <p
                    style={{
                      fontFamily: "NanumSquareR",
                      fontSize: "16px",
                      letterSpacing: "0px",
                      transform: "skew(-0.1deg)",
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
              marginLeft: "-59px",
              maxWidth: "630px",
              // backgroundColor: "green",
              // backgroundColor: "#FFFFFF",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
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
                    marginTop: "15px",
                    color: "black",
                    fontSize: "15px",
                    textAlign: "left",
                    fontWeight: "bold",
                    transform: "skew(-0.1deg)",
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
                        marginLeft: "11px",
                        marginBottom: "-17px",
                        transform: "skew(-0.1deg)",
                      }}
                    >
                      시작 날짜를 선택해주세요
                    </div>
                    <DesktopDatePicker
                      // label="시작 날짜를 선택해주세요"
                      value={startDate}
                      dateFormat="yyyy-MM-dd"
                      onChange={(startDate) => {
                        setStartDate(startDate);
                        console.log(startDate);
                        //const dateFormat = dayjs(startDate).format('YY/MM/DD');
                        //console.log(">>>>",dateFormat);
                        //console.log(">>>>", typeof dateFormat)
                        work.funding_startline = startDate;
                        console.log(">>>>", work.funding_startline);
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
                    fontWeight: "normal",
                    transform: "skew(-0.1deg)",
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
                    fontWeight: "bold",
                    transform: "skew(-0.1deg)",
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
                        marginLeft: "12px",
                        marginBottom: "-17px",
                        transform: "skew(-0.1deg)",
                      }}
                    >
                      종료 날짜를 선택해주세요
                    </div>
                    <DesktopDatePicker
                      value={endDate}
                      onChange={(endDate) => {
                        setEndDate(endDate);
                        console.log(endDate);
                        //const dateFormat = dayjs(endDate).format('YY/MM/DD');
                        //console.log(">>>>",dateFormat);
                        //work.funding_deadline = dateFormat;
                        work.funding_deadline = endDate;
                        //console.log(">>>>", work.funding_deadline);
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
                    fontWeight: "bold",
                    transform: "skew(-0.1deg)",
                  }}
                >
                  후원자 결제종료
                </p>
                <div
                  style={{
                    textAlign: "left",
                    fontSize: "16px",
                    color: "#6D6D6D",
                    transform: "skew(-0.1deg)",
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
                    fontWeight: "bold",
                    transform: "skew(-0.1deg)",
                  }}
                >
                  정산일
                </p>
                <div
                  style={{
                    textAlign: "left",
                    fontSize: "16px",
                    color: "#6D6D6D",
                    transform: "skew(-0.1deg)",
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

//export default FundingPlan;
export default inject("mainStore")(observer(FundingPlan));
