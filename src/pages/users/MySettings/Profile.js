import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import '../Settings.css'
import './Profile.css'
import styled from 'styled-components';

function Profile(props) {

  let { user_id } = useParams();
  console.log(">>user_id", user_id);

  let [nameModal, setNameModal] = useState(false);
  let [pwModal, setPWModal] = useState(false);
  let [emailModal, setEmailModal] = useState(false);
  let [phoneModal, setPhoneModal] = useState(false);
  let [photoModal, setPhotoModal] = useState(false);

  const [mypage, setMypage] = useState({
    user_id : '',
    user_name : '',
    user_phone : '',
    user_address : '',
    user_email : '',
    user_role : ''
  })

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

  useEffect(()=>{
    axios.get("http://localhost:8004/app/user/mypage.do", {
      params: {
        user_id : user_id,
      }
    })
    .then((result)=>{
      console.log("axios 성공! result는 ? ", result);
      setMypage(result.data);
    })
    .catch((error)=>{
      console.log("error입니다. ", error);
    })
  },[])

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
                  ? <div><NameModal mypage={mypage} setMypage={setMypage}></NameModal></div>
                  : <p>{mypage.user_name}</p>
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
                    : null
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
                    : <p>{mypage.user_email}</p>
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
                    : <p>{mypage.user_phone}</p>
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
                  <button style={{ fontSize: "17px", background:'none', color:'#ff6666', border:'0' }} value="phone">탈퇴</button>
              </div>
              <div>
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

function NameModal(props){
  console.log("mypage모달의 props : ", props);
  let useridx = props.mypage.user_idx; //넘어온 아이디번호 
  console.log("user_idx는? : ", useridx);

  const [inputs, setInputs] = useState({
    user_idx : '',
    user_name : ''
  });
  const {name} = inputs;
  console.log("inputs는? ", inputs);

  // const [user_name, setUser_name] = useState(props.mypage.user_name);
  // const [new_user, setNew_user] = useState({
  //   user_idx : props.mypage.user_idx,
  //   user_id : '',
  //   user_name : '',
  //   user_phone : '',
  //   user_address:'',
  // });
  // console.log("마지막 : ",new_user.user_idx);


  const { register, watch, handleSubmit,  formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("데이터>>>", data);  //변경한이름 user_name : "ddd"

    // setNew_user(data.user_name);
    // console.log("new_user찾아보자");
    // console.log(new_user);

    // axios
    //   .post("http://localhost:8004/app/user/join.do", data)
    //   .then((response) => {
    //     console.log("login post user to Spring", response);
    //     const result = response.data;
    //     console.log("result", result);
    //     alert("회원가입 완료");
    //   })
    //   .catch((error) => {
    //     axiosError(error);
    //     console.log("실패")
    //   });
};

  return(
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup style={{width:'40%'}}>
          <FormControl
            type="text"
            name="user_name"
            placeholder="이름 입력"
            {...register("user_name", {required:true, maxLength : 20, minLength : 2 })}
          />
        </InputGroup>
        {errors.user_name?.type === "required" && (<InputGroup><Warning>이름을 입력해주세요</Warning></InputGroup>)}
        {(errors.user_name?.type === "maxLength" || errors.user_name?.type === "minLength") && (<InputGroup><Warning>이름은 2자 이상, 20자 이하로 입력하세요.</Warning></InputGroup>)}
        <br />
        <Button variant="dark" style={{width:'80px'}} type="submit" >저장</Button>
      </form>
    </div>
  )
}

function PasswordModal(){

  const [userinfo, setUserinfo] = useState({
    user_pw: "",
  });

  const {register, handleSubmit, formState: { errors }, getValues } = useForm();
  
  const onSubmit = (data) => {
   
    console.log("데이터>>>", data);

    setUserinfo(data);
    console.log("유저인포", userinfo.user_pw);

    axios
      .post("http://localhost:8004/app/user/pwcheck.do", data)
      .then((response) => {
        console.log("login post user to Spring", response);
        // result = response.data;
        // console.log("result", result);

        // if (result === 0) {
        //   alert("아이디가 없습니다.");
        // } else if (result === -1) {
        //   alert("비밀번호가 일치하지 않습니다.");
        // } else {
        //   alert("로그인 완료");
        
        //   localStorage.setItem('token',true);
        //   const userName = getValues("user_id");
        //   localStorage.setItem('user_id',userName);
        //   console.log("getvalue 성공", userName);
        //   // localStorage.setItem('user_id',JSON.stringify(userinfo.user_id).slice(1,-1));

        //   props.history.push("/users/myproject");
        //   // props.history.push("/");
        // }
      })
      .catch((error) => {
        console.log("error입니다. ", error);
      });
  };

  return(
    <div>
      <p style={{fontSize:'15px'}}>현재 비밀번호</p>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <Button variant="dark" style={{width:'80px'}} type="submit">저장</Button>
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

const Warning = styled.div`
    color : red ;
    font-size : 13px;
    `;
    
export default Profile;
