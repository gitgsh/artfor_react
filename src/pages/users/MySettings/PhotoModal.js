import { Button, FormControl, InputGroup } from "react-bootstrap";
import React from 'react';
import axios from "axios";
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
      props.updatephoto(result.data.user_photo);
      console.log("props.photo", props.photo);
      props.setPhotoModal(false);
      alert("프로필 사진 변경 성공!")
    })
    .catch((err)=>{
      console.log('fileupload 실패', err);
      props.setPhotoModal(false);
    })
  }
  return(
    <div>
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