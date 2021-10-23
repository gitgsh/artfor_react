import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { Switch, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Members from "./pages/members/Members";
import Users from "./pages/users/Users";
import List from "./pages/guide/List";
import InputPage from "./pages/write/InputPage";
import InputDetail from "./pages/write/InputDetail";
import Join from "./pages/login/Join";

function App() {
  // QNA게시판 검색관련22
  const [searchKeyword, setSerchKeyword] = useState("");
  const [keyField, seKkeyField] = useState("");

  // QNA게시판 데이터 초기화
  let [data, setData] = useState([""]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/members/list" component={Members} />
        <Route path="/users" component={Users} />
        {/* <Route exact={true} path="/users/:index" component={Users} /> */}
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
        <Route exact={true} path="/login" component={Login} />
        <Route exact={true} path="/join" component={Join} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
