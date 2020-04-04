import React from "react";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

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
  /*const showSettings = event => {
    event.preventDefault();
  };*/

  return (
    <Router>

      <Route exact path="/">
        <Redirect
            to={{
              pathname: "/home"
            }}
        />
      </Route>

      <div id="outer-container">
        <Menu />
        <Switch>
          <div id="content-wrapper">

            <Route path="/app">
              <LanderLayout>

              {/************** ORGANISATION*/}

                <Route path="/app/organisation">
                  <Route exact path="/app/organisation/chooseType">
                    <RegChooseType />
                  </Route>
                  <Route exact path="/app/organisation/createOrganisation">
                    <createOrganisation />
                  </Route>
                  <Route exact path="/app/organisation/createOrganisation/standort/">
                    <updateAddress />
                  </Route>
                  <Route exact path="/app/organisation/request/">
                    <createRequest />
                  </Route>
                  <Route exact path="/app/organisation/dashboard/">
                    <dashboard />
                  </Route>
                </Route>

                {/************** Helfer*/}

                <Route path="/helfer/">
                  <Route exact path="/app/helfer/registrierung/">
                    <RegChooseType />
                  </Route>
                </Route>



              </LanderLayout>
            </Route>



            <Route path="/home">
              <LanderLayout>

                {/************** Landing Page*/}

                <Route exact path="/home">
                  <LandingPage />
                </Route>
                <Route exact path="/home/ueber-uns">
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
