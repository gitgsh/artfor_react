import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { inject, observer } from "mobx-react";

function UserTable(props){
    const { membersStore } = props;
    const { members, member } = membersStore;

    return(
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, maxWidth: 1080}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>email</TableCell>
            <TableCell>address</TableCell>
            <TableCell>phone</TableCell>
            <TableCell align="right">Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {members.map((member, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {member.user_name}
              </TableCell>
              <TableCell>{member.user_email}</TableCell>
              <TableCell>{member.user_address}</TableCell>
              <TableCell>{member.user_phone}</TableCell>
              <TableCell align="right">{member.user_role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
}

export default inject("membersStore")(observer(UserTable));
