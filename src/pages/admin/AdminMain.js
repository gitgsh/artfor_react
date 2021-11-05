import * as React from 'react';
import { inject, observer } from "mobx-react";
import { useEffect } from "react";
import "./AdminMain.css";
import { FcConferenceCall } from "react-icons/fc";
import UserTable from './UserTable';


function AdminMain(props) {
  const { membersStore } = props;
  const { members, member } = membersStore;

  useEffect(() => {
    membersStore.membersRead();
  }, [membersStore]);

  return (
    <div className="setting-margin-abox">
      <div className="setting-abox-1" >
        <div className="myicon-abox" style={{marginTop:'23px'}}>
            <FcConferenceCall size="80" />
        </div>
        <div className="myname-abox">
          <h2>
            운영자 페이지
          </h2>
          <h4>회원 관리</h4>
        </div>
      </div>
        <div style={{clear:'both', borderBottom:'1px solid #e8e8e8'}} />

      <div className="setting-abox-1">
        <UserTable />
      </div>
      
    </div>
  );
}

export default inject("membersStore")(observer(AdminMain));
