import React from "react";
import QuestionWithLabel from "../../../../components/QuestionWithLabel";
import InputWithLabel from "../../../../components/InputWithLabel";
import Circle from "../../../../components/Circle";

import Competences from "../../../../components/app/competences";
import ButtonOrange from "../../../../components/ButtonOrange";

export default function CreateRequest() {
  return (
      <div>
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
          <button class="unlimited">unbegrenzt</button>
        </div>

        <div className="w-full flex flex-col">
          <div className="mb-3 text-figmaDescription font-inter">Zeitraum</div>
          <div>
            <input type="date"></input>
          </div>
        </div>
        <div id="lastquestion">
          <InputWithLabel fname="Titel" label="Beschreibung" />
        </div>
        <ButtonOrange>Anzeige erstellen</ButtonOrange>
      </div>

  );
}
