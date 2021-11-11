import { inject, observer } from "mobx-react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Button, Modal } from "react-bootstrap";
import {Link} from "react-router-dom";
import { useState } from "react";

function FundingModal(props) {
    
  const token = localStorage.getItem('token');
    const {fundingStore} = props;
    const {fundings, funding} = fundingStore;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      
        {
          token == 'true'
          ? 
           <Button
           onClick={handleShow}
           variant="danger"
           style={{
             fontFamily: "NanumSqareL",
             marginRight: "138px",
             marginLeft: "8px",
           }}
         >
           이 프로젝트 후원하기
         </Button>
          : 
          <Button
          onClick={()=>{alert('로그인 해주세요!')}}
          variant="danger"
          style={{
            fontFamily: "NanumSqareL",
            marginRight: "138px",
            marginLeft: "8px",
          }}
        >
          이 프로젝트 후원하기
         </Button>
        }

        
        
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header >
            <Modal.Title style={{margin:"auto"}}>감사합니다 후원자님!</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{color: "black"}}>젊은 아티스트를 위해 후원해주셔서 감사합니다.
          후원하시고자 하는 금액을 입력해주시면, 결제창으로 넘어갑니다.<br/><br/>
            <form name="funding_modal_amount">
                <input type="number"/>원
                <Input
                  type="number"
                  style={{ textAlign: "right" }}
                  transform="skew(-0.1deg)"
                  className="Input-goal"
                  placeholder="후원하고자 하는 금액을 입력해주세요"
                  value={funding.funding_price}
                  onChange={event=> {funding.funding_price = event.target.value}}
                />

            </form>  
            
            
          </Modal.Body>
          <Modal.Footer>
              <div>
            <Button style={{padding:'0px', float:"left"}}
            variant="secondary" onClick={handleClose} style={{marginRight:"200px"}}>
                닫기
            </Button>
            <Button 
            style={{padding:'0px'}}
            variant="danger" 
            onClick={()=>fundingStore.fundingsPage()} style={{marginRight:"200px"}}>
                확인
            </Button>
            </div>
            
            
          </Modal.Footer>
        </Modal>
      </>

    );
  }
// export default FundingModal;
export default inject("fundingStore")(observer(FundingModal));
