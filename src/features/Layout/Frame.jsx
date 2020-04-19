import React from "react";
import TabBar from "../TabBar";

/** Layout for the register desktop story */

const imagePath = require("../../../src/assets/handy.png");

export default function MobileFrame(props) {
  return (
    <div className={"min-h-screen"}>
      <div className="bg-bluePrimary min-h-screen">{props.children}</div>
      <TabBar />
    </div>
  );
}
