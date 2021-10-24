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
import InputPage from "./pages/write/InputPage";
import InputDetail from "./pages/write/InputDetail";
import Join from "./pages/login/Join";
import Detail from "./pages/detail/Detail";
import Settings from "./pages/users/Settings";

function App() {
  // Guide 게시판 검색관련
  const [searchKeyword, setSerchKeyword] = useState("");
  const [keyField, setkeyField] = useState("");

  // Guide 게시판 데이터 초기화
  let [data, setData] = useState([""]);

  return (
    <div>
      <div className="App">
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/members/list" component={Members} />
          <Route exact path="/guide/list" component={List}>
            <List data={data} setData={setData} />
          </Route>{" "}
          <Route exact={true} path="/login" component={Login} />
          <Route exact={true} path="/write/input" component={InputPage}>
            <InputPage />
          </Route>
          <Route exact={true} path="/write/detail" component={InputDetail}>
            <InputDetail data={data} setData={setData} />
          </Route>
          <Route exact={true} path="/detail" component={Detail}>
            <Detail />
          </Route>
          <Route exact={true} path="/login" component={Login} />
          <Route exact={true} path="/join" component={Join} />
          <Route exact={true} path="/users/settings" component={Settings} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
