import { inject, observer } from "mobx-react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Button, Modal } from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import { useState, useParams } from "react";

function FundingModal_OpenExp_false(props) {
      
    
    return (
      <>
      <Button
           variant="danger"
           style={{
             fontFamily: "NanumSqareL",
             marginRight: "138px",
             marginLeft: "8px",
           }}
         >
         🔕 찜하기 취소
         </Button>

        
      </>

    );
  }
// export default FundingModal;
export default inject("mainStore")(observer(FundingModal_OpenExp_false));
