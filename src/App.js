import React, { useContext, useEffect, useState } from "react";
import Amplify, { Auth, Hub, API } from "aws-amplify";
import "@aws-amplify/ui/dist/style.css";
import { awsConfig } from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";
import "./App.css";

import RootRouter from "./router/index.js";
import { AuthorizationContext, UserRole } from "./context/AuthorizationStore";
import RepositoryImpl from "./repository/repository";
import ButtonOrange from "./components/UiKit/ButtonOrange";
import { Redirect, useHistory } from "react-router-dom";

let repository = new RepositoryImpl();

Amplify.configure(awsConfig);

export default function App() {
  const [user, setUser] = useState(null);
  let [authData, setAuthData] = React.useContext(AuthorizationContext);
  let [redirect, setRedirect] = useState(false);
  let [redirectUrl, setRedirectUrl] = useState("/home");

  //authenticate default user for demonstration

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
      <RootRouter />
    </div>
  );
}
