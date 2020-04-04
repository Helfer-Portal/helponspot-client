import React from "react";
import Footer from "./components/footer";

/** Layout for the register desktop story */
export default function LanderLayout(props) {
  return (
    <div class="h-full">
      <div style={{height: '100vh'}} class="h-full m-n8 align-start justify-start m-auto">
        <div class="w-1/3">
          {props.children}
        </div>
      </div>
      <div class="h-8"></div>
      <div style={{height: '20vh'}} class="h-1/3">
        <Footer />
      </div>
    </div>
  );
}
