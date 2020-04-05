import React from "react";
import Footer from "./components/footer";
import Menu from "./components/menu/index.js";

/** Layout for the register desktop story */
export default function LanderLayout(props) {
  return (
    <div className="min-h-screen">
      <Menu />
      <div className="h-full align-start justify-start">
        <div className="m-auto container">
          {props.children}
        </div>
      </div>
      <Footer />

    </div>
  );
}
