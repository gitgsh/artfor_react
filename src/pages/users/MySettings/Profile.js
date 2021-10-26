import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Settings.css'

function Profile() {

  let [modal, setModal] = useState(false);

  function modalSwitch() {
    setModal(!modal);
  }

  function NameUpdate(e){
    console.log(e.target.value)
    
  }

  return (
    <div className="setting-box2">
        <div className="setting-box1-1">
          <div className="left-box">
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "30px",
                }}
              >
                <h5 style={{ fontWeight: "bold", fontSize: "20px" }}>이름</h5>
                <button style={{ fontSize: "20px", background:'none', color:'black', border:'0' }} onClick={NameUpdate} value="변경">
                  변경
                </button>
              </div>
              <div>
                <p>김정희</p>
              </div>
              <div style={{width:'30%'}}>
                <NameModal />
              </div>
              <hr style={{marginBottom:'20px'}} />
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "30px",
                }}
              >
                <h5 style={{ fontWeight: "bold", fontSize: "20px" }}>
                  비밀번호
                </h5>
                <button style={{ fontSize: "20px",background:'none', color:'black', border:'0' }}>
                  변경
                </button>
              </div>
              <div>
                <p>xxxxx</p>
              </div>
              <hr style={{marginBottom:'20px'}} />
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "30px",
                }}
              >
                <h5 style={{ fontWeight: "bold", fontSize: "20px" }}>이메일</h5>
                <button style={{ fontSize: "20px",background:'none', color:'black', border:'0' }}>
                  인증
                </button>
              </div>
              <div>
                <p>kkkkkk@naver.com</p>
              </div>
              <hr style={{marginBottom:'20px'}} />
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "30px",
                }}
              >
                <h5 style={{ fontWeight: "bold", fontSize: "20px" }}>연락처</h5>
                <button style={{ fontSize: "20px",background:'none', color:'black', border:'0' }}>
                  변경
                </button>
              </div>
              <div>
                <p>010-2015-1336</p>
              </div>
              <hr style={{marginBottom:'20px'}} />
            </div>

          </div>
          <div style={{ width: "34%", float: "left" }}>
            <div
              style={{
                marginLeft: "auto",
                width: "350px",
                height: "180px",
                border: "1px solid gray",
                borderRadius: "8px",
              }}
            >
              <div style={{ margin: "20px" }}>
                <h5 style={{ fontWeight: "bold", fontSize: "18px" }}>
                  어떤 정보가 프로필에 공개되나요?
                </h5>
                <p style={{ fontsize: "10px", letterSpacing: "-1px" }}>
                  프로필 사진과, 이름, 사용자 이름, 소개글, 웹사이트 및 회원님과
                  관련된 프로젝트 등이 프로필 페이지에 공개 됩니다. 프라이버시
                  설정을 활성화하시면 후원한 프로젝트 목록을 숨길 수 있습니다.
                  내 프로필 바로가기
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

function NameModal(){
  return(
    <div>
      <InputGroup>
        <FormControl
          className="login-form-input-row"
          type="text"
          placeholder="이름 입력"
          aria-label="Recipient's username with two button addons"
        />
      </InputGroup>
      <br />
      <Button variant="dark" style={{width:'80px'}}>저장</Button>
    </div>
  )
}

export default Profile;
