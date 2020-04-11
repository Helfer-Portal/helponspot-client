import React from "react";
import { ButtonPrimaryBlue } from "../../../components/UiKit";
// import "../../App.css";

const sectionTitle = "Das macht uns einzigartig.";

const data = [
  {
    title: "Übersicht in Echtzeit",
    subTitle: "Vernetzung und Koordination",
    paragraph:
      "Interessierte Helfer:innen definieren ihre möglichen Einsatzgebiete und Fähigkeiten. Anhand dessen können Institutionen in Echtzeit" +
      " die Anzahl der verfügbaren Hilfskräfte einsehen und entsprechend ihrer Bedürfnisse filtern und kontaktieren.\n",
    hasRegisterButton: false,
  },
  {
    title: "Schnell, effizient, einfach",
    subTitle: "Keine Einstiegshürden",
    paragraph:
      "Sowohl für die Hilfesuchenden als auch für die Hilfskräfte ist die Registrierung sehr unkompliziert." +
      " Außerdem können nicht nur medizinisch qualifizierte, sondern auch nicht-qualifizierte Helfer:innen über die App angefragt werden.\n",
    hasRegisterButton: true,
  },
  {
    title: "Sicherstellung der Versorgung.",
    subTitle: "Gesellschaftlicher Mehrwert",
    paragraph:
      "Auf Seiten der Institutionen wird die schnelle und unkomplizierte Akquise von Helfer:innen ermöglicht, so dass das eigene Personal entlastet wird und die jeweiligen Kernaufgaben bewältigt werden können." +
      " Das dient auf der anderen Seite wiederum direkt der Bevölkerung, da so die angemessene Versorgung der Menschen sichergestellt wird.\n",
    hasRegisterButton: false,
  },
];

/** returns the unique selling point component */
export default function Usps() {
  const defaultCallback = () => {
    alert("pressed");
  };

  /** returns a single USP Card, to split up data and style / tags */
  const createUspCard = (
    title,
    subTitle,
    paragraph,
    hasRegisterButton,
    callback
  ) => {
    return (
      <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
          <span className="flex flex-wrap no-underline hover:no-underline">
            <p className="w-full text-figmaSubHead font-inter text-xs md:text-sm px-6">
              {subTitle}
            </p>
            <div className="w-full text-figmaSectionHead font-dm-sans font-bold text-xl px-6">
              {title}
            </div>
            <p className="text-figmaParagraph font-inter text-base px-6 mb-5">
              {paragraph}
            </p>
          </span>
        </div>
        {hasRegisterButton === true && (
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-start">
              <ButtonPrimaryBlue onClick={callback}>
                registrieren
              </ButtonPrimaryBlue>
            </div>
          </div>
        )}
      </div>
    );
  };
  return (
    <div className="Usps">
      <section className="bg-white border-b py-8">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <h1 className="w-full text-figmaHead font-dm-sans-h1 my-2 text-5xl font-bold leading-tight text-center">
            {sectionTitle}
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          {data.map((el) => {
            return createUspCard(
              el.title,
              el.subTitle,
              el.paragraph,
              el.hasRegisterButton,
              defaultCallback
            );
          })}
        </div>
      </section>
    </div>
  );
}
