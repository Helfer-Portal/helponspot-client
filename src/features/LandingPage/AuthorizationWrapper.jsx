import React, { useEffect, useState } from "react";
import Footer from "./components/footer";
import Menu from "./components/menu/index.js";
import {
  AuthorizationContext,
  UserRole,
} from "../../context/AuthorizationStore";
import Amplify, { API, Auth, Hub } from "aws-amplify";
import RepositoryImpl from "../../repository/repository";
import { awsConfig } from "../../aws-exports";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router";
import ButtonOrange from "../../components/UiKit/ButtonOrange";
import RootRouter from "../../router";

let repository = new RepositoryImpl();

/** Layout for the register desktop story */
export default function AuthorizationWrapper(props) {
  console.log("authorizationwrap");
  let [authData, setAuthData] = React.useContext(AuthorizationContext);
  const [user, setUser] = useState(null);
  let history = useHistory();
  let orgInfo = null;
  const redirectAndSetUser = async () => {
    let shouldOrganisationProfileBeLoaded;
    let user = await Auth.currentAuthenticatedUser();
    setUser(user);
    console.log("user", user);
    let hasMail = user.email === null;
    hasMail = false;
    if (hasMail) {
      //let userData = await repository.getUserInfoByEmail(user.attributes.email);
      let userData = await repository.getUserInfoByEmail(
        "spam@yannickstreicher.org"
      );
      let userId = userData.id;
      setAuthData({
        ...authData,
        useruuid: "9d8af7fc-a430-43c3-aa75-32c5c73f90ca",
      });
      let orgInfo = await repository.returnUsersOrganisations(
        "9d8af7fc-a430-43c3-aa75-32c5c73f90ca"
      );
      if (orgInfo && orgInfo.length > 0) {
        setAuthData({ ...authData, role: UserRole.organisation });
      } else {
        setAuthData({ ...authData, role: UserRole.helper });
      }
      console.log("userData", userData);
    }
    redirectUser(orgInfo && orgInfo.length > 0, hasMail);
  };

  function redirectUser(isOrg, hasMail) {
    if (!hasMail) {
      console.log("redirecting");
      history.push("/app/organisation/chooseType");
    } else {
      if (isOrg) {
        history.push("/app/organisation/dashboard");
      } else {
        history.push("/app/helper/helperdashboard");
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
            console.log("data", data);

            console.log("signed in");
            redirectAndSetUser();
            break;
          case "signOut":
            setAuthData(null);
            break;
        }
      });

      return () => {
        Hub.remove("signIn");
        Hub.remove("signOut");
      };
    },
    []
  );

  async function ping() {
    await API.get("Ping", "", {});
  }

  return (
    <div>
      {user?.username}
      <div className="flex flex-row">
        {!user && (
          <div onClick={() => Auth.federatedSignIn()}>
            <ButtonOrange>login</ButtonOrange>
          </div>
        )}
        {user && (
          <div onClick={() => Auth.signOut()}>
            <ButtonOrange>logout</ButtonOrange>
          </div>
        )}
        {user && (
          <div onClick={() => ping()}>
            <ButtonOrange>Ping</ButtonOrange>
          </div>
        )}
      </div>
      {props.children}
    </div>
  );
}
