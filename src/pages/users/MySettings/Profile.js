import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Settings.css'
import './Profile.css'
function Profile() {

  let [nameModal, setNameModal] = useState(false);
  let [pwModal, setPWModal] = useState(false);
  let [emailModal, setEmailModal] = useState(false);
  let [phoneModal, setPhoneModal] = useState(false);
  let [photoModal, setPhotoModal] = useState(false);

  function modalSwitch(e) {
    let value = e.target.value;
    if(value === 'name') {
      setNameModal(!nameModal);
    } else if (value === 'pw'){
      setPWModal(!pwModal);
    } else if (value === 'email') {
      setEmailModal(!emailModal);
    } else if (value === 'phone') {
      setPhoneModal(!phoneModal);
    } else if (value === 'photo') {
      setPhotoModal(!photoModal);
    }
  }

  return (
    <div className="setting-box2">
        <div className="setting-box1-1">
          <div className="left-box">
            <div>
              <div style={{display: "flex", justifyContent: "space-between", marginBottom: "30px"}}>
                <h5 style={{ fontWeight: "bold", fontSize: "17px" }}>이름</h5>
                  {
                    nameModal === true
                    ? <button style={{ fontSize: "17px", background:'none', color:'#3399ff', border:'0' }} onClick={modalSwitch} value="name">취소</button>
                    : <button style={{ fontSize: "17px", background:'none', color:'#3399ff', border:'0' }} onClick={modalSwitch} value="name">변경</button>
                  }
              </div>
              <div>
              {
                nameModal === true
                  ? <div><NameModal></NameModal></div>
                  : <p>김정희</p>
              }
              </div>
              <hr style={{marginBottom:'20px'}} />
            </div>

            <div>
              <div style={{display: "flex", justifyContent: "space-between", marginBottom: "30px"}}>
                <h5 style={{ fontWeight: "bold", fontSize: "17px" }}>비밀번호</h5>
                  {
                    pwModal === true
                    ? <button style={{ fontSize: "17px", background:'none', color:'#3399ff', border:'0' }} onClick={modalSwitch} value="pw">취소</button>
                    : <button style={{ fontSize: "17px", background:'none', color:'#3399ff', border:'0' }} onClick={modalSwitch} value="pw">변경</button>
                  }
              </div>
              <div>
                {
                  pwModal === true
                    ? <div><PasswordModal></PasswordModal></div>
                    : <p>비밀번호입니다.</p>
                }
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
                <h5 style={{ fontWeight: "bold", fontSize: "17px" }}>이메일</h5>
                  {
                    emailModal === true
                    ? <button style={{ fontSize: "17px", background:'none', color:'#3399ff', border:'0' }} onClick={modalSwitch} value="email">취소</button>
                    : <button style={{ fontSize: "17px", background:'none', color:'#3399ff', border:'0' }} onClick={modalSwitch} value="email">변경</button>
                  }
              </div>
              <div>
                {
                  emailModal === true
                    ? <div><EmailModal></EmailModal></div>
                    : <p>kjhgood3@naver.com</p>
                }
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
                <h5 style={{ fontWeight: "bold", fontSize: "17px" }}>연락처</h5>
                  {
                    phoneModal === true
                    ? <button style={{ fontSize: "17px", background:'none', color:'#3399ff', border:'0' }} onClick={modalSwitch} value="phone">취소</button>
                    : <button style={{ fontSize: "17px", background:'none', color:'#3399ff', border:'0' }} onClick={modalSwitch} value="phone">변경</button>
                  }
              </div>
              <div>
                {
                  phoneModal === true
                    ? <div><PhoneModal></PhoneModal></div>
                    : <p>010-2015-1336</p>
                }
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
                <h5 style={{ fontWeight: "bold", fontSize: "17px" }}>회원탈퇴</h5>
                  {
                    phoneModal === true
                    ? <button style={{ fontSize: "17px", background:'none', color:'#3399ff', border:'0' }} onClick={modalSwitch} value="phone">취소</button>
                    : <button style={{ fontSize: "17px", background:'none', color:'#ff6666', border:'0' }} onClick={modalSwitch} value="phone">탈퇴</button>
                  }
              </div>
              <div>
                {
                  phoneModal === true
                    ? <div><PhoneModal></PhoneModal></div>
                    : null
                }
              </div>
            </div>

          </div>

          <div style={{ width: "34%", float: "left"}}>
            <div style={{clear:'both'}}>
            <h5 style={{textAlign:'center', fontWeight: "bold", fontSize: "17px" }}>프로필</h5>
            <div style={{marginTop:'20px', marginLeft:'95px', width:'180px', height:'180px', borderRadius:'70%', overflow:'hidden'}}>
              <img style={{width:'100%', height:'100%', objectFit:'cover'}} src="/dog1.jpg" />
            </div>
            <div style={{marginLeft:'160px', marginTop:'20px'}}>
              {
                photoModal === true
                ? <button style={{ fontSize: "17px", background:'none', color:'#3399ff', border:'0' }} onClick={modalSwitch} value="photo">취소</button>
                : <button style={{ fontSize: "17px", background:'none', color:'#3399ff', border:'0' }} onClick={modalSwitch} value="photo">변경</button>
              }
            </div>
            <div style={{marginLeft:'150px', marginTop:'20px'}}>
              {
                photoModal === true
                  ? <div><PhotoModal></PhotoModal></div>
                  : null
              }
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
      <form>
        <InputGroup style={{width:'40%'}}>
          <FormControl
            type="text"
            placeholder="이름 입력"
          />
        </InputGroup>
        <br />
        <Button variant="dark" style={{width:'80px'}}>저장</Button>
      </form>
    </div>
  )
}

