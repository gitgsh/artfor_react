import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ForgotPW from "./pages/login/ForgotPW";
import { Switch, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Members from "./pages/members/Members";
import InputPage from "./pages/project/input/InputPage";
import InputDetail from "./pages/project/input/InputDetail";
import Join from "./pages/login/Join";
import Detail from "./pages/detail/Detail";
import MyProject from "./pages/users/MyProject";
import Main from "./pages/Main/Main";
import Main2 from "./pages/project/Main";
import Check from "./pages/project/Check";
import FundingPlan from "./pages/project/FundingPlan";
import ProjectPlan from "./pages/project/ProjectPlan";
import G_List_practice from "./pages/guide/G_List_practice";
import G_Detail from "./pages/guide/G_Detail";
import G_Input from "./pages/guide/G_Input";
import G_List from "./pages/guide/G_List";
import G_Update from "./pages/guide/G_Update";
import ProjectUpload from "./pages/project/ProjectUpload";
import MySettings from "./pages/users/MySettings";
import Donation from './pages/detail/donation/Donation';
import AdminMain from "./pages/admin/AdminMain";
<<<<<<< Updated upstream
import ProjectUploadMain from "./pages/project/ProjectUploadMain";

=======
import ManageArtwork from "./pages/admin/ManageArtwork";
>>>>>>> Stashed changes

function App() {
  // Guide 게시판 검색관련2
  const [searchKeyword, setSerchKeyword] = useState("");
  const [keyField, setkeyField] = useState("");

  // Guide 게시판 데이터 초기화
  let [data, setData] = useState([""]);
  let [header, setHeader] = useState(true);

  return (
    
    <div>
      {console.log(window.location.pathname)}
      <div className="App">
        {(window.location.pathname ==
        "/project/plan/projectupload")? (<></>) : (<Header />)}

        <Switch>
          {/* MAIN & DETAIL */}
          <Route exact={true} path="/" component={Main} />
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/detail" component={Detail}>
            <Detail /></Route>
          <Route exact={true} path="/donation" component={Donation}/>
          <Route exact={true} path="/members/list" component={Members} />

          {/* 
          <Route exact={true} path="/login" component={Login} /> */}
          {/* EDITOR */}
          <Route exact={true} path="/write/input" component={InputPage}>
            <InputPage />
          </Route>
          <Route exact={true} path="/write/detail" component={InputDetail}>
            <InputDetail data={data} setData={setData} />
          </Route>
          {/* LOGIN */}
          <Route exact={true} path="/login" component={Login} />
          <Route exact={true} path="/join" component={Join} />
          <Route exact={true} path="/forgotPW" component={ForgotPW} />
          <Route exact={true} path="/users/myproject" component={MyProject} />
          <Route exact={true} path="/users/mysettings" component={MySettings} />
          <Route exact={true} path="/admin/adminmain" component={AdminMain} />
          <Route exact={true} path="/admin/manageArtwork" component={ManageArtwork} />
          {/* PROJECT */}
          <Route exact={true} path="/project/main" component={Main2} />
          <Route exact={true} path="/project/check" component={Check} />
          <Route
            exact={true}
            path="/project/plan/projectupload"
            component={ProjectUpload}
          />
          <Route
            exact={true}
            path="/project/plan/funding"
            component={FundingPlan}
          />
          <Route
            exact={true}
            path="/project/plan/project"
            component={ProjectPlan}
          />
          <Route
            exact={true}
            path="/project/plan/projectuploadmain"
            component={ProjectUploadMain}
          />
          {/* GUIDE */}
          <Route exact path="/guide/G_List_practice" component={G_List_practice} />
          <Route path="/guide/G_Detail/:seq" component={G_Detail}>
            <G_Detail data={data} setData={setData} />
          </Route>
          <Route exact path="/guide/G_Input" component={G_Input}>
            <G_Input data={data} setData={setData} />
          </Route>
          <Route path="/guide/G_Update/:seq" component={G_Update}>
            <G_Update data={data} setData={setData} />
          </Route>
          <Route exact path="/guide/G_Detail" component={G_Detail} />
          <Route exact path="/guide/G_Input" component={G_Input} />
          <Route exact path="/guide/G_List" component={G_List}>
            <G_List data={data} setData={setData} />
          </Route>{" "}
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
