import { configure, makeAutoObservable } from "mobx";
import axios from "axios";
import { axiosError } from "./common.js";
//import, 무조건 붙이면 워닝 사라지게
configure({
  enforceActions: "never",
  useProxies: "never",
});

export default class MainStore {
  constructor() {
    //감시대상자? 재랜더링
    makeAutoObservable(this);
  }
  //this
  works = [];
  work = {
    work_no: "",
    work_title: "",
    work_img: "",
    work_content: "",
    artist_id: "",
    funding_like: "",
    funding_deadline: "",
    funding_goal: "",
    funding_now: "",
    supporters: "",
    artist_name: "",
    funding_today: "",
    funding_status: "",
  };

  worksCreate() {
    // this.members.push({
    //   name: this.member.name,
    //   age: this.member.age
    // });
    // console.log('Done membersCreate', this.members);
    axios
      .post("http://localhost:3100/api/v1/members", this.member)
      .then((response) => {
        console.log("Done membersCreate", response);
        this.membersRead();
      })
      .catch((error) => {
        axiosError(error);
      });
  }

  worksRead() {
    // this.members = [{
    //   name: '홍길동',
    //   age: 20
    // }, {
    //   name: '춘향이',
    //   age: 16
    // }];
    // console.log('Done membersRead', this.members);
    axios
      .get("http://localhost:8004/app/")
      .then((response) => {
        console.log("성공");
        console.log("Done worksRead", response);
        this.works = response.data;
        console.log("Done worksRead", this.works);
      })
      .catch((error) => {
        console.log("실패");
        axiosError(error);
      });
  }

  worksUpdate(index, member) {
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

  worksDelete(index) {
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

export const mainStore = new MainStore();
