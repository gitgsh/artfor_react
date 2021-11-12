import React from "react";
import $ from "jquery";
import axios from "axios";

class Certification extends React.Component {
    
    render() {

      function certiCheck(){
          
            var IMP = window.IMP; // 생략가능
            IMP.init('imp47449560'); //아임포트 관리자페이지 > 시스템설정 > 내정보에서 확인가능
            // 'iamport' 대신 부여받은 "가맹점 식별코드"를 사용
            // i'mport 관리자 페이지 -> 내정보 -> 가맹점식별코드
            IMP.certification({
            merchant_uid : 'merchant_' + new Date().getTime() //본인인증과 연관된 가맹점 내부 주문번호가 있다면 넘겨주세요
            }, function (rsp) {
                if ( rsp.success ) {
                    // 인증성공
                   console.log(rsp.imp_uid);
                   console.log(rsp.merchant_uid);
                   axios({
                    url: "{http://localhost:3000/donation}", // 서버의 인증 정보를 받는 endpoint
                    method: "post",
                    headers: { "Content-Type": "application/json" },
                    data: { imp_uid: rsp.imp_uid }
                  });
                }else {
            // 인증취소 또는 인증실패
        var msg = '인증에 실패하였습니다.';
        msg += '에러내용 : ' + rsp.error_msg;
            }
            alert(msg);
            })
         
        }

      return (
        <>
        </>
        // <button id="check_certi" onClick={()=>{certiCheck()}}
        // style={{backgroundColor:"brown", border:"0"}}
        // ><span style={{color: "white", fontFamily:"NanumSquareR"}}>인증번호 보내기2
        // </span>
        // </button>
      );
    }
  }

  export default Certification;