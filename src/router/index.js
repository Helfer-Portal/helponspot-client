import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//*********************
//*** Layouts
//*********************

import Content from "../features/Layout/Frame";

//*********************
//*** ORGANISATION
//*********************

import AllRequest from "../features/AllRequests";
import { CreateOrganisation, UpdateAddress } from "../features/OnBoarding";
import Dashboard from "../features/Dashboard";
import HelperMap from "../features/HelperMap";
import OrgProfileView from "../features/ProfileOrg";
import UserProfileView from "../features/ProfileUser";
import RequestDetails from "../features/RequestDetails";

import RequestFormProvider from "../context/RequestFormStore";
import ReqProvider from "../context/MockRequests";

import ProfileView from "../features/ProfileView";

//*********************
//*** LANDING PAGE
//*********************

import ChooseUserType from "../features/ChooseUserType";

import CreateRequest from "../features/CreateRequest/CreateRequest";
import HelperSkills from "../features/OnBoarding/Helper/HelperSkills";
import HelperName from "../features/OnBoarding/Helper/HelperName";
import HelperStandort from "../features/OnBoarding/Helper/HelperStandort";
import AuthorizationContextProvider from "../context/AuthorizationStore";
import CreateHelperProvider from "../context/LocationContext";

export default function RootRouter() {
  /*const showSettings = event => {
    event.preventDefault();
  };*/

  return (
    <ReqProvider>
      <RequestFormProvider>
        <AuthorizationContextProvider>
          <Router>
            <Route exact path="/">
              <Redirect
                to={{
                  pathname: "/app",
                }}
              />
            </Route>

            <Switch>
              <Content>
                <Route path="/app">
                  <Route path="/app/:role/">
                    <Route path="/app/:role/dashboard">
                      <Dashboard />
                    </Route>

                    <Route exact path="/app/:role/map/">
                      <HelperMap />
                    </Route>

                    <Route
                      exact
                      path="/app/:role/profile"
                      component={ProfileView}
                    />
                  </Route>

                  {/************** ORGANISATION*/}

                  <Route path="/app/organisation">
                    <Route exact path="/app/organisation/chooseType">
                      <ChooseUserType />
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
                      <AllRequest />
                    </Route>

                    <Route exact path="/app/organisation/request/create">
                      <CreateRequest />
                    </Route>

                    <Route
                      exact
                      path="/app/organisation/request/details/:reqId"
                    >
                      <RequestDetails />
                    </Route>

                    <Route
                      exact
                      path="/app/organisation/user/:id"
                      component={UserProfileView}
                    />
                  </Route>

                  {/************** Helfer*/}
                  <CreateHelperProvider>
                    <Route path="/app/helfer/">
                      <Route exact path="/app/helfer/registrierung/">
                        <ChooseUserType />
                      </Route>
                      <Route exact path="/app/helfer/createHelper/skills">
                        <HelperSkills />
                      </Route>
                      <Route exact path="/app/helfer/createHelper/name">
                        <HelperName />
                      </Route>
                      <Route exact path="/app/helfer/createHelper/standort">
                        <HelperStandort />
                      </Route>
                    </Route>
                  </CreateHelperProvider>
                </Route>

                {/* <Route>
              <Redirect
                to={{
                  pathname: "/home"
                }}
              />
            </Route> */}
              </Content>
            </Switch>
          </Router>
        </AuthorizationContextProvider>
      </RequestFormProvider>
    </ReqProvider>
  );
}
