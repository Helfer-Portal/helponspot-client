import React from "react";
import { Link } from "react-router-dom";
import ButtonOrange from "../../../components/ButtonOrange";
// import "./App.css";

export default function CallToAction() {
  return (
    <div class="pt-24">
      <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div class="flex flex-col w-full md:w-3/5 justify-center items-start md:text-left">
          <h1 class="my-4 text-lg leading-tight text-figmaHead font-dm-sans-h1">
            Unterstützung finden, wenn sie gebraucht wird
          </h1>
          <p class="leading-normal text-figmaParagraph font-inter-p">
            Wenn Zeit und Personal knapp sind, ist schnelle und unkomplizierte Unterstützung gefragt.
            Help-On-Spot ist in diesen Situationen die zentrale Anlaufstelle, um qualifizierte Hilfskräfte in der Nähe sichtbar zu machen
            und ihre schnelle Mobilisierung zu ermöglichen!
          </p>

          <ButtonOrange>
            <Link to="org-register1">registrieren</Link>
          </ButtonOrange>
        </div>

        <div class="w-full md:w-2/5 py-6 text-center">
          <img
            class="w-full md:w-4/5 z-50"
            src={require("../../../assets/mobile_testing_1.png")}
          />
        </div>
      </div>
    </div>
  );
}
