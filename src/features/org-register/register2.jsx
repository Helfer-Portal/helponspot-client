import React from "react";
import ButtonOrange from "../../components/ButtonOrange";
import QuestionWithLabel from "../../components/QuestionWithLabel";
import InputWithLabel from "../../components/InputWithLabel";
import "./register1.css";
import FullHeightLayout from "./components/full-height-layout";

export default function OrgRegister2() {
  return (
    <FullHeightLayout>
      <QuestionWithLabel
        question="Wo befindet ihr euch"
        label="Schritt 2 von 3"
      />
      <InputWithLabel fname="orglocation" label="Standort" />
      <div>
        <ButtonOrange>Zurück</ButtonOrange>
        <ButtonOrange children="Weiter" />
      </div>
    </FullHeightLayout>
  );
}
