import React, {useEffect, useState} from "react";
import Amplify, {Auth, Hub, API} from "aws-amplify";
import "@aws-amplify/ui/dist/style.css";
import {awsConfig} from "./aws-exports";
import "./App.css";
import RootRouter from "./router/index.js";
import ButtonPrimaryBlue from "./components/UiKit/ButtonPrimaryBlue";

Amplify.configure(awsConfig);

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(
    // this is only executed once when the App renders
    () => {
      Hub.listen("auth", ({payload: {event, data}}) => {
        console.log("Hub listen: ", event, data);
        switch (event) {
          case "signIn":
            setUser(data);
            break;
          case "signOut":
            setUser(null);
            break;
        }
      });
      Auth.currentAuthenticatedUser()
        .then((user) => setUser(user))
        .catch(e => console.log(e));
      return () => {
        Hub.remove("signIn");
        Hub.remove("signOut");
      };
    },
    []
  );

  document.body.classList.add("gradient");

  async function ping() {
    await API.get("Ping", "", {});
  }

  return (
    <div>
      {user?.username}
      <div style={{display: "flex", width: "30vw"}}>
        <ButtonPrimaryBlue onClick={() => Auth.federatedSignIn()}>login</ButtonPrimaryBlue>
        {user && <ButtonPrimaryBlue onClick={() => Auth.signOut()}>logout</ButtonPrimaryBlue>}
        {user && <ButtonPrimaryBlue onClick={() => ping()}>Ping</ButtonPrimaryBlue>}
      </div>
      <RootRouter/>
    </div>
  );
}

