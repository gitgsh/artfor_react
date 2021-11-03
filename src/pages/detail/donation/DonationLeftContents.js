import React from "react";
import { Route } from "react-router";
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
function DonationLeftContents(){

    //Start of RadioButton 
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  
    const controlProps = (item) => ({
      checked: selectedValue === item,
      onChange: handleChange,
      value: item,
      name: 'color-radio-button-demo',
      inputProps: { 'aria-label': item },
    });

    //End of RadioButton 

    return(
        <틀>
         <소제목>작품 정보</소제목>
            <박스1>
            <테이블1>
            <table>
                <tr>
                    <td style={{width:"150px", height:"30px"}}>전시제목</td>
                    <td>자개꽃키트</td>
                </tr>
                
                <tr>
                    <td style={{width:"150px", height:"30px"}}>전시일시</td>
                    <td>2022.02.01</td>
                </tr>

                <tr>
                    <td style={{width:"150px", height:"30px"}}>금액</td>
                    <td>59,000원</td>
                </tr>
            </table>
            </테이블1>
            </박스1>

            <소제목>후원자 정보</소제목>
            <박스2>

            <테이블1>
            <table>
                <tr>
                    <td style={{width:"150px", height:"30px"}}>연락처</td>
                    <td> <TextField id="standard-basic" label="핸드폰번호" variant="standard" /><br/><br/></td>
                </tr>
                <tr>
                    <td style={{width:"150px", height:"30px"}}></td>
                    <td>    <Button variant="outlined" size="small" 
                    style={{color:"black", marginBottom:"10px", borderColor: "grey"}}>
                    인증번호 보내기
                    </Button></td>
                </tr>
                
                <tr>
                    <td style={{width:"150px", height:"30px"}}>이메일</td>
                    <td>korea_sh3@naver.com</td>
                </tr>
            </table>
            <br/>
            <p style={{fontSize:"11px"}}>* 위 연락처와 이메일로 후원 관련 소식이 전달됩니다.</p>
            <p style={{fontSize:"11px"}}>* 연락처 및 이메일 변경은 설정 > 계정 설정에서 가능합니다.</p>
            </테이블1>
            </박스2>


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
            </박스3>

            
        </틀>
        
    )
}

const 틀 = styled.div`

width : 650px;
height: 700px;
float : left;

`
const 박스1 = styled.div`
width : 550px;
height: 120px;
padding-left: 15px;
padding-top: 15px;
border: 1px solid gainsboro;
border-radius: 5px;

`

const 박스2 = styled.div`
width : 550px;
height: 250px;
padding-left: 15px;
padding-top: 15px;
border: 1px solid gainsboro;
border-radius: 5px;

`

const 박스3 = styled.div`
width : 550px;
height: 135px;
padding-left: 15px;
padding-top: 15px;
border: 1px solid gainsboro;
border-radius: 5px;

`


const 테이블1 = styled.table`
font-family: NunumSquareR;
font-size : 15px;
text-align: left;
`

const 소제목 = styled.div`
font-family:'NanumSquareR';
font-weight: 700;
font-size: 16px;
 text-align:left;
 padding-top: 20px;
 margin-bottom: 10px;
`

const 결제수단 = styled.span`
font-family:'NanumSquareR';
font-size: 15px;
padding-top: 10px;
padding-right: 30px;
 margin-bottom: 10px;
`

export default DonationLeftContents;