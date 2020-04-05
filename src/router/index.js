import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

//*********************
//*** Layouts
//*********************

import LanderLayout from "../features/landing-page/landerLayout";
import MobileFrame from "../features/landing-page/MobileFrame";

//*********************
//*** ORGANISATION
//*********************

import CreateOrganisation from "../features/app/organisation/onboarding/CreateOrganisation";
import Dashboard from "../features/app/organisation/Dashboard";
import CreateRequest from "../features/app/organisation/request/CreateRequest";
import UpdateAddress from "../features/app/organisation/onboarding/UpdateAddress";
import HelperMap from "../features/app/organisation/HelperMap";
import ProfileView from "../features/app/organisation/profile";

//*********************
//*** LANDING PAGE
//*********************

import AboutUs from "../features/landing-page/about-us/index.js";
import LandingPage from "../features/landing-page/index.js";
import RegChooseType from "../features/app/ChooseUserType";
import ReqProvider from "../context/mock-requests";

export default function RootRouter() {
  /*const showSettings = event => {
    event.preventDefault();
  };*/

  return (
    <ReqProvider>
      <Router>
        {/* <Route exact path="/">
          <Redirect
            to={{
              pathname: "/home"
            }}
          />
        </Route> */}

        <Switch>
          <div id="content-wrapper" className={"min-h-screen"}>
            <Route path="/app">
              <LanderLayout>
                <MobileFrame>
                  {/************** ORGANISATION*/}

                  <Route path="/app/organisation">
                    <Route exact path="/app/organisation/chooseType">
                      <RegChooseType />
                    </Route>
                    <Route exact path="/app/organisation/createOrganisation">
                      <CreateOrganisation />
                    </Route>
                    <Route
                      exact
                      path="/app/organisation/createOrganisation/standort/"
                    >
                      <UpdateAddress />
                    </Route>
                    <Route exact path="/app/organisation/request/">
                      <CreateRequest />
                    </Route>
                    <Route exact path="/app/organisation/dashboard/">
                      <Dashboard />
                    </Route>

                    <Route exact path="/app/organisation/map/">
                      <HelperMap />
                    </Route>

                    <Route
                      exact
                      path="/app/organisation/profile"
                      component={ProfileView}
                    />
                  </Route>

                  {/************** Helfer*/}

                  <Route path="/helfer/">
                    <Route exact path="/app/helfer/registrierung/">
                      <RegChooseType />
                    </Route>
                  </Route>
                </MobileFrame>
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

            {/* <Route>
              <Redirect
                to={{
                  pathname: "/home"
                }}
              />
            </Route> */}
          </div>
        </Switch>
      </Router>
    </ReqProvider>
  );
}
