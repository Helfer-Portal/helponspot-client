import React from "react";
import "../register1.css";
import Footer from "../../landing-page/components/footer";

/** Layout for the register desktop story */
export default function AppLayout(props) {
  return (
      <div className="min-h-full">
        <div style={{height: '100vh'}} className="h-full m-n8 align-start justify-start m-auto">
          <div className="w-1/3">
            {props.children}
          </div>
        </div>
        <div className="h-8"></div>
        <div style={{height: '20vh'}} className="h-1/3">
          <Footer />
        </div>
      </div>
  );
}
