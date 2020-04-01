import React from "react";
import {Link} from "react-router-dom";
// import "./App.css";

export default function CallToAction() {
  return (

    
    <div class="pt-24">
      <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <p class="uppercase tracking-loose w-full">What business are you?</p>
          <h1 class="my-4 text-5xl font-bold leading-tight">
            Main Hero Message to sell yourself!
          </h1>
          <p class="leading-normal text-2xl mb-8">
            Sub-hero message, not too long and not too short. Make it just
            right!
          </p>

          <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
            <Link to="org-register">Jetzt registrieren!</Link>
          </button>
        </div>

        <div class="w-full md:w-3/5 py-6 text-center">
          <img
            class="w-full md:w-4/5 z-50"
            src={require("../../../assets/hero.png")}
          />
        </div>
      </div>
    </div>
  );
}
