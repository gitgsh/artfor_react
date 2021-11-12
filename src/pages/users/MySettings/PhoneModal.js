import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

function PhoneModal(props){

  const { membersStore } = props;
  const { members, member } = membersStore;

  const [phone, setPhone] = useState(member.user_phone);

  const onChange = (e) => {
    setPhone(e.target.value);
    console.log("handle 에서 name값은 ? ",phone);
  };

    return(
      <div>
        <form>
          <InputGroup style={{width:'40%'}}>
            <FormControl
              type="text"
              placeholder="연락처 입력"
              value={phone}
              onChange={onChange} />
          </InputGroup>
          <br />
          <Button variant="dark" style={{width:'120px'}}>인증번호 전송</Button>
        </form>
      </div>
    )
}
export default inject("membersStore")(observer(PhoneModal));