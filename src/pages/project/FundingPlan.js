import React from "react";
import PlanTabs from "./Tab";
import { Col, Form, FormGroup, Label, Input } from "reactstrap";

function FundingPlan(props) {
  return (
    <div
      className="fundingPlan-container"
      style={{ backgroundColor: "rgb(252, 252, 252)" }}
    >
      <div
        className="funding-box"
        style={{ margin: "0 auto", maxWidth: "1080px" }}
      >
        <div class="row" style={{ paddingTop: "75px" }}>
          <div class="col" style={{ paddingRight: "100px" }}>
            {" "}
            <div
              style={{
                // paddingRight: "100px",
                display: "inline-block",
              }}
            >
              <div
                style={{
                  fontSize: "22px",
                  fontFamily: "NanumSquareB",
                  textAlign: "left",
                }}
              >
                목표금액
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
              height: "309px",
              border: "1px solid rgb(234, 234, 234)",
              borderRadius: "6px",
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
                    paddingTop: "27px",
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
                    backgroundColor: "green",
                    marginTop: "30px",
                    paddingTop: "22px",
                    paddingLeft: "20px",
                    textAlign: "left",
                    fontFamily: "NanumSquareR",
                    fontWeight: "800px",
                    fontSize: "15px",
                  }}
                >
                  목표금액 달성시 예상 수령액
                  <div
                    style={{
                      color: "#F86453",
                      fontFamily: "NanumSquareEB",
                      fontSize: "20px",
                      display: "inline-block",
                    }}
                  >
                    {1234} 원
                  </div>
                  <hr style={{ borderTop: "1px solid grey", width: "200%" }} />
                  <div
                    className="taxContent"
                    style={{
                      backgroundColor: "red",
                      textAlign: "left",
                      //float: "left",
                    }}
                  >
                    {/* 총수수료 */}

                    <div
                      class="row justify-content-between"
                      style={{ color: "#9E9E9E", paddingBottom: "0px" }}
                    >
                      <div class="col-4">총 수수료</div>
                      <div class="col-4">{0} 원</div>
                    </div>

                    <br />
                    {/* 결제대행 수수료 */}
                    {/* 총수수료 */}

                    <div
                      class="row justify-content-between"
                      style={{ color: "#9E9E9E", paddingBottom: "0px" }}
                    >
                      <div class="col-4" style={{ width: "300px" }}>
                        결제대행 수수료 (총 결제액의 3% + VAT)
                      </div>
                      <div class="col-4">{0} 원</div>
                    </div>

                    <br />
                    {/* 총수수료 */}

                    <div
                      class="row justify-content-between"
                      style={{ color: "#9E9E9E", paddingBottom: "0px" }}
                    >
                      <div class="col-4" style={{ width: "300px" }}>
                        플랫폼 수수료(총 모금액의 5%+VAT)
                      </div>
                      <div class="col-4" style={{ textAlign: "center" }}>
                        {0} 원
                      </div>
                    </div>

                    <br />
                  </div>
                </div>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
      <hr className="border-line" style={{ border: 0 }} />
      <div className="funding-box">container2</div>
      <hr className="border-line" />
      <div className="funding-box">container3</div>
    </div>
  );
}

export default FundingPlan;
