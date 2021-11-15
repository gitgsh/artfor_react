import axios from "axios";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router";

function PasswordUpdateModal(props) {
    const history = useHistory();

    const { membersStore } = props;
    const { members, member } = membersStore;

    const [oneCon, setOneCon] = useState(1);
    const [twoCon, setTwoCon] = useState(1);

    const [modify_pw1, setModify_pw1] = useState('');
    const [modify_pw2, setModify_pw2] = useState('');

    const onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === 'modify_pw1') {
            setModify_pw1(value);
        } else if (name === 'modify_pw2') {
            setModify_pw2(value);
        }
    };

    const onClick = (e) => {
        e.preventDefault();
        
        if (modify_pw1 === "") {
            setOneCon(2);
            return false;
        } else if (modify_pw1.length < 4 || modify_pw1.length > 14) {
            setOneCon(3);
            return false;
        } else if (modify_pw1.length>3 && modify_pw1.length < 15){
            setOneCon(5);
            
        }
        
        if(modify_pw2 === "") {
            setTwoCon(2);
            return false;
        } else if(modify_pw1 !== modify_pw2) {
            setTwoCon(4);
            return false;
        } else if(modify_pw1 === modify_pw2) {
            let data = {
                user_email : member.user_email,
                user_pw : modify_pw2,
            };
            console.log("비밀번호 변경했을 때 data는?, ", data);
            axios.post("http://localhost:8004/app/user/pwupdate", data)
            .then((response)=>{
                console.log("서버와 통신 성공", response);
                setTwoCon(1);
                alert("비밀번호 변경 성공! 다시 로그인 해주세요🥰");
                localStorage.removeItem('token');
                history.push('/login');
            })
            .catch((error)=>{
                console.log("error임", error);
            })
        }
      };

    return(
        <div>
            <p style={{fontSize:'15px', transform: "skew(-0.1deg)"}}>변경할 비밀번호</p>
            <form>
                <InputGroup style={{width:'40%'}}>
                    <FormControl
                    style={{fontFamily:'Consolas', marginTop:'-5px', transform: "skew(-0.1deg)"}}
                    type="password"
                    name="modify_pw1"
                    onChange={onChange}
                    placeholder="변경할 비밀번호"
                    />
                </InputGroup>
                {oneCon === 5
                && <></>
                }
                {oneCon === 2
                && <p style={{ marginTop:'10px', color:'red', fontSize:'13px', transform: "skew(-0.1deg)" }}>비밀번호를 입력해주세요</p>
                }
                {oneCon === 3
                && <p style={{ marginTop:'10px', color:'red', fontSize:'13px', transform: "skew(-0.1deg)" }}>비밀번호는 4자~14자 사이로 입력해주세요.</p>
                }
                <InputGroup style={{width:'40%'}}>
                    <FormControl
                    style={{fontFamily:'Consolas', marginTop:'10px', transform: "skew(-0.1deg)"}}
                    type="password"
                    name="modify_pw2"
                    onChange={onChange}
                    placeholder="변경할 비밀번호 확인"
                    />
                </InputGroup>
                {twoCon === 1
                && null
                }
                {twoCon === 2
                && <p style={{ marginTop:'10px', color:'red', fontSize:'13px', transform: "skew(-0.1deg)" }}>비밀번호를 입력해주세요</p>
                }
                {twoCon === 4
                && <p style={{ marginTop:'10px', color:'red', fontSize:'13px', transform: "skew(-0.1deg)" }}>비밀번호가 같지 않습니다.</p>
                }
                <br />
                <Button variant="dark" style={{width:'80px', transform: "skew(-0.1deg)"}} type="submit" onClick={onClick}>저장</Button>
          </form>
        </div>
    )
}
export default inject("membersStore")(observer(PasswordUpdateModal));