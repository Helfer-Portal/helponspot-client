import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Menu from "../features/menu/index.js";
import AboutUs from "../features/about-us/index.js";

import LandingPage from "../features/landing-page/index.js";
import OrgRegister1 from "../features/org-register/register1.jsx";
import OrgRegister2 from "../features/org-register/register2.jsx";
import RegChooseType from "../features/org-register/reg-choose-org-help";
import NewAnzeige from "../features/org-register/newAnzeige.jsx";
import ShowNews from "../features/show-news/index.js";
import ReqProvider from "../context/mock-requests.jsx";

export default function RootRouter() {
  const showSettings = event => {
    event.preventDefault();
  };

  return (
    <ReqProvider>
      <Router>
        <div id="outer-container">
          <Menu />
          <Switch>
            <div id="content-wrapper">
              <Route exact path="/">
                <LandingPage />
              </Route>
              <Route path="/ueber-uns">
                <AboutUs />
              </Route>

              <Route exact path="/org-register1">
                <RegChooseType />
              </Route>
              <Route path="/org-register2">
                <OrgRegister1 />
              </Route>
              <Route path="/org-register3">
                <OrgRegister2 />
              </Route>
              <Route path="/org-register4">
                <NewAnzeige />
              </Route>
              <Route path="/all-news">
                <ShowNews />
              </Route>
            </div>
          </Switch>
        </div>
      </Router>
    </ReqProvider>
  );
}
