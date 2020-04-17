import React from "react";
import Amplify, { Auth } from "aws-amplify";
import "@aws-amplify/ui/dist/style.css";
import { awsConfig } from "./aws-exports";
import "./App.css";
import RootRouter from "./router/index.js";

Amplify.configure(awsConfig);

export default function App() {
  document.body.classList.add("gradient");
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (!isAuthenticated || isAuthenticated == "false") {
    Auth.federatedSignIn().then(() => {
      localStorage.setItem("isAuthenticated", true);
    });
  } else {
    logCurrentSession();
  }

  return <RootRouter />;
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
