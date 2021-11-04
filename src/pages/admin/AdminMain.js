import React from "react";
import { inject, observer } from "mobx-react";
import { useEffect } from "react";
import BasicTable from "./UserTable";
//test

function AdminMain(props) {
  const { membersStore } = props;
  const { members, member } = membersStore;

  useEffect(() => {
    membersStore.membersRead();
  }, [membersStore]);

  return (
    <div style={{ textAlign: "left", margin: "auto", padding: "80px" }}>
      <p>운영자 페이지</p>
      <h3>Members</h3>
      <hr />
      <div>
        <userTable></userTable>
        <BasicTable></BasicTable>
      </div>
    </div>
  );
}

export default inject("membersStore")(observer(AdminMain));
