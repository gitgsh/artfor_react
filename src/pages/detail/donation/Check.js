import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router";
import PersonalInfo from "./PersonalInfo";
import FundingNotice from "./FundingNotice";
import $ from "jquery";
import RequestPay from "./RequestPay";

function Check() {
  const histroy = useHistory();
  const [fundingNoticeOpen, setFundingNoticeOpen] = useState(false);
  const [checkedInputs, setCheckedInputs] = useState([]);

  const changeHandler = (checked, id) => {
    if (checked) {
      setCheckedInputs([...checkedInputs, id]);
      console.log("체크 반영 완료");
    } else {
      setCheckedInputs(checkedInputs.filter((el) => el !== id));
      console.log("체크 해제 반영 완료");
    }
  };

  const isAllChecked = checkedInputs.length === 2;
  const disabled = !isAllChecked;

  function 열기() {
    return (
      <p
        style={{
          fontFamily: "NanumSquareL",
          fontWeight: "bold",
          color: "#6D6D6D",
        }}
      >
        열기∨
      </p>
    );
  }

  function 닫기() {
    return (
      <p
        style={{
          fontFamily: "NanumSquareL",
          fontWeight: "bold",
          color: "#6D6D6D",
        }}
      >
        닫기∧
      </p>
    );
  }

  return (
    <div className="pcheck">
      <table border="0" width="100%" style={{ marginBottom: "20px" }}>
        <tr>
          <td class="tlien">
            <div
              className="p_c_cb"
              style={{ marginTop: "15px", marginBottom: "-2px" }}
            >
              <input
                type="checkbox"
                id="pcheck1"
                onChange={(e) => {
                  changeHandler(e.currentTarget.checked, "pcheck1");
                }}
                checked={checkedInputs.includes("pcheck1") ? true : false}
              />
              <label
                id="pcheck1"
                htmlFor="pcheck1"
                style={{ marginTop: "4px" }}
              ></label>
              &nbsp;
              <span
                style={{
                  fontFamily: "NanumSquareR",
                  fontWeight: "bold",
                }}
              >
                {" "}
                개인정보 제 3자 동의
              </span>{" "}
              <PersonalInfo />
              <br />
              <input
                type="checkbox"
                id="pcheck2"
                onChange={(e) => {
                  changeHandler(e.currentTarget.checked, "pcheck2");
                }}
                checked={checkedInputs.includes("pcheck2") ? true : false}
              />
              <label
                id="pcheck2"
                htmlFor="pcheck2"
                style={{ marginTop: "3px" }}
              ></label>
              &nbsp;
              <span
                style={{
                  fontFamily: "NanumSquareR",
                  fontWeight: "bold",
                }}
              >
                {" "}
                후원 유의사항 확인
              </span>
              <button
                onClick={() => {
                  setFundingNoticeOpen(!fundingNoticeOpen);
                }}
                style={{
                  marginLeft: "120px",
                  border: "0",
                  backgroundColor: "transparent",
                }}
              >
                {fundingNoticeOpen === false ? <열기 /> : <닫기 />}
              </button>
              <br />
              {fundingNoticeOpen === false ? null : <FundingNotice />}
            </div>
          </td>
        </tr>
      </table>
      &nbsp;
      <Button
        id="check_module"
        variant="light"
        size="lg"
        disabled={disabled}
        style={
          disabled
            ? {
                backgroundColor: "grey",
                borderColor: "transparent",
                color: "black",
              }
            : {
                backgroundColor: "#fa3062",
                borderColor: "transparent",
                color: "white",
              }
          //#fa3062
        }
      >
        <RequestPay />
      </Button>
    </div>
  );
}

export default Check;
