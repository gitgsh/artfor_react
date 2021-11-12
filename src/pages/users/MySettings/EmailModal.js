import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap"

function EmailModal(props){

  const { membersStore } = props;
  const { members, member } = membersStore;

  const [email, setEmail] = useState(member.user_email);

  const onChange = (e) => {
    setEmail(e.target.value);
    console.log("handle 에서 name값은 ? ",email);
  };

    return(
      <div>
        <form>
          <InputGroup style={{width:'40%'}}>
            <FormControl
              type="email"
              placeholder="이메일 입력"
              value={email}
              onChange={onChange} />
          </InputGroup>
          <br />
          <Button variant="dark" style={{width:'120px'}}>인증메일 전송</Button>
        </form>
      </div>
    )
}
export default inject("membersStore")(observer(EmailModal));