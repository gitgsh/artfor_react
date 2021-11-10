import React, { useState } from "react";
import { Link } from "react-router-dom";
import PlanTabs from "./Tab";
import { FcHighPriority } from "react-icons/fc";
import { FcAssistant } from "react-icons/fc";
import { FcList } from "react-icons/fc";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import "./Pledges.css";
import "./Tab.css";
import { Checkbox } from "@mui/material";
import { pink } from "@mui/material/colors";
//jh
import { inject, observer } from "mobx-react";

function Pledges(props) {
  

  return (
    <div
      className="pledges-container"
      style={{ background: "rgb(252, 252, 252)", height: "100%" }}
    >
      <div className="pledges-marginbox">
        <div>
          <Div1 />
        </div>
        <div style={{ clear: "both" }}>
          <br />
          <hr style={{ border: "0.1px solid #D8D8D8" }} />
        </div>
        <div>
          <Div2 />
        </div>
        <div style={{ clear: "both" }}>
          <br />
          <hr style={{ border: "0.1px solid #D8D8D8" }} />
        </div>
        <div style={{ marginBottom: "400px" }}>
          <Div3 />
        </div>
        <div style={{ clear: "both", height: "100px" }}></div>
      </div>
    </div>
  );
}

function Div1() {
  let [div1_text, setDiv1_text] = useState(
    "프로젝트의 진행 및 선물 전달 과정에서 예상되는 어려움을 기입해주세요."
  );
  let [problemModal, setProblemModal] = useState(false);

  const modalSwitch = (e) => {
    let value = e.target.value;
    if (value === "problem_open") {
      setProblemModal(true);
      e.target.style.display = "none";
    } else {
      e.target.style.display = "block";
    }
  };
  const textValue = (value) => {
    setProblemModal(value);
  };

  return (
    <div className="div1-box" style={{ marginTop: "0px" }}>
      <div className="div1-left-box">
        <h5 className="div1-left-box-h5">
          예상되는 어려움
          <span style={{ color: "#F86453", fontSize: "25px" }}>*</span>
        </h5>
        <p className="div1-left-box-p">
          펀딩 진행 및 선물 전달 과정에서 발생 가능한 문제가 있다면 후원자에게
          명확하게 알려주세요. 대응 계획을 함께 적는다면 후원자에게 신뢰를 줄 수
          있습니다.
        </p>
      </div>
      <div className="div1-right-box">
        <div className="div1-right-box-round">
          <div style={{ float: "left" }}>
            <FcHighPriority />
          </div>
          <div className="round-p1">
            <p>예상되는 어려움</p>
          </div>
          <div className="round-button-box">
            {problemModal === true ? null : (
              <button
                className="round-button"
                onClick={modalSwitch}
                value="problem_open"
              >
                작성하기
              </button>
            )}
          </div>
          <div className="round-p2">
            <p style={{ transform: "skew(-0.1deg)" }}>{div1_text}</p>
          </div>
          {problemModal === true ? (
            <ProblemModal
              problemModal={problemModal}
              setProblemModal={setProblemModal}
              textValue={textValue}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

function ProblemModal(props) {
  let [buttoncolor, setButtoncolor] = useState(false);
  const sendValue = () => {
    props.textValue(false);
  };

  const onchanges = (e) => {
    setButtoncolor(true);
  };
  return (
    <div style={{ clear: "both", marginTop: "20px" }}>
      <form>
        <textarea
          className="textarea1"
          onChange={onchanges}
          placeholder="아래와 같은 사항을 고려해서 작성해보세요.&#13;&#10;
                                                    · 제작 과정에서 발생할 수 있는 변동사항이 있다면 무엇인가요? (예산, 선물 내용 등)&#13;&#10;
                                                    · 선물 전달 일정이 지연될 가능성이 있나요?&#13;&#10;
                                                    · 펀딩 자금이 고갈돼 선물을 전달하지 못한다면 어떤 조치를 취할 수 있을까요?&#13;&#10;
                                                    · 이외에 발생가능한 문제는 무엇이 있으며 어떻게 대응할 예정인가요?"
        />
        <div className="div1modal-buttonbox">
          <button className="cancel-button" onClick={sendValue}>
            취소
          </button>
          {buttoncolor === false ? (
            <button className="save-button">저장</button>
          ) : (
            <button
              className="save-button"
              style={{
                background: "#F86453",
                color: "white",
                border: "1px solid #F86453",
              }}
            >
              저장
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

function Div2() {
  let [div2_text, setDiv2_text] = useState("교환 및 환불 안내를 작성해주세요");
  let [refundModal, setRefundModal] = useState(false);

  const modalSwitch = (e) => {
    let value = e.target.value;
    if (value === "refurnd_open") {
      setRefundModal(true);
      e.target.style.display = "none";
    } else {
      e.target.style.display = "block";
    }
  };
  const textValue = (value) => {
    setRefundModal(value);
  };

  return (
    <div className="div1-box" style={{ marginTop: "0px" }}>
      <div className="div1-left-box">
        <h5 className="div1-left-box-h5">
          프로젝트 후원 정책
          <span style={{ color: "#F86453", fontSize: "25px" }}>*</span>
        </h5>
        <p className="div1-left-box-p">
          프로젝트 진행 및 선물 전달 과정에서 발생할 수 있는 위험 요소를
          고려하여 신중히 설정해주세요. 예기치 못한 분쟁이 발생할 경우 중요한
          기준이 됩니다.
        </p>
      </div>
      <div className="div1-right-box">
        <div className="div1-right-box-round">
          <div style={{ float: "left" }}>
            <FcAssistant />
          </div>
          <div className="round-p1">
            <p>교환 및 환불 안내</p>
          </div>
          {refundModal === true ? null : (
            <div>
              <div className="round-button-box2">
                <button
                  className="round-button"
                  onClick={modalSwitch}
                  value="refurnd_open"
                >
                  작성하기
                </button>
              </div>
              <div className="round-p2">
                <p style={{ transform: "skew(-0.1deg)" }}>{div2_text}</p>
              </div>
            </div>
          )}

          {refundModal === true ? (
            <RefundModal
              refundModal={refundModal}
              setRefundModal={setRefundModal}
              textValue={textValue}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

function RefundModal(props) {
  let [buttoncolor, setButtoncolor] = useState(false);
  const sendValue = () => {
    props.textValue(false);
  };

  const onchanges = (e) => {
    setButtoncolor(true);
  };
  return (
    <div style={{ clear: "both", marginTop: "20px" }}>
      <div className="round-p2">
        <p style={{ float: "left", transform: "skew(-0.1deg)" }}>
          [] 안의 예시 문구를 프로젝트에 적합한 내용으로 변경해주세요.
        </p>
        <Link
          to="/guide/G_list/1"
          style={{
            fontFamily: "NanumSquareB",
            marginLeft: "10px",
            transform: "skew(-0.1deg)",
            float: "left",
            color: "#F86453",
            textDecoration: "none",
          }}
        >
          {" "}
          (작성가이드
          <BsBoxArrowUpRight />){" "}
        </Link>
      </div>
      <div className="notice-box">
        <p style={{ marginBottom: "3px" }}>
          * '모든 프로젝트 공통' 내용은 필수로 적어주세요.
        </p>
        <p style={{ marginBottom: "3px" }}>
          * '배송 필요 선물''현장수령 선물''디지털 콘텐츠 선물' 내용들은 이번
          프로젝트에 해당되는 사항만 골라 작성해 주세요.
        </p>
        <p>
          * 후원자의 단순 변심, 제품의 파손 및 불량, 창작자의 예기치 못한 선물
          실행 지연 등 다양한 상황을 고려하여 내용을 작성해 주세요.
        </p>
      </div>
      <form>
        <textarea
          className="textarea2"
          onChange={onchanges}
          placeholder="모든 프로젝트 공통.&#13;&#10;
                                                    - 펀딩 종료일 후에는 즉시 제작 및 실행에 착수하는 프로젝트 특성상 단순 변심에 의한 후원금 환불이 불가능합니다.&#13;&#10;
                                                    - 예상 전달일로부터 [    ]일 이상 선물 전달이 이뤄지지 않을 경우, 환불을 원하시는 분들께는 [ 수수료를 제한 / 수수료를 포함한 ] 후원금을 환불해 드립니다.&#13;&#10;
                                                    (플랫폼 수수료: 모금액의 5%, 부가세 별도 / 결제 수수료: 결제 성공액의 3%, 부가세 별도 )&#13;&#10;
                                                    - 선물 전달을 위한 배송지 및 서베이 답변은 [   종료일 이후 날짜를 입력해주세요.(ex 20XX. XX. XX)   ]에 일괄 취합할 예정입니다.&#13;&#10;
                                                    - 이후 배송지 변경이나 서베이 답변 변경을 원하실 때에는 '창작자에게 문의하기'로 개별 문의하셔야 합니다.&#13;&#10;
                                                    "
        />
        <div className="div1modal-buttonbox">
          <button className="cancel-button" onClick={sendValue}>
            취소
          </button>
          {buttoncolor === false ? (
            <button className="save-button">저장</button>
          ) : (
            <button
              className="save-button"
              style={{
                background: "#F86453",
                color: "white",
                border: "1px solid #F86453",
              }}
            >
              저장
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

function Div3() {
  let [div3_text, setDiv3_text] = useState(
    "선물에 해당하는 상품을 설명하세요."
  );
  let [categoryModal, setCategoryModal] = useState(false);

  const modalSwitch = (e) => {
    let value = e.target.value;
    if (value === "category_open") {
      setCategoryModal(true);
      e.target.style.display = "none";
    } else {
      e.target.style.display = "block";
    }
  };
  const textValue = (value) => {
    setCategoryModal(value);
  };

  return (
    <div className="div1-box" style={{ marginTop: "0px" }}>
      <div className="div1-left-box">
        <h5 className="div1-left-box-h5">상품 정보 고시</h5>
        <p className="div1-left-box-p">
          선물에 대한 더 자세한 정보를 참고할 수 있도록 상품 고시를
          작성해주세요.
        </p>
      </div>
      <div className="div1-right-box">
        <div className="div1-right-box-round">
          <div style={{ float: "left" }}>
            <FcList />
          </div>
          <div className="round-p1">
            <p>상품 설명</p>
          </div>
          <div className="round-button-box3">
            {categoryModal === true ? null : (
              <button
                className="round-button"
                onClick={modalSwitch}
                value="category_open"
              >
                작성하기
              </button>
            )}
          </div>
          <div className="round-p2">
            <p style={{ transform: "skew(-0.1deg)" }}>{div3_text}</p>
          </div>
          {categoryModal === true ? (
            <CategoryModal
              categoryModal={categoryModal}
              setCategoryModal={setCategoryModal}
              textValue={textValue}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

function CategoryModal(props) {
  let [buttoncolor, setButtoncolor] = useState(false);
  const sendValue = () => {
    props.textValue(false);
  };

  const onchanges = (e) => {
    setButtoncolor(true);
  };

  return (
    <div style={{ clear: "both", marginTop: "20px" }}>
      <form>
        <textarea
          className="textarea1"
          onChange={onchanges}
          placeholder="아래와 같은 사항을 고려해서 작성해보세요.&#13;&#10;
                                                    · 상품 분류를 설명해주세요.&#13;&#10;
                                                    · 포장 단위별 용량(중량), 수량, 크기를 작성해주세요.&#13;&#10;
                                                    · 생산자, 원산지, 제조년월일(포장일 또는 생산연도), 유통기한 또는 품질 유지기한을&#13;&#10;&nbsp;작성해주세요.&#13;&#10;
                                                    · 기타 등등 상품 관련 정보를 작성해주세요."
        />
        <div className="div1modal-buttonbox">
          <button className="cancel-button" onClick={sendValue}>
            취소
          </button>
          {buttoncolor === false ? (
            <button className="save-button">저장</button>
          ) : (
            <button
              className="save-button"
              style={{
                background: "#F86453",
                color: "white",
                border: "1px solid #F86453",
              }}
            >
              저장
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
export default Pledges;
