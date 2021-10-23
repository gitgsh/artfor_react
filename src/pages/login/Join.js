import axios from 'axios';
import React, { useEffect, useState} from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { axiosError } from '../../stores/common';
import './Join.css';


function Join() {



    return (
        
        <div>
             <div className="container_join" >
                 <h3 className="join"><strong>회원가입</strong></h3>
               <form className="join-form" >
                        <div className="join-form-input-1">
                        <InputGroup>
                        <FormControl className="login-form-input-row" placeholder="이름" />
                        </InputGroup>
                        </div>
                        <div className="join-form-input-1">
                        <InputGroup>
                        <FormControl className="login-form-input-row" placeholder="아이디" />
                        <Button className="btn_empty" variant="outline-secondary">중복 확인</Button>
                        </InputGroup>
                        </div>
                        <div className="join-form-input-1">
                        <InputGroup>
                        <FormControl className="login-form-input-row" placeholder="비밀번호" />
                        </InputGroup>
                        </div>
                        <div className="join-form-input-1">
                        <InputGroup>
                        <FormControl className="login-form-input-row" placeholder="비밀번호 확인"/>
                        </InputGroup>
                        </div>
                        <div className="join-form-input-1">
                        <InputGroup>
                        <FormControl className="login-form-input-row" placeholder="연락처" />
                        </InputGroup>
                        </div>
                            
                    
                     <div className="div_btn_join">
                        <Button className="btn_join" variant="dark" >가입</Button>{' '}
                        <Link to="/login"><Button className="btn_join" variant="light">취소</Button></Link>{' '}
                     </div> 
                     
                 </form>
             </div>
         </div>
     );
    }


export default Join

