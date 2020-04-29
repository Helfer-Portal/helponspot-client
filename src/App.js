import React, { useEffect, useState } from "react";
import Amplify, { Auth, Hub, API } from "aws-amplify";
import "@aws-amplify/ui/dist/style.css";
import { awsConfig } from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";
import "./App.css";
import RootRouter from "./router/index.js";
import { AuthorizationContext } from "./context/AuthorizationStore";
import RepositoryImpl from "./repository/repository";
import ButtonOrange from "./components/UiKit/ButtonOrange";

let repository = new RepositoryImpl();

Amplify.configure(awsConfig);

const fetchDemoUser = async () => {
  // let shouldOrganisationProfileBeLoaded;
  // console.log(await repository.getUserInfo('9d8af7fc-a430-43c3-aa75-32c5c73f90ca'))
  // let orgInfo = await repository.returnUsersOrganisations('9d8af7fc-a430-43c3-aa75-32c5c73f90ca')
  // console.log(orgInfo);
  // shouldOrganisationProfileBeLoaded = orgInfo.length > 0? true : false;
  // console.log(shouldOrganisationProfileBeLoaded);
};

export default function App() {
  const [user, setUser] = useState(null);
  let [authData, setAuthData] = React.useContext(AuthorizationContext);
  //authenticate default user for demonstration
  useEffect(
    // this is only executed once when the App renders

    () => {
      fetchDemoUser();
      Hub.listen("auth", ({ payload: { event, data } }) => {
        console.log("Hub listen: ", event, data);
        switch (event) {
          case "signIn":
            const accessToken = data
              .getSignInUserSession()
              .getIdToken()
              .getJwtToken();
            setAuthData({ ...authData, accessToken: accessToken });
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
  Auth.signIn("dummyuser", "Password13!");

  document.body.classList.add("gradient");
  //const isAuthenticated = localStorage.getItem("isAuthenticated");

  // if (!isAuthenticated || isAuthenticated == "false") {
  //   Auth.federatedSignIn().then(() => {
  //     debugger;
  //     console.log("setting localstorage");
  //     localStorage.setItem("isAuthenticated", true);
  //   });
  // } else {
  //   logCurrentSession();
  // }

  async function ping() {
    await API.get("Ping", "", {});
  }

  return (
    <div>
      {user?.username}
      <div>
        <div onClick={() => Auth.federatedSignIn()}>
          <ButtonOrange>login</ButtonOrange>
        </div>
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
      <RootRouter />
    </div>
  );
}
