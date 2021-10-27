import React from "react";
import PlanTabs from "./Tab";
import { Col, Form, FormGroup, Label, Input } from "reactstrap";

function FundingPlan(props) {
  return (
    <div className="fundingPlan-container" style={{ backgroundColor: "red" }}>
      <div className="funding-box">container1</div>

      <div class="row">
        <div class="col">
          {" "}
          <div
            style={{
              backgroundColor: "green",
              display: "inline-block",
            }}
          >
            <div style={{ backgroundColor: "yellow" }}>목표금액</div>

            <div className="funding-goal-box">
              <div
                className="funding-notice"
                style={{ backgroundColor: "blue" }}
              >
                <p>
                  * 프로젝트를 완수하기 위@mui-treasury/components/flex해 필요한
                  금액을 설정해주세요.
                </p>
                <p>
                  * 종료일까지 목표금액을 달성하지 못하면 후원자 결제가 진행되지
                  않습니다.
                </p>
                <p>
                  * 종료 전 후원 취소를 대비해 10% 이상 초과 달성을 목표로
                  해주세요.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="input-group">
            <span class="input-group-text">First and last name</span>
            <input type="text" aria-label="First name" class="form-control" />
            <input type="text" aria-label="Last name" class="form-control" />
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
