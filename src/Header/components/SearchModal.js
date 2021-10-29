import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import './SearchModal.css';
import './header.css';
import { TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function SearchModal() {
  const [show, setShow] = useState(false); 
  
  return (
    <>
      <Button onClick={() => setShow(true)} style={{color:'black', fontFamily:"NanumSquareB", fontSize:"15px", backgroundColor:"transparent", border:"0px"}}>
      <img src="../icon_navbar.png" style={{width:'20px'}}/>프로젝트 둘러보기
      </Button>
       

      {/* <div className="head_btn1">
        <Button onClick={()=>setShow(true)} style={{backgroundColor:"white", border:"0", color:'black', fontFamily:"NanumSquareB", 
        fontSize:"15px"}}>
          <img src="../icon_navbar.png" style={{width:'20px'}}/>프로젝트 둘러보기</Button>
      
      </div>
       */}
      
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="main-modal"
        aria-labelledby="example-custom-modal-styling-title"
        style={{marginTop: "60px"}}
      >
        
        <Modal.Header>
        
          <Modal.Title id="example-custom-modal-styling-title">
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{height: "100%"}}>
          <>
          <center>
            <TextField id="standard-basic" label="프로젝트를 검색해보세요" variant="standard" style={{width:"800px"}}/>
              <button style={{backgroundColor: "transparent", border:"0"}}><SearchIcon style={{fontSize: "40px"}}/></button>
          
          <div style={{fontFamily:"NanumSquareB", fontSize: "30px", marginTop: "100px"}}>
            <div><a href="#">모든 프로젝트</a></div>
            <div><a href="#">인기추천 프로젝트</a></div>
            <div><a href="#">공개예정 프로젝트</a></div>
            <div style={{height:"575px"}}></div>
          </div>
          </center>
          </>
        </Modal.Body>
      </Modal>
    </>
  );
}
  
  export default SearchModal;
  
  

