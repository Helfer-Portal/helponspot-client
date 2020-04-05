import React from "react";
import "../../styles/organisation.css";

/** Layout for the register desktop story */
export default function FullHeightLayoutNoFooter(props) {
  return (
    <div className="flex flex-col m-auto w-full h-full">
      <div style={{height: '100vh'}} className="pt-8 align-start justify-start pl-20 h-2/3 container-form ">
        {props.children}
      </div>
    </div>
  );
}
