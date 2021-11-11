import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { membersStore } from "./stores/MembersStore.js";
import { mainStore } from "./stores/MainStore.js";
import reportWebVitals from "./reportWebVitals";
import { communityStore } from "./stores/CommunityStore";
import {fundingStore} from "./stores/FundingStore";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider
        membersStore={membersStore}
        mainStore={mainStore}
        communityStore={communityStore}
        fundingStore={fundingStore}
      >
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
