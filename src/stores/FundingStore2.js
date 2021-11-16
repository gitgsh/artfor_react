import { configure, makeAutoObservable } from "mobx";
import axios from "axios";
import { axiosError } from "./common.js";
import { Route, useParams } from "react-router";
//import, 무조건 붙이면 워닝 사라지게
configure({
  enforceActions: "never",
  useProxies: "never",
});

export default class FundingStore2 {
  constructor() {
    //감시대상자? 재랜더링
    makeAutoObservable(this);
  }
  //this
  fundings = [];
  funding = {
    funding_id: "",
    user_email: "",
    user_name: "",
    work_no: "",
    funding_price: "",
    funding_date: "",
    work_title:"",
  };

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
    funding_startline: "",
  };
 
  fundingsRead2() {
    axios
      .get("http://localhost:8004/app/admin/fundinglist.do")
      .then((response) => {
        console.log("성공");
        console.log("Done fundingsRead", response);
        this.fundings = response.data;
        console.log("this.works>>", this.fundings);
      })
      .catch((error) => {
        console.log("실패");
        axiosError(error);
      });
  }

  worksRead() {
    axios
      .get("http://localhost:8004/app/")
      .then((response) => {
        console.log("성공");
        console.log("Done worksRead", response);
        this.works = response.data;
        console.log("this.works>>", this.works);
      })
      .catch((error) => {
        console.log("실패");
        axiosError(error);
      });
  }

}

export const fundingStore2 = new FundingStore2();
