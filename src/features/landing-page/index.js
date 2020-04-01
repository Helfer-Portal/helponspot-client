import React from "react";
// import "./App.css";
import CallToAction from "./components/call-to-action";
import TextIlluView from "./components/text-illu-view";

export default function LandingPage(props) {
    return(
        <div>
            <CallToAction />
            <TextIlluView />
        </div>
    );
  }