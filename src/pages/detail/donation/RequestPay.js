import React from "react";
import $ from "jquery";
import axios from "axios";

class RequestPay extends React.Component {
       //참고주소: https://minaminaworld.tistory.com/78

    render() {
     
    
      const user_email = localStorage.getItem('user_email');
      const user_name = localStorage.getItem('name');
      const funding_price = localStorage.getItem('funding_price');
      const work_title = localStorage.getItem('work_title');
      const work_no = localStorage.getItem('work_no');
      const funding_now = localStorage.getItem('funding_now');

      function fundingsPrc() { //user_funding 테이블 insert
        const data = {funding_price : funding_price, user_email: user_email, user_name: user_name, work_no : work_no};
        console.log("데이터>>", data)
        axios
          .post("http://localhost:8004/app/fundingsPrc/", data)
          .then((result) => {
            console.log("fundingPage 성공");
            console.log("데이터2>>", data)
          })
          .catch((err) => {
            console.log("fundingPage 실패함", err);
            // console.log(this.work.work_content)
          });
      };

      function fundingsPrcUpdate() { //user_funding 테이블 update
        const data = {funding_price : funding_price, funding_now : funding_now, work_no : work_no};
        console.log("데이터>>", data)
        axios
          .post("http://localhost:8004/app/fundingsPrcUpdate/", data)
          .then((result) => {
            console.log("fundingsPrcUpdate 성공");
            console.log("데이터2>>", data)
          })
          .catch((err) => {
            console.log("fundingsPrcUpdate 실패함", err);
            // console.log(this.work.work_content)
          });
      };

      
        $("#check_module").click(function () {
          

            var IMP = window.IMP; // 생략가능
            IMP.init('imp47449560'); //아임포트 관리자페이지 > 시스템설정 > 내정보에서 확인가능
            // 'iamport' 대신 부여받은 "가맹점 식별코드"를 사용
            // i'mport 관리자 페이지 -> 내정보 -> 가맹점식별코드
         

            IMP.request_pay({
            pg: 'inicis', // version 1.1.0부터 지원.
            /*
            'kakao':카카오페이,
            html5_inicis':이니시스(웹표준결제)
            'nice':나이스페이
            'jtnet':제이티넷
            'uplus':LG유플러스
            'danal':다날
            'payco':페이코
            'syrup':시럽페이
            'paypal':페이팔
            */
            pay_method: 'card',
            /*
            'samsung':삼성페이,
            'card':신용카드,
            'trans':실시간계좌이체,
            'vbank':가상계좌,
            'phone':휴대폰소액결제
            */
            merchant_uid: 'merchant_' + new Date().getTime(),
            /*
            merchant_uid에 경우
            https://docs.iamport.kr/implementation/payment
            위에 url에 따라가면 넣을 수 있는 방법 있음.
            */
            name: work_title,//결제창에서 보여질 이름
            amount: funding_price,//가격
            buyer_email: user_email,
            buyer_name: user_name,
            buyer_tel: '010-1234-5678',
            buyer_addr: '서울특별시 강남구 삼성동',
            buyer_postcode: '123-456',
            m_redirect_url: 'http://localhost:3000/'
            /*
            모바일 결제시,
            결제가 끝나고 랜딩되는 URL을 지정
            (카카오페이, 페이코, 다날의 경우는 필요없음. PC와 마찬가지로 callback함수로 결과가 떨어짐)
            */
            }, function (rsp) {
            console.log(rsp);
            if (rsp.success) {
            var msg = '결제가 완료되었습니다.\n';
            msg += '고유ID : ' + rsp.imp_uid;
            msg += '\n상점 거래ID : ' + rsp.merchant_uid;
            msg += '\n결제 금액 : ' + rsp.paid_amount + "원";
            msg += '\n카드 승인번호 : ' + rsp.apply_num;
            fundingsPrc();
            fundingsPrcUpdate();
            } else {
            var msg = '결제에 실패하였습니다.';
            msg += '에러내용 : ' + rsp.error_msg;
            }
            alert(msg);
            window.location.href = "http://localhost:3000/";
            });
            });
      return (
        
        <button id="check_module" 
        style={{backgroundColor:"transparent", border:"0"}}
        ><span style={{color: "white", fontFamily:"NanumSquareR"}}>후원하기</span>
        
        
        </button>
      );
    }
  }

  export default RequestPay;