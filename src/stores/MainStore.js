import { configure, makeAutoObservable } from "mobx";
import axios from "axios";
import { axiosError } from "./common.js";
import { Route, useParams } from "react-router";
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
    funding_startline: "",
  };



  // worksCreate() {
    
  //   axios
  //     .post("http://localhost:8004/app/input.do", this.work)
  //     .then((result) => {
  //       console.log("성공");
  //       console.log("dd", this.work);
  //     })
  //     .catch((err) => {
  //       console.log("실패함", err);
  //     });
  // };
    

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
        console.log("this.works>>", this.works);
      })
      .catch((error) => {
        console.log("실패");
        axiosError(error);
      });
  }

 
  getWork(index) {
    axios
    .get("http://localhost:8004/app/detail/", {
    params:{
      work_no : index,
    }
    })
      .then((response) => {
        console.log("DoneDetail", response); //response가 null이 뜸...
        this.works.work_no = index;
        console.log('index>>', index);
        console.log('response.data>>', response.data);
      })
      .catch((error) => {
        axiosError(error);
        console.log('getWork실패!');
      });
  }

  likePlus(index){
    axios.get("http://localhost:8004/app/likePlus/", {
      params: {
        work_no : index,
      }
    })
    .then((response)=>{
      console.log('likePlus axious...')
      console.log('response.data>>>>>', response.data)
    })
    .catch((error)=>{
      axiosError(error);
      console.log('likePlus실패...')
    });
  }

  likeMinus(index){
    axios.get("http://localhost:8004/app/likeMinus/", {
      params: {
        work_no : index,
      }
    })
    .then((response)=>{
      console.log('likeMinus axious...')
    })
    .catch((error)=>{
      axiosError(error);
      console.log('likeMinus실패...')
    });
  }
  
  
  // likePlusMinusArtWork(index){
  //   const data = {work_no: localStorage.getItem('work_no'), user_email: localStorage.getItem('user_email')}
  //   console.log("likePlusMinusArtWork 데이터>>", data)
  //   axios.post("http://localhost:8004/app/likePlusMinusArtWork/", data)
  //   .then((response)=>{
  //     console.log('likePlusMinusArtWork axious...')
  //   })
  //   .catch((error)=>{
  //     axiosError(error);
  //     console.log('likePlusMinusArtWork 실패...')
  //   });
  // }



  


  //****이렇게 하면 왜 이클립스 Mybatis 단에서 user_email을 못받지?? */
  // likePlusUser(index){

  //   axios.post("http://localhost:8004/app/likePlusUser/", {
  //     params: {
  //       work_no : index,
  //       user_email: localStorage.getItem('user_email'),
  //     }
  //   })
  //   .then((response)=>{
  //     console.log('likePlusUser axious Success...')
  //     console.log('user_email>>',localStorage.getItem('user_email') )
  //   })
  //   .catch((error)=>{
  //     axiosError(error);
  //     console.log('likePlusUser Fail...');
      
  //   });
  // }

  likePlusMinusUser(){
    const data = {work_no: localStorage.getItem('work_no'), user_email: localStorage.getItem('user_email')}
    console.log("likePlusMinusUser 데이터>>", data)
    axios
    .post("http://localhost:8004/app/likePlusMinusUser/", data )
    .then((response)=>{
      console.log('likePlusMinusUser axious Success...')
      console.log('response>>', response);
      //localStorage.setItem("like_no", response.data.like_no);
    
    })
    .catch((error)=>{
      axiosError(error);
      console.log('likePlusMinusUser Fail...');
      
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
