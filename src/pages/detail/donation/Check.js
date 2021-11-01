import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";

function Check({history}) {
    const [checkedInputs, setCheckedInputs] = useState([]);
  
    const changeHandler = (checked, id) => {
      if (checked) {
        setCheckedInputs([...checkedInputs, id]);
        console.log("체크 반영 완료");
      } else {
        setCheckedInputs(checkedInputs.filter(el => el !== id));
        console.log("체크 해제 반영 완료");
      }
    };
  
    const isAllChecked = checkedInputs.length === 2;
    const disabled = !isAllChecked;
    
    return (
      <div className="pcheck">
        <h2 class="p_c_title">마지막으로, 이런 준비가 필요해요.</h2>
        <p class="p_c_context">프로젝트를 진행하시려면 아래 내용을 준비해주세요.</p>
        <br />
        <table border="0" width="100%" style={{marginBottom:"3%"}}>
          <tr>
            <td class="tlien">
              <div className="p_c_cb">
                <input type="checkbox" id="pcheck1" onChange={e=>{
                  changeHandler(e.currentTarget.checked, 'pcheck1');
                }}
                checked={checkedInputs.includes('pcheck1') ? true : false} />
                <label id="pcheck1" htmlFor="pcheck1"></label>&nbsp;
                <span> 개인정보 제 3자 동의</span><br /><br />
          
                <input type="checkbox" id="pcheck2" onChange={e=>{
                  changeHandler(e.currentTarget.checked, 'pcheck2');
                }}
                checked={checkedInputs.includes('pcheck2') ? true : false} />
                <label id="pcheck2" htmlFor="pcheck2"></label>&nbsp;
                <span> 후원유의사항 확인</span><br /><br />
  
                
              </div>
            </td>
          </tr>
        </table>
        <Button  variant="dark" size="lg" 
          onClick={()=>history.push('/project/main')}>뒤로 가기</Button>
        &nbsp;
        <Button 
          variant="light" 
          size="lg"
          disabled={disabled}
          onClick={()=>history.push('/signupcomplete')}
          style={
            disabled
              ? { backgroundColor: "dark", borderColor: "transparent", color:"black"}
              : { backgroundColor: '#fa3062',  borderColor: "transparent", color:"white" }
            
          }
          >확인</Button>
      </div>
  
    ) 
      
  }
  
  export default Check;
  