function PasswordModal(){
  return(
    <div>
      <p style={{fontSize:'15px'}}>현재 비밀번호</p>
      <form>
        <InputGroup style={{width:'40%'}}>
          <FormControl
            style={{fontFamily:'Consolas', marginTop:'-5px'}}
            type="password"
            placeholder="현재 비밀번호"
          />
        </InputGroup>
        <div style={{fontSize:'12px', marginTop:'13px', fontFamily:'NanumSquareR'}}>
          <p>비밀번호가 기억나지 않나요? <Link style={{color:'#3399ff'}}>비밀번호 초기화</Link></p>
        </div>
        <br />
        <p style={{fontSize:'15px'}}>변경할 비밀번호</p>
        <InputGroup style={{width:'40%'}}>
          <FormControl
            style={{fontFamily:'Consolas', marginTop:'-5px'}}
            type="password"
            placeholder="변경할 비밀번호"
          />
        </InputGroup>
        <InputGroup style={{width:'40%'}}>
          <FormControl
            style={{fontFamily:'Consolas', marginTop:'10px'}}
            type="password"
            placeholder="변경할 비밀번호 확인"
          />
        </InputGroup>
        <br />
        <Button variant="dark" style={{width:'80px'}}>저장</Button>
      </form>
    </div>
  )
}

function EmailModal(){
  return(
    <div>
      <form>
        <InputGroup style={{width:'40%'}}>
          <FormControl
            type="email"
            placeholder="이메일 입력"
          />
        </InputGroup>
        <br />
        <Button variant="dark" style={{width:'120px'}}>인증메일 전송</Button>
      </form>
    </div>
  )
}

function PhoneModal(){
  return(
    <div>
      <form>
        <InputGroup style={{width:'40%'}}>
          <FormControl
            type="text"
            placeholder="연락처 입력"
          />
        </InputGroup>
        <br />
        <Button variant="dark" style={{width:'80px'}}>저장</Button>
      </form>
    </div>
  )
}

function PhotoModal(){
  return(
    <div>
      <form>
        <InputGroup>
          <FormControl
            type="file"
          />
        </InputGroup>
        <br />
        <Button variant="dark" style={{width:'80px'}}>저장</Button>
      </form>
    </div>
  )
}
export default Profile;
