import { inject, observer } from "mobx-react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Button, Modal } from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import { useState, useParams } from "react";

function FundingModal(props) {
      const history = useHistory();
       const token = localStorage.getItem('token');

    //  const { no } = useParams();
    //  const { mainStore } = props;
    //  const { works, work } = mainStore;
    //  const findFunding = works.find(function (result) {
    //    //사용자가 요청한 seq값과 일치하는 seq(db상의 seq값)을 찾는다.
    //    return result.work_no == no;
    //  });
  //   const { fundingStore } = props;
  //   const { fundings, funding } = fundingStore;
  //   const findFunding = fundings.find(function (result) {
  //   //사용자가 요청한 seq값과 일치하는 seq(db상의 seq값)을 찾는다.
  //   return result.work_no == no;
  // });
    const detail_work_no = localStorage.getItem("detail_work_no");
    const user_name = window.localStorage.getItem('name');
    const user_email = localStorage.getItem('user_email');
    
    console.log(user_email);
    

    // const {fundingStore} = props;
    // const {fundings, funding} = fundingStore;
    const [funding_price, setFunding_price] = useState(0);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handlePay(e){
      return(
        setFunding_price(e.target.value),
        console.log(funding_price)
        
      )
    }
    window.localStorage.setItem("funding_price", funding_price)
    
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
          <Modal.Body style={{color: "black"}}>젊은 아티스트를 위해 후원해주셔서 감사합니다!<br/>
          후원하시고자 하는 금액을 입력해주시면, 결제페이지로 넘어갑니다.<br/><br/>
                <Input
                  type="number"
                  style={{ textAlign: "right" }}
                  transform="skew(-0.1deg)"
                  className="Input-goal"
                  placeholder="숫자만 입력 가능합니다"
                  //value={funding.funding_price}
                  onChange={handlePay}
                  
                />
            
        
          </Modal.Body>
          <Modal.Footer>
            
              <Button 
            style={{padding:'0px'}}
            variant="danger" 
            // <Link to={`/detail/${data.work_no}`} onClick={()=>{mainStore.getWork(data.work_no)}}></Link>
            onClick={()=>history.push('/donation')} style={{marginRight:"30px"}}>
                확인
            </Button>
            <Button style={{padding:'0px'}}
            variant="secondary" onClick={handleClose} style={{marginRight:"160px"}}>
                닫기
            </Button>
            
            
          </Modal.Footer>
        </Modal>
      </>

    );
  }
// export default FundingModal;
export default inject("mainStore")(observer(FundingModal));