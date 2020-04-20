import React, { useEffect, useState } from "react";
import Amplify, { Auth, Hub } from "aws-amplify";
import "@aws-amplify/ui/dist/style.css";
import { awsConfig } from "./aws-exports";
import "./App.css";
import RootRouter from "./router/index.js";

Amplify.configure(awsConfig);

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(
    // this is only executed once when the App renders
    () => {
      Hub.listen("auth", ({ payload: { event, data } }) => {
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
        .catch(() => console.log("Not signed in"));
      return () => {
        Hub.remove("signIn");
        Hub.remove("signOut");
      };
    },
    []
  );

  document.body.classList.add("gradient");
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  // if (!isAuthenticated || isAuthenticated == "false") {
  //   Auth.federatedSignIn().then(() => {
  //     debugger;
  //     console.log("setting localstorage");
  //     localStorage.setItem("isAuthenticated", true);
  //   });
  // } else {
  //   logCurrentSession();
  // }
  logCurrentSession();

  return (
    <div>
      {JSON.stringify(user)}
      <button onClick={() => Auth.signOut()}>logout</button>
      <button onClick={() => Auth.federatedSignIn()}>Open Hosted UI</button>
      <RootRouter />
    </div>
  );
}

function logCurrentSession() {
  try {
    Auth.currentSession().then((session) => {
      console.log(session);
    });
  } catch (e) {
    console.log("Error getting currentSession: " + e);
  }

  try {
    Auth.currentAuthenticatedUser().then((authenticatedUser) => {
      console.log(authenticatedUser);
    });
  } catch (e) {
    console.log("Error getting currentAuthenticatedUser: " + e);
  }

  try {
    Auth.currentCredentials().then((credentials) => {
      console.log(credentials);
    });
  } catch (e) {
    console.log("Error getting currentCredentials: " + e);
  }
}

// export default withAuthenticator(App, {
//   includeGreetings: true,
//   signUpConfig,
//   federated: {
//     amazon_client_id: "amzn1.application-oa2-client.6ba1a92ede974d9cb370d87475dcc9ba",
//     google_client_id: "712951823298-63bvjn7kmibubnc1pae68egovm3rijo8.apps.googleusercontent.com"
//   }
// });
