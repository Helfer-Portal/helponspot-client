import React from "react";
import QuestionWithLabel from "../../components/QuestionWithLabel";
import InputWithLabel from "../../components/InputWithLabel";
import Circle from "../../components/Circle";
import "./register1.css";
import FullHeightLayout from "./components/full-height-layout";
import Competences from "./components/competences";
import ButtonOrange from "../../components/ButtonOrange";

export default function NewAnzeige() {
  return (
    <FullHeightLayout>
      <QuestionWithLabel question="Anzeige erstellen" label="Schritt 3 von 3" />
      <InputWithLabel fname="Titel" label="Titel" />
      <div className="my-3 flex flex-col align-start">
        <div className="mb-3 text-figmaDescription font-inter">
          Gesuchte Kompetenzen
        </div>
        <div>
          <Competences />
        </div>
      </div>

      <div className="w-full flex" class="container-helper-numbers">
        <div>
          <Circle image="/minus.png" />
          <div class="number"> 5 </div>
          <Circle image="/plus.png" />
        </div>
        <div>
          <button>unbegrenzt</button>
        </div>
      </div>

      <div className="w-full flex flex-col">
        <div className="mb-3 text-figmaDescription font-inter">Zeitraum</div>
        <div>
          <input type="date"></input>
        </div>
      </div>

      <div>
        <div className="mb-3 text-figmaDescription font-inter">Beschreibung</div>
        <div>
          <input type="text" placeholder="Wir suchen Menschen, die..."></input>
        </div>
      </div>

      <ButtonOrange>Anzeige erstellen</ButtonOrange>
    </FullHeightLayout>
  );
}
