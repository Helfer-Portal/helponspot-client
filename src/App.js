import React from "react";
import "./App.css";
import RootRouter from "./router/index.js";

export default function App() {

  /* adds the gradient to the html body tag to match layout */
  document.body.classList.add("gradient");

  return <RootRouter />;
    
}



