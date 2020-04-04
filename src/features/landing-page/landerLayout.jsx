import React from "react";
import Footer from "./components/footer";

/** Layout for the register desktop story */
export default function LanderLayout(props) {
  return (
    <div class="h-full">
      <div class="h-full align-start justify-start">
        <div class="m-auto">
          {props.children}
        </div>
      </div>
      <div class="h-8"></div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
