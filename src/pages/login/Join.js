import axios from 'axios';
import React, { useEffect, useRef, useState} from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { axiosError } from '../../stores/common';
import "../../CSS/login/Join.css";
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

function Join() {
    function confirmEmail(){
        axios
        .post("http://localhost:8004/app/user/mailConfirm", user_email)
        .then((response) => {
            console.log("userConfirm post ", response);
            const result2 = response.data;
            console.log("result", result2);

            if (result2 === 1) {
                alert("인증번호 확인 완료");
            } else {
                alert("인증번호를 확인해주세요.");
            }
        })
        .catch((error) => {
            axiosError(error);
      });
    }

    function checkNum(){
        console.log(testNum,"확인값은")
        axios
        .post("http://localhost:8004/app/user/mailConfirm2", user_email)
        .then((response) => {
            console.log("userConfirm2 post ", response);
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
        user_phone : ""
    });


    let testNum =0;

    //warch('value') : value 라는 name 의 Element 관찰
    const { register, watch, handleSubmit, getValues, formState: { errors } } = useForm();
    const user_pw = useRef();
    user_pw.current = watch("user_pw"); //ref 생성 > watch를 이용해서 pw 값 가져오기 > 가져온 pw 값 ref.current 에 넣기
    const onSubmit = data => console.log(data);
    console.log(errors);
    const user_email = useRef();
    user_email.current = watch("user_email");


    return (
        
        <div>
             <div className="container_join" >
                 <h3 className="join"><strong>회원가입</strong></h3>
               <form className="join-form" onSubmit={handleSubmit(onsubmit)} >
                        <div className="join-form-input-1">
                            <InputGroup>
                            <FormControl className="login-form-input-row" placeholder="이름" {...register("user_name", {required:true, maxLength : 20, minLength : 2 })}/>
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
                            <FormControl className="login-form-input-row" placeholder="인증번호 입력" {...register("confirmNum", {required:true, pattern: /\d/ }) } />
                            <Button className="btn_empty" variant="outline-secondary" onClick={() => { testNum = getValues("confirmNum") }}>인증 확인</Button>
                            </InputGroup>
                            <Info>인증메일에 포함된 6자리수를 입력해주세요.</Info>
                            {errors.confirmNum?.type === "required" && (<InputGroup><Warning>인증번호를 입력해주세요</Warning></InputGroup>)}
                            {errors.confirmNum?.type === "pattern" && (<InputGroup><Warning>올바른 형식이 아닙니다.</Warning></InputGroup>)}
                        </div>
                        <div className="join-form-input-1">
                            <InputGroup>
                            <FormControl className="login-form-input-row" placeholder="비밀번호" {...register("user_pw", {required:true, maxLength : 20, minLength : 2 })} />
                            </InputGroup>
                            {errors.user_pw?.type === "required" && (<InputGroup><Warning>비밀번호를 입력해주세요</Warning></InputGroup>)}
                            {(errors.user_pw?.type === "maxLength" || errors.user_pw?.type === "minLength") && (<InputGroup><Warning>비밀번호는 2자 이상, 20자 이하로 입력하세요.</Warning></InputGroup>)}
                        </div>
                        <div className="join-form-input-1">
                            <InputGroup>
                            <FormControl className="login-form-input-row" placeholder="비밀번호 확인" {...register("user_pw_con", 
                            {required : true, validate : (value) => value === user_pw.current })}/> 
                            {/* 값이 같으면 true */}
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
             <Warning>주의사항</Warning>
         </div>
     );
    }

    const Warning = styled.div`
    color : red ;
    font-size : 13px;
    `;

    const Info = styled.div`
    color : blue;
    font-size : 13px;
    `;

export default Join

