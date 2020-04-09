import React from "react";
// import "./App.css";
import CallToAction from "./components/call-to-action";
import TextIlluView from "./components/text-illu-view";
import Usps from "./components/Usps";

export default function LandingPage() {
  return (
    <div>
      <CallToAction />
      <TextIlluView />
      <Usps />
    </div>
  );
}
