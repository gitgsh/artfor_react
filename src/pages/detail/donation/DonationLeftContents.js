import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Certification from "./Certification";
import { useParams } from "react-router";
import { useEffect } from "react";
import { inject, observer } from "mobx-react";
import PhoneModal from "../../users/MySettings/PhoneModal";
import { Link } from "react-router-dom";

function DonationLeftContents(props) {
  const { no } = useParams();
  const { mainStore } = props;
  const { works, work } = mainStore;
  let [phoneModal, setPhoneModal] = useState(false);
  function modalSwitch(e) {
    let value = e.target.value;
    if (value === 'phone') {
      setPhoneModal(!phoneModal);
    }
  }

  useEffect(() => {
    mainStore.worksRead();
  }, []);

  const funding_deadline = localStorage.getItem("funding_deadline");
  const work_title = localStorage.getItem("work_title");
  const user_email = localStorage.getItem("user_email");
  const user_phone = localStorage.getItem("phone");

  const findFunding = works.find(function (result) {
    //사용자가 요청한 seq값과 일치하는 seq(db상의 seq값)을 찾는다.
    return result.work_no == no;
  });

  console.log("no>>", no);
  console.log("findFunding>>", findFunding);

  //Start of RadioButton
  const [selectedValue, setSelectedValue] = React.useState("a");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  //End of RadioButton

  var funding_price = localStorage.getItem("funding_price"); //const, let으로 선언하면 initalize~ 에러남.

  return (
    <틀>
      <Certification />
      <소제목 style={{ marginLeft: "25px" }}>작품 정보</소제목>
      <박스1 style={{ marginLeft: "25px" }}>
        <테이블1>
          <table>
            <tr
              style={{
                width: "150px",
                height: "30px",
                fontFamily: "NanumSquareL",
                fontWeight: "bold",
              }}
            >
              <td
                style={{
                  width: "150px",
                  height: "30px",
                  fontFamily: "NanumSquareL",
                  fontWeight: "bold",
                }}
              >
                전시제목
              </td>
              {work_title}
            </tr>

            <tr
              style={{
                width: "150px",
                height: "30px",
                fontFamily: "NanumSquareL",
                fontWeight: "bold",
              }}
            >
              <td>전시일시</td>
              {funding_deadline}
            </tr>

            <tr
              style={{
                width: "150px",
                height: "30px",
                fontFamily: "NanumSquareL",
                fontWeight: "bold",
              }}
            >
              <td>금액</td>
              <td>
                {funding_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                원
              </td>
            </tr>
          </table>
        </테이블1>
      </박스1>

      <소제목 style={{ marginLeft: "25px" }}>후원자 정보</소제목>
      <박스2 style={{ marginLeft: "25px" }}>
        <테이블1>
          <table>
            <tr>
              <td
                style={{
                  width: "150px",
                  height: "30px",
                  fontFamily: "NanumSquareL",
                  fontWeight: "bold",
                }}
              >
                연락처
              </td>
              <td
                style={{
                  width: "350px",
                  height: "30px",
                  fontFamily: "NanumSquareL",
                  fontWeight: "bold",
                }}
              >
                {
                  user_phone !=="null"
                  ? user_phone
                  : <>저장된 연락처가 없습니다. &nbsp;&nbsp;<Link to="/users/mysettings" style={{ color: "#3399ff", transform: "skew(-0.1deg)", fontSize:'13px' }}>연락처 등록</Link></>
                }
              </td>
              {/* <td> <TextField id="standard-basic" label="핸드폰번호" variant="standard" /><br/><br/></td> */}
            </tr>
            {/* <tr>
                    <td style={{width:"150px", height:"30px"}}></td>
                    <td>    <Button variant="outlined" size="small" 
                    style={{color:"black", marginBottom:"10px", borderColor: "grey"}}>
                    인증번호 보내기
                    </Button>
                    <Certification/>
                    </td>
                </tr> */}
            <tr
              style={{
                width: "150px",
                height: "30px",
                fontFamily: "NanumSquareL",
                fontWeight: "bold",
              }}
            >
              <td
                style={{
                  width: "150px",
                  height: "30px",
                  fontFamily: "NanumSquareL",
                  fontWeight: "bold",
                }}
              >
                이메일
              </td>
              <td>{user_email}</td>
            </tr>
          </table>
          <br />
          <p
            style={{
              fontSize: "11px",
              fontFamily: "NanumSquareL",
              fontWeight: "bold",
              marginTop: "30px",
            }}
          >
            * 위 연락처와 이메일로 후원 관련 소식이 전달됩니다.
          </p>
          <p
            style={{
              fontSize: "11px",
              fontFamily: "NanumSquareL",
              fontWeight: "bold",
            }}
          >
            * 연락처 및 이메일 변경은 설정 ＞<Link to="/users/mysettings"style={{ color: "#3399ff", transform: "skew(-0.1deg)"}}>계정 설정</Link>에서 가능합니다.
          </p>
        </테이블1>
      </박스2>
      {/* 
            <소제목>결제수단</소제목>
            <박스3>

            <테이블1>
                
                    <FormControl component="fieldset">
                      <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                        <FormControlLabel style={{width:"25px"}} value="card" control={<Radio />} label="" /><결제수단>카드 및 계좌</결제수단>
                        <FormControlLabel style={{width:"25px"}} value="naverPay" control={<Radio /> } label="" 
                        /> <결제수단 style={{paddingRight:"280px"}}>네이버 페이</결제수단>
                      </RadioGroup>
                    </FormControl>
            <hr/>
            <button 
            style={{marginLeft:"210px", fontFamily:"NanumSquareR", fontSize:"17px", color: "grey", border:"0px", backgroundColor:"transparent"}}>
                + 결제수단 추가</button>
            
            </테이블1>
            </박스3> */}
    </틀>
  );
}

const 틀 = styled.div`
  width: 650px;
  height: 700px;
  float: left;
`;
const 박스1 = styled.div`
  width: 550px;
  height: 120px;
  padding-left: 15px;
  padding-top: 15px;
  border: 1px solid gainsboro;
  border-radius: 5px;
`;

const 박스2 = styled.div`
  width: 550px;
  height: 200px;
  padding-left: 15px;
  padding-top: 15px;
  border: 1px solid gainsboro;
  border-radius: 5px;
`;

const 박스3 = styled.div`
  width: 550px;
  height: 135px;
  padding-left: 15px;
  padding-top: 15px;
  border: 1px solid gainsboro;
  border-radius: 5px;
`;

const 테이블1 = styled.table`
  font-family: NunumSquareR;
  font-size: 15px;
  text-align: left;
`;

const 소제목 = styled.div`
  font-family: "NanumSquareR";
  font-weight: 700;
  font-size: 16px;
  text-align: left;
  padding-top: 20px;
  margin-bottom: 10px;
`;

const 결제수단 = styled.span`
  font-family: "NanumSquareR";
  font-size: 15px;
  padding-top: 10px;
  padding-right: 30px;
  margin-bottom: 10px;
`;

export default inject("mainStore")(observer(DonationLeftContents));
//export default DonationLeftContents;
