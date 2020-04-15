import React from "react";
import Amplify from "aws-amplify";
import "@aws-amplify/ui/dist/style.css";
import { withAuthenticator } from "aws-amplify-react";
import { awsConfig, signUpConfig } from "./aws-exports";
import "./App.css";
import RootRouter from "./router/index.js";

Amplify.configure(awsConfig);

function App() {
  document.body.classList.add("gradient");
  return <RootRouter />;
}

export default withAuthenticator(App, { includeGreetings: true, signUpConfig });
