import { configure, makeAutoObservable } from "mobx";
import axios from "axios";
import { axiosError } from "./common.js";
//import, 무조건 붙이면 워닝 사라지게
configure({
  enforceActions: "never",
  useProxies: "never",
});

export default class MembersStore {
  constructor() {
    //감시대상자? 재랜더링
    makeAutoObservable(this);
  }
  //this
  members = [];
  member = {
    user_name: "",
    user_email: "",
    user_address: "",
    user_phone :"",
    user_role : "",
    user_photo : "",
  };

  membersCreate() {
    // this.members.push({
    //   name: this.member.name,
    //   age: this.member.age
    // });
    // console.log('Done membersCreate', this.members);
    axios
      .post("http://localhost:3000/api/v1/members", this.member)
      .then((response) => {
        console.log("Done membersCreate", response);
        this.membersRead();
      })
      .catch((error) => {
        axiosError(error);
      });
  }

  membersRead() {
    // this.members = [{
    //   name: '홍길동',
    //   age: 20
    // }, {
    //   name: '춘향이',
    //   age: 16
    // }];
    // console.log('Done membersRead', this.members);
    axios
      .get("http://localhost:8004/app/user/userList.do")
      .then((response) => {
        console.log("Done membersRead", response);
        // this.members = response.data.members;
        this.members = response.data;
      })
      .catch((error) => {
        axiosError(error);
      });
  }

  membersUpdate(index, member) {
    axios
      .patch("http://localhost:3000/api/v1/members/" + index, member)
      .then((response) => {
        console.log("Done membersUpdate", response);
        this.membersRead();
      })
      .catch((error) => {
        axiosError(error);
      });
  }

  membersDelete(index) {
    // this.members.splice(index, 1);
    // console.log('Done membersDelete', this.members);
    axios
      .delete("http://localhost:3000/api/v1/members/" + index)
      .then((response) => {
        console.log("Done membersDelete", response);
        this.membersRead();
      })
      .catch((error) => {
        axiosError(error);
      });
  }
}

export const membersStore = new MembersStore();
