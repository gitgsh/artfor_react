import { width } from "@mui/system";
import React from "react";
import { Modal, Col, Row, Button, Container } from "react-bootstrap";
import "./PFPModal.css";
const PFPModal = (props) => {
  return (
    <div>
      <Modal
        size="lg"
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header>
          {/* <div class="close close1" onClick={props.onHide}></div> */}
          <button className="clb" onClick={props.onHide}>
            x
          </button>
          {/* <button style={{float:"right", width:"15px", height:"15px"}} onClick={props.onHide} value="x"></button> */}
          {/* <Modal.Title>
                        ArtFor
                </Modal.Title> */}
        </Modal.Header>
        <Container
          style={{
            width: "100%",
            border: "none",
            marginTop: "2%",
            textAlign: "center",
            transform: "skew(-0.1deg)",
          }}
        >
          <div
            style={{ textAlign: "center", marginTop: "5%", marginBottom: "6%" }}
          >
            <p class="pmtitle">artfor의 프로젝트 심사 기준을 확인해주세요.</p>
            <p class="pmsubTitle">
              심사 기준을 준수하면 보다 빠른 프로젝트 승인이 가능합니다.
            </p>
          </div>
          <Row style={{ margin: 0, padding: 0 }}>
            <Col>
              <div className="mm">
                <div className="mm2">
                  <p>
                    <img src="/pfp1.png" style={{ width: "25px" }} />
                  </p>
                  <div className="mm3">
                    <p style={{ fontSize: "16px", fontWeight: "500" }}>
                      <strong>승인 가능 프로젝트</strong>
                    </p>
                    <div>
                      <ul>
                        <li>기존에 없던 새로운 시도</li>
                        <li>기존에 없던 작품, 제품, 디지털 콘텐츠</li>
                        <li>
                          창작자의 이전 제품 및 콘텐츠는 새로운 선물에
                          부수적으로 제공 가능
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="mm">
                <div className="mm2">
                  <p>
                    <img src="/pfp2.png" style={{ width: "25px" }} />
                  </p>
                  <div className="mm3">
                    <p style={{ fontSize: "16px", fontWeight: "500" }}>
                      <strong>반려 대상 프로젝트</strong>
                    </p>
                    <div>
                      <ul>
                        <li>기존 상품· 콘텐츠의 판매 및 홍보</li>
                        <li>제3자에 후원금 또는 물품 기부</li>
                        <li>추첨을 통해서만 제공되는 선물</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Button className="pfpb" onClick={props.onHide}>
            확인
          </Button>
        </Container>
      </Modal>
    </div>
  );
};

export default PFPModal;
