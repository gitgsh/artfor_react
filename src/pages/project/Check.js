import React from "react";
import "./Check.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Check({ history }) {
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

  const isAllChecked = checkedInputs.length === 3;
  const disabled = !isAllChecked;

  return (
    <div className="pcheck">
      <h2 class="p_c_title">마지막으로, 이런 준비가 필요해요.</h2>
      <p class="p_c_context">
        프로젝트를 진행하시려면 아래 내용을 준비해주세요.
      </p>
      <br />
      <table
        border="0"
        width="100%"
        style={{ marginBottom: "3%", transform: "skew(-0.1deg)" }}
      >
        <tr>
          <td class="tlien">
            <div className="p_c_cb">
              <input
                type="checkbox"
                id="pcheck1"
                onChange={(e) => {
                  changeHandler(e.currentTarget.checked, "pcheck1");
                }}
                checked={checkedInputs.includes("pcheck1") ? true : false}
              />
              <label id="pcheck1" htmlFor="pcheck1"></label>&nbsp;
              <span>
                {" "}
                대표 창작자는 <strong>만 19세 이상의 성인</strong>이여야 합니다
              </span>
              <br />
              <br />
              <input
                type="checkbox"
                id="pcheck2"
                onChange={(e) => {
                  changeHandler(e.currentTarget.checked, "pcheck2");
                }}
                checked={checkedInputs.includes("pcheck2") ? true : false}
              />
              <label id="pcheck2" htmlFor="pcheck2"></label>&nbsp;
              <span>
                {" "}
                artfor에서 필요 시 연락 드릴 수 있도록{" "}
                <strong>본인 명의의 휴대폰 번호</strong>와{" "}
                <strong>이메일 주소</strong>가 필요합니다.
              </span>
              <br />
              <br />
              <input
                type="checkbox"
                id="pcheck3"
                onChange={(e) => {
                  changeHandler(e.currentTarget.checked, "pcheck3");
                }}
                checked={checkedInputs.includes("pcheck3") ? true : false}
              />
              <label id="pcheck3" htmlFor="pcheck3"></label>&nbsp;
              <span>
                {" "}
                펀딩 성공 후의 정산을 위해{" "}
                <strong>신분증 또는 사업자 등록증, 국내 은행 계좌</strong>를
                준비해주세요.
              </span>
              <br />
            </div>
          </td>
        </tr>
      </table>
      <Button
        variant="dark"
        size="lg"
        onClick={() => history.push("/project/main")}
      >
        뒤로 가기
      </Button>
      &nbsp;
      {/* <Link to="/project/plan/projectuploadmain"> */}
      <Button
        variant="light"
        size="lg"
        disabled={disabled}
        // disabled={disabled}
        // onClick={()=>history.push('/signupcomplete')}
        style={
          disabled
            ? {
                backgroundColor: "dark",
                borderColor: "transparent",
                color: "black",
              }
            : {
                backgroundColor: "#fa3062",
                borderColor: "transparent",
                color: "white",
              }
        }
        onClick={() => {
          disabled
            ? history.push("/")
            : history.push("/project/plan/projectuploadmain");
        }}
      >
        확인
      </Button>
      {/* </Link> */}
    </div>
  );
}

export default Check;
