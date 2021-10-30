import React from "react";
import PlanTabs from "./Tab";
import { Col, Form, FormGroup, Label, Input } from "reactstrap";
import { Card, CardGroup } from "react-bootstrap";
import { margin } from "@mui/system";
import { Container, Row } from "react-bootstrap";
import "./ProjectFundingPlan.css";
import PFPModal from "./PFPModal";
import { Button } from "react-bootstrap";
import { useState } from "react";

function ProjectFundingPlan(props) {
  const [modalShow, setModalShow] = useState(false);
  
  return (
    <div
      className="fundingPlan-container"
      style={{ backgroundColor: "rgb(252, 252, 252)" }}
    >
      <div
        className="funding-box"
        style={{ margin: "0 auto", maxWidth: "1180px" }}
      >
      <div style={{textAlign:"right"}}>
        <button className="bbtn" onClick={() => setModalShow(true)}>
          심사 기준
        </button>

        <PFPModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
        <div
          style={{
            paddingTop: "5%",
            paddingBottom: "5%",
            display: "inline-block",
          }}
        >
          <Row>
            <Col>
              <a href="/project/main" style={{ textDecorationLine: "none" }}>
                <div className="fb">
                  <div>
                    <p style={{ textAlign: "left" }}>
                      <img src="/book.png" style={{ width: "25px" }} />{" "}
                    </p>
                    <p className="pfpt">프로젝트 계획</p>
                    <p>28%작성완료</p>
                  </div>
                </div>
              </a>
            </Col>
            <Col>
              <div className="fb">
                <a href="/project/check" style={{ textDecorationLine: "none" }}>
                  <div>
                    <p style={{ textAlign: "left" }}>
                      <img src="/mon.png" style={{ width: "25px" }} />{" "}
                    </p>
                    <p className="pfpt">펀딩 계획</p>
                    <p>28%작성완료</p>
                  </div>
                </a>
              </div>
            </Col>
            <Col>
              <div className="fb">
                <a href="/project/main" style={{ textDecorationLine: "none" }}>
                  <div>
                    <p style={{ textAlign: "left" }}>
                      <img src="/safety.png" style={{ width: "25px" }} />{" "}
                    </p>
                    <p className="pfpt">신뢰와 안전</p>
                    <p>28%작성완료</p>
                  </div>
                </a>
              </div>
            </Col>
            <Col>
              <div className="fb">
                <a href="/project/check" style={{ textDecorationLine: "none" }}>
                  <div>
                    <p style={{ textAlign: "left" }}>
                      <img src="/pen.png" style={{ width: "25px" }} />{" "}
                    </p>
                    <p className="pfpt">기본 정보</p>
                    <p>28%작성완료</p>
                  </div>
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default ProjectFundingPlan;
