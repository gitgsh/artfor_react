import axios from "axios";
import { inject, observer } from "mobx-react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import { useState } from "react";

function NameModal(props){

    //membersStore 구조분해
    const { membersStore } = props;
    const { members, member } = membersStore;

    //form e
    const { formState: { errors } } = useForm();

    const [name, setName] = useState(member.user_name);

    const sendValue = () => {
        props.textValue(false);
    }

    const onChange = (e) => {
      setName(e.target.value);
      console.log("handle 에서 name값은 ? ",name);
    };

    const onClick = (e) => {
      e.preventDefault();
      member.user_name = name;
      console.log("member는? ", member);
      axios.post("http://localhost:8004/app/user/nameupdate", member)
      .then((response)=>{
          console.log("서버와 통신 성공", response);
          alert("이름 변경 성공!");
          sendValue(); 
          console.log("과연 이름은?");
          console.log(name);
          localStorage.setItem('name',name);
          const user_n = window.localStorage.getItem('name');
          console.log("user_n : ",user_n);
      })
      .catch((error)=>{
          console.log("error임", error);
      })
    };

    return(
      <div>
        <form>
          <InputGroup style={{width:'40%'}}>
            <FormControl
              type="text"
              name="user_name"
              placeholder="이름 입력"
              value={name}
              onChange={onChange}/>
          </InputGroup>
          <br />
          <Button variant="dark" style={{width:'80px'}} type="submit" onClick={onClick}>저장</Button>
        </form>
      </div>
    )
  }
  const Warning = styled.div`
    color : red ;
    font-size : 13px;
    `;
  export default inject("membersStore")(observer(NameModal));