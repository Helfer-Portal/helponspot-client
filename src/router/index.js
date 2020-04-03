import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



//*********************
//*** ORGANISATION
//*********************


import createOrganisation from "../features/app/organisation/onboarding/createOrganisation";
import dashboard from "../features/app/organisation/dashboard";
import createRequest from "../features/app/organisation/request/createRequest";
import updateAddress from "../features/app/organisation/onboarding/updateAddress";

//*********************
//*** LANDING PAGE
//*********************
import Menu from "../features/menu/index.js";
import AboutUs from "../features/landing-page/about-us/index.js";
import LandingPage from "../features/landing-page/index.js";
import RegChooseType from "../features/app/chooseUserType";

export default function RootRouter() {
  const showSettings = event => {
    event.preventDefault();
  };

  return (
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
            <Route exact path="/app/helfer/registrierung/">
              <RegChooseType/>
            </Route>
            <Route exact path="/app/organisation/registrierung/">
              <createOrganisation/>
            </Route>
            <Route path="/app/organisation/registrierung/standort/">
              <updateAddress />
            </Route>
            <Route path="/app/organisation/">
              <dashboard />
            </Route>
            <Route path="/app/organisation/request/">
              <createRequest />
            </Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
}
