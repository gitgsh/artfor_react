import { configure, makeAutoObservable } from "mobx";
import axios from "axios";
import { axiosError } from "./common.js";
import { Route, useParams } from "react-router";
//import, 무조건 붙이면 워닝 사라지게
configure({
  enforceActions: "never",
  useProxies: "never",
});

export default class FundingStore {
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
    
  };


  fundingsPage() {
    axios
      .get("http://localhost:8004/app/fundingPage/")
      .then((result) => {
        console.log("fundingPage 성공");
      })
      .catch((err) => {
        console.log("fundingPage 실패함", err);
        // console.log(this.work.work_content)
      });
  };

  // fundingsPage() {
    
  //   axios
  //     .post("http://localhost:8004/app/fundingPage", this.funding)
  //     .then((result) => {
  //       console.log("fundingPage 성공");
  //       console.log("dd", this.funding);
  //     })
  //     .catch((err) => {
  //       console.log("fundingPage 실패함", err);
  //       // console.log(this.work.work_content)
  //     });
  // };
    

//   worksRead() {
//     axios
//       .get("http://localhost:8004/app/")
//       .then((response) => {
//         console.log("성공");
//         console.log("Done worksRead", response);
//         this.works = response.data;
//         console.log("this.works>>", this.works);
//       })
//       .catch((error) => {
//         console.log("실패");
//         axiosError(error);
//       });
//   }

 
//   getWork(index) {
//     axios
//     .get("http://localhost:8004/app/detail/", {
//     params:{
//       work_no : index,
//     }
//     })
//       .then((response) => {
//         console.log("DoneDetail", response); //response가 null이 뜸...
//         this.works.work_no = index;
//         console.log('index>>', index);
//         console.log('response.data>>', response.data);
//       })
//       .catch((error) => {
//         axiosError(error);
//         console.log('getWork실패!');
//       });
//   }

//   likePlus(index){
//     axios.get("http://localhost:8004/app/likePlus/", {
//       params: {
//         work_no : index,
//       }
//     })
//     .then((response)=>{
//       console.log('likePlus axious...')
//     })
//     .catch((error)=>{
//       axiosError(error);
//       console.log('likePlus실패...')
//     });
//   }

//   likeMinus(index){
//     axios.get("http://localhost:8004/app/likeMinus/", {
//       params: {
//         work_no : index,
//       }
//     })
//     .then((response)=>{
//       console.log('likeMinus axious...')
//     })
//     .catch((error)=>{
//       axiosError(error);
//       console.log('likeMinus실패...')
//     });
//   }

//   worksUpdate(index, member) {
//     axios
//       .patch("http://localhost:3000/api/v1/members/" + index, member)
//       .then((response) => {
//         console.log("Done membersUpdate", response);
//         this.membersRead();
//       })
//       .catch((error) => {
//         axiosError(error);
//       });
//   }

//   worksDelete(index) {
//     // this.members.splice(index, 1);
//     // console.log('Done membersDelete', this.members);
//     axios
//       .delete("http://localhost:3000/api/v1/members/" + index)
//       .then((response) => {
//         console.log("Done membersDelete", response);
//         this.membersRead();
//       })
//       .catch((error) => {
//         axiosError(error);
//       });
//   }
 }

export const fundingStore = new FundingStore();
