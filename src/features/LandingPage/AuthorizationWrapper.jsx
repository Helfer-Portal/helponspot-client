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
  console.log("authorization called");
  let [authData, setAuthData] = React.useContext(AuthorizationContext);
  const [user, setUser] = useState(null);
  let history = useHistory();

  React.useEffect(() => {
    console.log("init user", user);
    console.log("Wrapper started for the first time");
  }, []);

  const setUserStart = async () => {};

  const redirectAndSetUser = async (redirect = false) => {
    if (!redirect) {
      console.log("called from refresh");
      try {
        //if user is not logged in yet, skip
        Auth.currentUserInfo();
      } catch (e) {
        return null;
      }
    }

    let authUser = await Auth.currentAuthenticatedUser();

    console.log("user object", authUser);
    let ob = await Auth.currentSession();

    console.log("ob", ob);
    //display buttons based on user presence
    setUser(authUser);
    let email = ob.getIdToken().payload.email;
    let hasSignedUp = authUser.email !== null;
    let isOrg = false;
    if (hasSignedUp) {
      console.log("enteredhasMail");
      //let userData = await repository.getUserInfoByEmail(user.attributes.email);
      let userData = await repository.getUserInfoByEmail(email);
      console.log("userData", userData);

      let userRole = undefined;
      isOrg = userData.organisations && userData.organisations.length > 0;
      if (isOrg) {
        userRole = UserRole.organisation;
      } else if (userData.lastName !== "") {
        userRole = UserRole.helper;
      } else {
        hasSignedUp = false;
      }
      setAuthData({
        ...authData,
        useruuid: userData.id,
        email: email,
        orgUUIDs: userData.organisations.map((el) => el.id),
        role: userRole,
      });
    }
    if (redirect) {
      redirectUser(isOrg, hasSignedUp);
    }
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
            redirectAndSetUser(true);
            break;
          case "signOut":
            setAuthData(null);
            setUser(null);
            break;
        }
      });

      // if the page is refreshed, set AuthContext again so the user does not have to log in
      redirectAndSetUser(false);
      //TODO: return a function that places rest of state in local storage, so the User continues with
      //e.g. his form data, even after a refresh.
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
