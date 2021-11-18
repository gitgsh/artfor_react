import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "react-bootstrap";
import { inject, observer } from "mobx-react";
import { axiosError } from "../../stores/common";
import axios from "axios";
import { Link } from 'react-router-dom';

function UserTable(props) {
  const { membersStore } = props;
  const { members, member } = membersStore;

  function  deleteUser(user_idx, user_name){
    let data = {user_idx : user_idx,};
    console.log("승인할 데이터는? " ,data);
    if(window.confirm(user_name + "님을 정말 삭제하시겠습니까?")){
      axios
        .post("http://localhost:8004/app/admin/deleteUser", data)
        .then((response) => {
          console.log("Done changeWorkStatus", response);
          alert("삭제되었습니다.");
          membersStore.membersRead();
        })
        .catch((error) => {
          axiosError(error);
        });
    }
    else{alert("취소되었습니다.");}
  } 

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, maxWidth: 1080 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>index</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>email</TableCell>
            <TableCell>address</TableCell>
            <TableCell>phone</TableCell>
            <TableCell>Role</TableCell>
            <TableCell> 수정 </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {members.map((member, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {member.user_idx }
              </TableCell>
              <TableCell>{member.user_name}</TableCell>
              <TableCell>{member.user_email}</TableCell>
              <TableCell>{member.user_address}</TableCell>
              <TableCell>{member.user_phone}</TableCell>
              <TableCell>{member.user_role}</TableCell>
              <TableCell > 
                <Button variant="outline-secondary" size="sm" style={{marginRight: '10px',  borderRadius:"30px"}} 
                onClick={ ()=> { deleteUser(member.user_idx, member.user_name)}} >
                            회원 삭제
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default inject("membersStore")(observer(UserTable));
