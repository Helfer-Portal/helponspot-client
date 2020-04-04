import React from "react";
import Footer from "./components/footer";
import Menu from "./components/menu/index.js";

/** Layout for the register desktop story */
export default function LanderLayout(props) {
  return (
    <div class="min-h-screen">
      <Menu />
      <div class="h-full align-start justify-start">
        <div class="m-auto container">
          {props.children}
        </div>
      </div>
      <Footer />

    </div>
  );
}
