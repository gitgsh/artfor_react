import axios from 'axios';
import React, { useEffect, useRef, useState} from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { axiosError } from '../../stores/common';
import "../../CSS/login/Join.css";
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

function Join(props) {
    //인증번호 확인해주기
    function checkNum(){
        axios
        .post("http://localhost:8004/app/user/confirmNum", testNum)
        .then((response2) => {
            console.log("testNum : ", testNum);
            console.log("confirmNum post ", response2);
            const result2 = response2.data;
            console.log("result", result2);

            if (result2 === 1) {
                setCheck(1);
                alert("인증번호 확인 완료");
            }else {
                setCheck(0);
                alert("인증번호가 일치하지 않습니다.");
            }
        })
        .catch((error) => {
            axiosError(error);
      });
    }

    //중복확인하고 중복아니면 인증메일 보내주기
    function confirmEmail(){
        axios
        .post("http://localhost:8004/app/user/mailConfirm", user_email)
        .then((response) => {
            console.log("mailConfirm post ", response);
            const result = response.data;
            console.log("result", result);

            if (result === 1) {
                alert("메일에서 인증번호를 확인해 주세요");
            } else if(result === -1){
                alert("이미 가입된 이메일입니다.")
            } else {
                alert("이메일 전송에 실패하였습니다.");
            }
        })
        .catch((error) => {
            axiosError(error);
      });
    }


    const [userinfo, setUserinfo] = useState({
        user_name : "",
        user_email : "",
        user_pw : "",
    });

    //인증번호 일치 확인용
    const [check, setCheck] = useState(0);
    //인증번호 일치 확인을 위해 서버로 보내는 내용
    const [testNum, setTestnum] = useState({ });


    //warch('value') : value 라는 name 의 Element 관찰
    const { register, watch, handleSubmit,  formState: { errors } } = useForm();

    const user_pw = useRef();
    user_pw.current = watch("user_pw"); //ref 생성 > watch를 이용해서 pw 값 가져오기 > 가져온 pw 값 ref.current 에 넣기

    console.log(errors);
    const user_email = useRef();
    user_email.current = watch("user_email");

    //회원가입
    const onSubmit = (data) => {
        console.log("데이터>>>", data);
    
        setUserinfo(data);
        console.log("유저인포", userinfo);
    
        axios
          .post("http://localhost:8004/app/user/join.do", data)
          .then((response) => {
            console.log("login post user to Spring", response);
            const result = response.data;
            console.log("result", result);
            alert("회원가입 완료");

          })
          .catch((error) => {
            axiosError(error);
            console.log("실패")
          });
    };

    return (
        <div>
             <div className="container_join" >
                 <h3 className="join"><strong>회원가입</strong></h3>
               <form className="join-form" onSubmit={handleSubmit(onsubmit)} >
                        <div className="join-form-input-1">
                            <InputGroup>
                            <FormControl className="login-form-input-row" type = "text" placeholder="이름" {...register("user_name", {required:true, maxLength : 20, minLength : 2 })}/>
                            </InputGroup>
                            {errors.user_name?.type === "required" && (<InputGroup><Warning>이름을 입력해주세요</Warning></InputGroup>)}
                            {(errors.user_name?.type === "maxLength" || errors.user_name?.type === "minLength") && (<InputGroup><Warning>이름은 2자 이상, 20자 이하로 입력하세요.</Warning></InputGroup>)}
                        </div>
                        <div className="join-form-input-1">
                            <InputGroup>
                            <FormControl className="login-form-input-row" placeholder="이메일" type="email" {...register("user_email", {required:true, pattern: /^\S+@\S+$/i}) } />
                            <Button className="btn_empty" variant="outline-secondary" onClick={ confirmEmail } >인증 하기</Button>
                            </InputGroup>
                            {errors.user_email?.type === "required" && (<InputGroup><Warning>이메일을 입력해주세요</Warning></InputGroup>)}
                            {errors.user_email?.type === "pattern" && (<InputGroup><Warning>올바른 이메일 형식이 아닙니다.</Warning></InputGroup>)}
                        </div>
                        <div className="join-form-input-1">
                            <InputGroup>
                            <FormControl className="login-form-input-row" placeholder="인증번호 6자리 입력" {...register("confirmNum", {required:true, pattern: /\d/}) } onChange={(e)=>{ setTestnum(e.target.value); console.log(testNum);}} />
                            <Button className="btn_empty" variant="outline-secondary" onClick={ checkNum }>인증 확인</Button>
                            </InputGroup>
                            {errors.confirmNum?.type === "required" && (<InputGroup><Warning>인증번호를 입력해주세요</Warning></InputGroup>)}
                            {errors.confirmNum?.type === "pattern" && (<InputGroup><Warning>올바른 형식이 아닙니다.</Warning></InputGroup>)}
                        </div>
                        <div className="join-form-input-1">
                            <InputGroup>
                            <FormControl className="login-form-input-row" type="text" placeholder="비밀번호" {...register("user_pw", {required:true, maxLength : 20, minLength : 2 })} />
                            </InputGroup>
                            {errors.user_pw?.type === "required" && (<InputGroup><Warning>비밀번호를 입력해주세요</Warning></InputGroup>)}
                            {(errors.user_pw?.type === "maxLength" || errors.user_pw?.type === "minLength") && (<InputGroup><Warning>비밀번호는 2자 이상, 20자 이하로 입력하세요.</Warning></InputGroup>)}
                        </div>
                        <div className="join-form-input-1">
                            <InputGroup>
                            <FormControl className="login-form-input-row" placeholder="비밀번호 확인" {...register("user_pw_con", 
                            {required : true, validate : (value) => value === user_pw.current })}/> 
                            {errors.user_pw_con?.type === "required" && (<InputGroup><Warning>비밀번호를 입력해주세요</Warning></InputGroup>)}
                            {errors.user_pw_con?.type === "validate" && <InputGroup><Warning>비밀번호가 일치하지 않습니다.</Warning></InputGroup>}
                            </InputGroup>
                        </div>  
                     <div className="div_btn_join">
                        <Button className="btn_join" variant="dark" type="submit">가입</Button>{' '}
                        <Link to="/login"><Button className="btn_join" variant="light">취소</Button></Link>{' '}
                     </div> 
                 </form>
             </div>
         </div>
     );
    }

    const Warning = styled.div`
    color : red ;
    font-size : 13px;
    `;


export default Join

