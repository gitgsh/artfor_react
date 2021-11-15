import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import React, { Component } from "react";
import "./Home.css";
import NoticePrj from "./NoticePrj.js";
import OpenExpectPrj from "./OpenExpectPrj";

function HomeList(props){
    const {mainStore} = props;
    const {works, work} = mainStore;
  
    useEffect(()=>{
      mainStore.worksReadSort();
    }, [mainStore]);
    
    return(
        
<div className="main_card_home">
<NoticePrj/>
<OpenExpectPrj/>
</div>

)}

//여기서 route가 없으면 detail넘어갔을 때 새로고침 해야만 페이지가 뜸. why??? 
{/* <Route path="/detail/:no">
<div>detail 페이지 ... </div>
</Route> */}

export default inject("mainStore")(observer(HomeList));