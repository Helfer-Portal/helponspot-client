import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//*********************
//*** Layouts
//*********************

import LanderLayout from "../features/landing-page/landerLayout";

//*********************
//*** ORGANISATION
//*********************


import CreateOrganisation from "../features/app/organisation/onboarding/CreateOrganisation";
import dashboard from "../features/app/organisation/dashboard";
import CreateRequest from "../features/app/organisation/request/CreateRequest";
import UpdateAddress from "../features/app/organisation/onboarding/UpdateAddress";

//*********************
//*** LANDING PAGE
//*********************
import Menu from "../features/menu/index.js";
import AboutUs from "../features/landing-page/about-us/index.js";
import LandingPage from "../features/landing-page/index.js";
import RegChooseType from "../features/app/chooseUserType";

export default function RootRouter() {
  /*const showSettings = event => {
    event.preventDefault();
  };*/

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
                  <RegChooseType />
                </Route>
                <Route exact path="/app/organisation/createOrganisation">
                  <CreateOrganisation/>
                </Route>
                <Route exact path="/app/organisation/createOrganisation/standort">
                  <UpdateAddress />
                </Route>
                <Route exact path="/app/organisation/request/">
                  <CreateRequest />
                </Route>
                <Route exact path="/app/organisation/dashboard/">
                  <dashboard />
                </Route>

                {/************** Helfer*/}

                <Route exact path="/app/helfer/registrierung/">
                  <RegChooseType />
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
