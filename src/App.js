import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { Switch, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Members from "./pages/members/Members";
import List from "./pages/guide/List";
import InputPage from "./pages/project/input/InputPage";
import InputDetail from "./pages/project/input/InputDetail";
import Join from "./pages/login/Join";
import Detail from "./pages/detail/Detail";
import Settings from "./pages/users/Settings";
import Main from "./pages/Main/Main";
import Main2 from "./pages/project/Main";
import Check from "./pages/project/Check";
import FundingPlan from "./pages/project/FundingPlan";
import ProjectPlan from "./pages/project/ProjectPlan";
import G_List_practice from "./pages/guide/G_List_practice";
import G_Detail from "./pages/guide/G_Detail";
import G_Input from "./pages/guide/G_Input";

function App() {
  // Guide 게시판 검색관련2
  const [searchKeyword, setSerchKeyword] = useState("");
  const [keyField, setkeyField] = useState("");

  // Guide 게시판 데이터 초기화
  let [data, setData] = useState([""]);

  return (
    <div>
      <div className="App">
        <Header />
        <Switch>
          {/* MAIN & DETAIL */}
          <Route exact={true} path="/" component={Main} />
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/detail" component={Detail}>
            <Detail />
          </Route>
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
          <Route exact={true} path="/users/settings" component={Settings} />
          {/* PROJECT */}
          <Route exact={true} path="/project/main" component={Main2} />
          <Route exact={true} path="/project/check" component={Check} />
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
          <Route exact={true} path="/project/plan" component={Plan} />
          {/* GUIDE */}
          <Route
            exact
            path="/guide/G_List_practice"
            component={G_List_practice}
          />
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
