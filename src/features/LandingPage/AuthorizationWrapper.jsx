import React, { useEffect, useState } from "react";
import Footer from "./components/footer";
import Menu from "./components/menu/index.js";
import { AuthorizationContext } from "../../context/AuthorizationStore";
import Amplify, { Auth, Hub } from "aws-amplify";
import RepositoryImpl from "../../repository/repository";
import { awsConfig } from "../../aws-exports";
import { Redirect } from "react-router-dom";

let repository = new RepositoryImpl();

const fetchDemoUser = async (id) => {
  let shouldOrganisationProfileBeLoaded;
  console.log(
    "user",
    await repository.getUserInfo("9d8af7fc-a430-43c3-aa75-32c5c73f90ca")
  );
  let orgInfo = await repository.returnUsersOrganisations(
    "9d8af7fc-a430-43c3-aa75-32c5c73f90ca"
  );
  console.log("org", orgInfo);
  return [orgInfo > 0, true];
};

/** Layout for the register desktop story */
export default function AuthorizationWrapper(props) {
  let [authData, setAuthData] = React.useContext(AuthorizationContext);
  const [user, setUser] = useState(null);
  let [redirect, setRedirect] = useState(true);
  let [redirectUrl, setRedirectUrl] = useState("/home");
  function redirectUser(isOrg, hasMail) {
    console.log("redirecting");
    setRedirect(true);
    if (!hasMail) {
      setRedirectUrl("/app/organisation/chooseType");
    } else {
      if (isOrg) {
        setRedirectUrl("/app/organisation/dashboard");
      } else {
        setRedirectUrl("/app/helper/helperdashboard");
      }
    }
  }

  //authenticate default user for demonstration
  useEffect(
    // this is only executed once when the App renders

    () => {
      Hub.listen("auth", ({ payload: { event, data } }) => {
        console.log("Hub listen: ", event, data);
        switch (event) {
          case "signIn":
            const accessToken = data
              .getSignInUserSession()
              .getIdToken()
              .getJwtToken();
            let isOrg,
              hasMail = fetchDemoUser();

            //  redirectUser(isOrg, hasMail);
            console.log("session", data.getSignInUserSession());
            break;
          case "signOut":
            setUser(null);
            break;
        }
      });
      Auth.currentAuthenticatedUser()
        .then((user) => setUser(user))
        .catch(() => console.log("Not signed in"));
      return () => {
        Hub.remove("signIn");
        Hub.remove("signOut");
      };
    },
    []
  );

  return <div>{props.children}</div>;
}
