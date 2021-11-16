import React from "react";
import "./TobeRel.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
// import { FiAlertCircle } from "react-icons/fi";

const TobeRel = () => {
  return (
    <div
      className="projectPlan-container"
      style={{ backgroundColor: "rgb(252, 252, 252)" }}
    >
      <div className="tr1">
        <div style={{ padding: "2%" }}>
          <div className="tr1_image">
            <img
              src="https://tumblbug.com/wpa/90cea58ead373fc87b3ff9e35be0fc92.png"
              style={{ width: "100%" }}
            />
          </div>
          <div className="tr1_text">
            <p class="title" style={{ paddingTop: "5%", paddingBottom: "4%" }}>
              공개예정
            </p>
            <p class="description">
              프로젝트를 사전 홍보하고
              <br />
              수요 예측하기
            </p>
            <div style={{ paddingLeft: "6%", transform: "skew(-0.1deg)" }}>
              <div style={{ alignItems: "center" }}>
                <div style={{ textAlign: "left", paddingBottom: "1%" }}>
                  <AiOutlineCheckCircle size="18" color="rgb(248, 100, 83)" />{" "}
                  &nbsp; 공개예정 시작일부터 최대 15일간 ArtFor 홈, 둘러보기
                  페이지 노출
                </div>
                <div style={{ textAlign: "left", paddingBottom: "1%" }}>
                  <AiOutlineCheckCircle size="18" color="rgb(248, 100, 83)" />{" "}
                  &nbsp; 알림신청 기능을 통해 프로젝트 수요 예측
                </div>
                <div style={{ textAlign: "left", paddingBottom: "1%" }}>
                  <AiOutlineCheckCircle size="18" color="rgb(248, 100, 83)" />{" "}
                  &nbsp; 알림을 신청한 분들에게 펀딩 시작 시 알림 제공
                </div>
              </div>
              <button className="tr1_btn" disabled="disabled">
                프로젝트 승인 후 신청 가능
              </button>
              <div>
                <a
                  className="trb_a"
                  href="https://help.tumblbug.com/hc/ko/articles/360055793694-%EA%B3%B5%EA%B0%9C%EC%98%88%EC%A0%95-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94-"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecorationLine: "none",
                    paddingRight: "8%",
                    fontWeight: "bold",
                    color: "#6D6D6D",
                    transform: "skew(-0.1deg)",
                  }}
                >
                  더 알아보기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TobeRel;
