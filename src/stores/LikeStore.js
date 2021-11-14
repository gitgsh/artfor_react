import { configure, makeAutoObservable } from "mobx";
import axios from "axios";
import { axiosError } from "./common.js";
import { Route, useParams } from "react-router";
//import, 무조건 붙이면 워닝 사라지게
configure({
  enforceActions: "never",
  useProxies: "never",
});

export default class LikeStore {
  constructor() {
    //감시대상자? 재랜더링
    makeAutoObservable(this);
  }
  //this
  likes = [];
  like = {
    like_no: "",
    user_email: "",
    work_no: "",
    like_check: "",
  };

  likesRead() {
    axios
      .get("http://localhost:8004/app/likelist.do")
      .then((response) => {
        console.log("성공");
        console.log("Done likesRead", response);
        this.likes = response.data;
        console.log("this.likes>>", this.likes);
      })
      .catch((error) => {
        console.log("실패");
        axiosError(error);
      });
  }
}

export const likeStore = new LikeStore();
