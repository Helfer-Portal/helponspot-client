import React from "react";
import { Link } from "react-router-dom";
import ButtonOrange from "../../../components/ButtonOrange";
// import "./App.css";

export default function CallToAction() {
  return (
    <div className="pt-24">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-1/2 justify-center items-start md:text-left">
          <h1 className="my-4 text-lg leading-tight text-figmaHead font-dm-sans-h1">
            Unterstützung finden, wenn sie gebraucht wird
          </h1>
          <p className="leading-normal text-figmaParagraph font-inter-p">
            Wenn Zeit und Personal knapp sind, ist schnelle und unkomplizierte Unterstützung gefragt.
            HelpOnSpot ist in diesen Situationen die zentrale Anlaufstelle, um qualifizierte Hilfskräfte in der Nähe sichtbar zu machen
            und ihre schnelle Mobilisierung zu ermöglichen!
          </p>

          <ButtonOrange>
            <Link to="/app/organisation/createOrganisation">registrieren</Link>
          </ButtonOrange>

          <img
            className="w-full md:w-2/5 z-50 md:mt-16"
            src={require("../../../assets/hacklogoporjekt.webp")}
            alt={"Logo von #WirVsVirus"}
          />
        </div>

        <div className="w-full h-full md:w-1/2 py-6 text-center md:mt-auto">
          <img
            className="w-full md:w-5/5 z-50 mt-auto"
            src={require("../../../assets/mobile_testing_1.png")}
            alt={"Dekoratives Bild"}
          />
        </div>
      </div>
    </div>
  );
}
