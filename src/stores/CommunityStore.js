import { configure, makeAutoObservable } from "mobx";
import axios from "axios";
import { axiosError } from "./common.js";
import { Route, useParams } from "react-router";
//import, 무조건 붙이면 워닝 사라지게
configure({
  enforceActions: "never",
  useProxies: "never",
});

export default class CommunityStore {
  constructor() {
    //감시대상자? 재랜더링
    makeAutoObservable(this);
  }
  //this
  cstores = [];
  cstore = {
    c_no: "",
    work_title: "",
    work_no: "",
    c_writer: "",
    c_content: "",
    c_day: "",
    user_photo: "",
  };

  cstoresCreate() {
    axios
      .post("http://localhost:8004/app/replyinput.do", this.cstore)
      .then((result) => {
        console.log("성공");
        console.log("dd", this.cstore);
      })
      .catch((err) => {
        console.log("실패함", err);
        // console.log(this.work.work_content)
      });
  }

  cstoresRead() {
    //list
    axios
      .get("http://localhost:8004/app/communityboard.do")
      .then((response) => {
        console.log("성공");
        console.log("Done cstoresRead", response);
        console.log("뭐지", response.data);
        this.cstores = response.data;
        console.log("this.cstores>>", this.cstores);
      })
      .catch((error) => {
        console.log("실패");
        axiosError(error);
      });
  }

  getWork(index) {
    axios
      .get("http://localhost:8004/app/detail/", {
        params: {
          work_no: index,
        },
      })
      .then((response) => {
        console.log("DoneDetail", response); //response가 null이 뜸...
        this.works.work_no = index;
        console.log("index>>", index);
        console.log("response.data>>", response.data);
      })
      .catch((error) => {
        axiosError(error);
        console.log("getWork실패!");
      });
  }

  cstoresUpdate(index, member) {
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

  cstoresDelete(index) {
    // this.members.splice(index, 1);
    // console.log('Done membersDelete', this.members);
    axios
      .delete("http://localhost:8004/app/replydelete.do", index)
      .then((response) => {
        console.log("Done cstoresDelete", response);
        console.log(response);
        this.cstoresRead();
      })
      .catch((error) => {
        axiosError(error);
      });
  }
}

export const communityStore = new CommunityStore();