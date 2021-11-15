import { Button, FormControl, InputGroup } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import { SentimentSatisfiedOutlined } from "@material-ui/icons";
import axios from "axios";
import { Preview } from "@mui/icons-material";
import { inject, observer } from "mobx-react";

function PhotoModal(props){
  const { membersStore } = props;
  const { members, member } = membersStore;

  const onFileChange = (e) => {
    const {
      target: { files },
    } = e;
    const reader = new FileReader();
    //
    reader.onloadend = (progressEvent) => {
      const {
        currentTarget: { result },
      } = progressEvent;
      // 파일보여줄려고
      props.setAttachment(result);
    };
    reader.readAsDataURL(files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    console.log("form은? ", form);
    let data = new FormData(form);
    data.append("user_email", member.user_email);
    console.log("data가 뭐냐고 대체", data);
    
    axios.post("http://localhost:8004/app/user/fileupload", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      }      
    }).then((result)=>{
          console.log('fileupload 성공', result);
          console.log(result.data.user_photo);
          props.updatephoto(result.data.user_photo);
          console.log("props.photo", props.photo);
          // member.user_photo = result.data.user_photo;
          // localStorage.setItem('photo',member.user_photo);
          // props.setPhoto(result.data.user_photo);
          // //setPhoto("a.gif");
          // console.log("photo는?", props.photo);
          // alert("사진 변경 성공!");
          // // setPhoto(photo);
          // props.setPhotoModal(false);
          // props.setPhotostatus(true);
        })
      .catch((err)=>{
          console.log('fileupload 실패', err);
          props.setPhotoModal(false);
      })
  }
  return(
    <div>
      {/* <h1>{member.user_photo}</h1> */}
      <form onSubmit={onSubmit}>
        <InputGroup>
          <FormControl
            style={{transform: "skew(-0.1deg)"}}
            accept='image/*'
            type="file"
            name="uploadFile"
            id="uploadFile"
            onChange={onFileChange}
          />
        </InputGroup>
        <br />
        <Button variant="dark" style={{width:'80px', transform: "skew(-0.1deg)"}} type="submit">저장</Button>
      </form>
    </div>
  )
}

export default inject("membersStore")(observer(PhotoModal));