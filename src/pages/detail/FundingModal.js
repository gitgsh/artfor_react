import { inject, observer } from "mobx-react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Button, Modal } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useState, useParams } from "react";

function FundingModal(props) {
  const history = useHistory();
  const token = localStorage.getItem("token");

  const detail_work_no = localStorage.getItem("detail_work_no");
  const user_name = window.localStorage.getItem("name");
  const user_email = localStorage.getItem("user_email");
  const funding_deadline = localStorage.getItem("funding_deadline");
  const funding_startline = localStorage.getItem("funding_startline");
  var today = new Date();
  var year = today.getFullYear();
  var month = ("0" + (today.getMonth() + 1)).slice(-2);
  var day = ("0" + today.getDate()).slice(-2);
  var dateString = year + "-" + month + "-" + day; //현재날짜(2021-11-10 형태)
  console.log(user_email);
  console.log("token >> ", token);

  // const {fundingStore} = props;
  // const {fundings, funding} = fundingStore;
  const [funding_price, setFunding_price] = useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log("deadline >>", funding_deadline);
  console.log("dateString >>", dateString);
  console.log("funding_startline>>", funding_startline);
  function handleButton() {
    if (
      token == "true" &&
      funding_deadline >= dateString &&
      funding_startline <= dateString
    ) {
      setShow(true);
    } else if (token == null) {
      alert("로그인 해주세요!");
    } else if (funding_deadline < dateString) {
      alert("마감된 프로젝트입니다!");
    } else if (funding_startline > dateString) {
      alert(
        "아직 공개되지 않은 프로젝트입니다! 오픈 예정일은 " +
          funding_startline +
          " 입니다"
      );
    }
  }

  function handlePay(e) {
    return setFunding_price(e.target.value), console.log(funding_price);
  }
  window.localStorage.setItem("funding_price", funding_price);

  return (
    <>
      <Button
        onClick={() => {
          handleButton();
        }}
        variant="danger"
        style={{
          marginRight: "138px",
          marginLeft: "8px",
          fontWeight: "normal",
          transform: "skew(-1.0deg)",
          minWidth: "177px",
        }}
      >
        이 프로젝트 후원하기
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title
            style={{ margin: "auto", marginTop: "13px", marginBottom: "13px" }}
          >
            감사합니다 후원자님!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            color: "black",
            marginLeft: "12px",
            transform: "skew(-0.1deg)",
          }}
        >
          <p style={{ marginBottom: "19px" }}>
            아티스트를 위해 후원해주셔서 감사합니다!
            <br />
            후원하시고자 하는 금액을 입력해주시면, 결제페이지로 넘어갑니다.
          </p>

          <Input
            type="number"
            style={{ textAlign: "right", marginBottom: "15px" }}
            transform="skew(-0.1deg)"
            className="Input-goal"
            placeholder="숫자만 입력 가능합니다"
            onChange={handlePay}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{
              padding: "0px",
              fontWeight: "bold",
              transform: "skew(-0.1deg)",
            }}
            variant="danger"
            onClick={() => history.push("/donation")}
            style={{ marginRight: "30px" }}
          >
            확인
          </Button>
          <Button
            style={{
              padding: "0px",
              fontWeight: "bold",
              transform: "skew(-0.1deg)",
            }}
            variant="secondary"
            onClick={handleClose}
            style={{ marginRight: "160px" }}
          >
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
// export default FundingModal;
export default inject("mainStore")(observer(FundingModal));
