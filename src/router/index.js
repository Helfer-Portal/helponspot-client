import React from "react";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

//*********************
//*** Layouts
//*********************

import LanderLayout from "../features/landing-page/landerLayout";

//*********************
//*** ORGANISATION
//*********************

import CreateOrganisation from "../features/app/organisation/onboarding/CreateOrganisation";
import Dashboard from "../features/app/organisation/Dashboard";
import CreateRequest from "../features/app/organisation/request/CreateRequest";
import UpdateAddress from "../features/app/organisation/onboarding/UpdateAddress";

//*********************
//*** LANDING PAGE
//*********************
import Menu from "../features/menu/index.js";
import AboutUs from "../features/landing-page/about-us/index.js";
import LandingPage from "../features/landing-page/index.js";
import RegChooseType from "../features/app/ChooseUserType";

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
                    <CreateOrganisation />
                  </Route>
                  <Route exact path="/app/organisation/createOrganisation/standort/">
                    <UpdateAddress />
                  </Route>
                  <Route exact path="/app/organisation/request/">
                    <CreateRequest />
                  </Route>
                  <Route exact path="/app/organisation/dashboard/">
                    <Dashboard />
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
