import React from "react";
import ButtonOrange from "../../components/ButtonOrange";
import QuestionWithLabel from "../../components/QuestionWithLabel";
import InputWithLabel from "../../components/InputWithLabel";
import "./register1.css";
import FullHeightLayout from "./components/full-height-layout";
import ButtonWithLink from "../../components/ButtonWithLink";

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
        <ButtonWithLink link={'org-register4'}>Weiter</ButtonWithLink>
      </div>
    </FullHeightLayout>
  );
}
