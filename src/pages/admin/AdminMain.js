import React from "react";
import { inject, observer } from "mobx-react";
import { useEffect } from "react";
// import userTable from "./userTable";
import BasicTable from "./userTable";


function AdminMain(props){
    const { membersStore } = props;
    const { members, member } = membersStore;

    useEffect(() => {
        membersStore.membersRead();
    }, [membersStore]
    );

    return(
        <div>
            운영자 페이지
            <h3>Members</h3>
            <div>
             <center>
                {/* <userTable></userTable> */}
                <BasicTable></BasicTable>
            </center>
             </div>
         </div>
    );
}


export default inject("membersStore")(observer(AdminMain));