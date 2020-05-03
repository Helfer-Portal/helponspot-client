import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//*********************
//*** Layouts
//*********************

import LanderLayout from "../features/LandingPage/landerLayout";
import MobileFrame from "../features/LandingPage/MobileFrame";

import RequestsView from "../features/RequestsView";

//*********************
//*** ORGANISATION
//*********************

import { CreateOrganisation, UpdateAddress } from "../features/OnBoarding";
import Dashboard from "../features/Dashboard/Dashboard";
import UserDashboard from "../features/Dashboard/UserDashboard";
import HelperMap from "../features/HelperMap";
import OrgProfileView from "../features/ProfileOrg";
import UserProfileView from "../features/ProfileUser";
import RequestDetails from "../features/RequestViews";

import RequestFormProvider from "../context/RequestFormStore";
import ReqProvider from "../context/MockRequests";

import ProfileView from "../features/ProfileView";

//*********************
//*** LANDING PAGE
//*********************

import AboutUs from "../features/LandingPage/about-us/index.js";
import LandingPage from "../features/LandingPage";
import ChooseUserType from "../features/ChooseUserType";

import CreateRequest from "../features/CreateRequest/CreateRequest";
import HelperSkills from "../features/OnBoarding/Helper/HelperSkills";
import HelperName from "../features/OnBoarding/Helper/HelperName";
import HelperStandort from "../features/OnBoarding/Helper/HelperStandort";
import AuthorizationContextProvider from "../context/AuthorizationStore";
import CreateHelperProvider from "../context/LocationContext";
import AllRequestsHelper from "../features/RequestViews/AllRequestsHelper";

import CurrentRequestsView from "../features/CurrentRequests";
import RequestMapForHelper from "../features/HelperMap/RequestsMapForHelper";
import UpdateAddressHelper from "../features/OnBoarding/Helper/UpdateAddressHelper";
import OrgBoardingPostStoreContextProvider from "../context/OrgBoardingPostStore";

export default function RootRouter() {
  /*const showSettings = event => {
    event.preventDefault();
  };*/

  return (
    <ReqProvider>
      <RequestFormProvider>
        <AuthorizationContextProvider>
          <OrgBoardingPostStoreContextProvider>
            <Router>
              {/* <Route exact path="/">
          <Redirect
            to={{
              pathname: "/home"
            }}
          />
        </Route> */}

              <Switch>
                <AuthorizationWrapper>
                  <div id="content-wrapper" className={"min-h-screen"}>
                    <Route path="/app">
                      <LanderLayout>
                        <MobileFrame>
                          {/* hybrid */}

                          <Route path="/app/:role/">
                            <Route path="/app/:role/dashboard">
                              <Dashboard />
                            </Route>
                            {/* temporarily removed :role, as it clashes with the map for helper, till we find a solution */}
                            <Route exact path="/app/organisation/map/">
                              <HelperMap />
                            </Route>

                            <Route
                              exact
                              path="/app/:role/profile"
                              component={ProfileView}
                            />

                            <Route
                              exact
                              path="/app/:role/request"
                              component={RequestsView}
                            />
                          </Route>

                          {/************** ORGANISATION*/}

                          <Route path="/app/organisation">
                            <Route exact path="/app/organisation/chooseType">
                              <ChooseUserType />
                            </Route>
                            <Route
                              exact
                              path="/app/organisation/createOrganisation"
                            >
                              <CreateOrganisation />
                            </Route>
                            <Route
                              exact
                              path="/app/organisation/createOrganisation/standort/"
                            >
                              <UpdateAddress />
                            </Route>

                            <Route
                              exact
                              path="/app/organisation/request/create"
                            >
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
                            <Route path="/app/helper/">
                              <Route exact path="/app/helper/registrierung/">
                                <ChooseUserType />
                              </Route>
                              <Route
                                exact
                                path="/app/helper/createHelper/skills"
                              >
                                <HelperSkills />
                              </Route>
                              <Route exact path="/app/helper/createHelper/name">
                                <HelperName />
                              </Route>
                              <Route
                                exact
                                path="/app/helper/createHelper/standort"
                              >
                                <HelperStandort />
                              </Route>
                              <Route
                                exact
                                path="/app/helper/createHelper/standortmanuell"
                              >
                                <UpdateAddressHelper />
                              </Route>
                            </Route>
                          </CreateHelperProvider>
                          <Route exact path="/app/helper/helperdashboard/">
                            <UserDashboard />
                          </Route>
                          <Route
                            exact
                            path="/app/helper/request/details/:reqId"
                          >
                            <RequestDetails helper={true} />
                          </Route>
                          <Route
                            exact
                            path="/app/helper/request/currentrequests/"
                          >
                            <AllRequestsHelper />
                          </Route>
                          <Route exact path="/app/helper/map/">
                            <RequestMapForHelper />
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
                </AuthorizationWrapper>
              </Switch>
            </Router>
          </OrgBoardingPostStoreContextProvider>
        </AuthorizationContextProvider>
      </RequestFormProvider>
    </ReqProvider>
  );
}
