import React from "react";
import "../register1.css";
import Footer from "../../landing-page/components/footer";

/** Layout for the register desktop story */
export default function FullHeightLayout(props) {
  return (
    <div className="flex flex-col m-auto w-full max-w-screen-lg h-full">
      <div style={{height: '80vh'}} class="pt-8 align-start justify-start pl-20 h-2/3 container-form ">
        {props.children}
      </div>
      <div style={{height: '20vh'}} className="h-1/3">
        <Footer />
      </div>
    </div>
  );
}
