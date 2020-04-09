import React from "react";
import SingleTextIlluView from "./single-text-illy";
// import "./App.css";

const sectionTitle = "Wir sind da für ...";

const data = [
  {
    title: "Freiwillige, Engagierte, Motivierte",
    p:
      "In schwierigen Situationen sind alle aufeinander angewiesen und jede helfende Hand wird gebraucht. Jeder kann helfen, unabhängig von der Qualifikation.\n",
    illustration: img1,
    right: true,
  },
  {
    title: "Organisationen, Vereine, Institutionen",
    p:
      "In Krisenzeiten kommen Gesundheitssysteme an die Grenzen ihrer Kapazitäten. " +
      "Insbesondere für ihr Personal brauchen Institutionen deshalb zeitnahe Unterstützung, sowohl im medizinischen, als auch im nicht-medizinischen Bereich.",
    illustration: img2,
    right: false,
  },
];

export default function TextIlluView() {
  return (
    <div>
      <section className="border-b py-8">
        <div className="container mx-auto m-8">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-figmaHead font-dm-sans-h1">
            {sectionTitle}
          </h1>

          {data.map((el) => {
            return (
              <SingleTextIlluView
                title={el.title}
                p={el.p}
                illustration={el.illustration()}
                right={el.right}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

function img1() {
  return (
    <img
      className="w-full md  md:w-3/5 z-50"
      src={require("../../../assets/super_dad_1.png")}
      alt={
        "Illustration einer Person, die eine andere Person auf den Schultern trägt"
      }
    />
  );
}
function img2() {
  return (
    <img
      className="w-full md:w-3/5 z-50"
      src={require("../../../assets/team_work_1.png")}
      alt={
        "Illustration von drei Personen, die an einem gemeinsamen Problem arbeiten"
      }
    />
  );
}
