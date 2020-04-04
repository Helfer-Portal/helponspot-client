import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//*********************
//*** Layouts
//*********************

import LanderLayout from "../features/landing-page/landerLayout";

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
        <Switch>1
          <div id="content-wrapper">

            <Route path="/app/">
              <LanderLayout>

              {/************** ORGANISATION*/}

                <Route exact path="/app/orgsanisation/">
                  <RegChooseType/>
                </Route>
                <Route exact path="/app/organisation/createOrganisation">
                  <createOrganisation/>
                </Route>
                <Route exact path="/app/organisation/createOrganisation/standort">
                  <updateAddress />
                </Route>
                <Route exact path="/app/organisation/request/">
                  <createRequest />
                </Route>
                <Route exact path="/app/organisation/dashboard/">
                  <dashboard />
                </Route>

                {/************** Helfer*/}

                <Route exact path="/app/helfer/registrierung/">
                  <RegChooseType/>
                </Route>
              </LanderLayout>
            </Route>

            <Route path="/">
              <LanderLayout>

                {/************** Landing Page*/}

                <Route exact path="/">
                  <LandingPage />
                </Route>
                <Route exact path="/ueber-uns">
                  <AboutUs />
                </Route>

              </LanderLayout>
            </Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
}
