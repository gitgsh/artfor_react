import { ModalFooter } from "react-bootstrap";
import { Modal } from "react-bootstrap";

import { Button } from "react-bootstrap";
import { useState } from "react";
import { Height } from "@material-ui/icons";

function PersonalInfo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        onClick={handleShow}
        style={{
          border: "0",
          backgroundColor: "transparent",
          color: "blue",
          marginLeft: "90px",
          fontFamily: "NanumSquareL",
          fontWeight: "bold",
        }}
      >
        내용보기
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title
            style={{
              margin: "auto",
              fontFamily: "NanumSquareL",
              fontWeight: "bold",
            }}
          >
            개인정보 제 3자 제공 동의
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            color: "#6D6D6D",
            fontFamily: "NanumSquareL",
            fontWeight: "bold",
            lineHeight: "180%",
            marginBottom: "40px",
          }}
        >
          회원의 개인정보는 당사의 개인정보 취급방침에 따라 안전하게 보호됩니다.
          '회사'는 이용자들의 개인정보를 개인정보 취급방침의 '제 2조 수집하는
          개인정보의 항목, 수집방법 및 이용목적'에서 고지한 범위 내에서
          사용하며, 이용자의 사전 동의 없이는 동 범위를 초과하여 이용하거나
          원칙적으로 이용자의 개인정보를 외부에 공개하지 않습니다.
          <br />
          <table
            border="1px"
            style={{ borderRight: "0px", borderLeft: "0px", marginTop: "10px" }}
          >
            <tr>
              <td style={{ width: "130px" }}>제공받는 자</td>
              <td>후원 프로젝트의 창작자</td>
            </tr>
            <tr>
              <td>제공 목적</td>
              <td>티켓 전달 및 관련 상담 및 민원처</td>
            </tr>
            <tr>
              <td> 제공 정보</td>
              <td> 수취인 성명, 휴대전화번호, 배송 주소</td>
            </tr>
            <tr>
              <td> 보유 및 이용기간</td>
              <td>
                {" "}
                재화 또는 서비스의 제공이 완료된 즉시 파기(단, 관계법령에 정해진
                규정에 따라 법정기간 동안 보관)
              </td>
            </tr>
          </table>
          <br />* 동의 거부권 등에 대한 고지 개인정보 제공은 서비스 이용을 위해
          꼭 필요합니다. 개인정보 제공을 거부하실 수 있으나, 이 경우 서비스
          이용이 제한될 수 있습니다.
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{ marginRight: "200px" }}
          >
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PersonalInfo;
