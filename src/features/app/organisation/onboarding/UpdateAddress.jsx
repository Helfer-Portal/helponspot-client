import React from "react";
import ButtonOrange from "../../../../components/ButtonOrange";
import QuestionWithLabel from "../../../../components/QuestionWithLabel";
import InputWithLabel from "../../../../components/InputWithLabel";
import ButtonWithLink from "../../../../components/ButtonWithLink";

export default function updateAddress() {
  return (
      <div>
        <QuestionWithLabel
            question="Wo befindet ihr euch"
            label="Schritt 2 von 3"
        />
        <InputWithLabel fname="orglocation" label="Standort" />
        <div>
          <ButtonOrange>Zurück</ButtonOrange>
          <ButtonWithLink link={'/app/organisation/request/'}>Weiter</ButtonWithLink>
        </div>
      </div>
  );
}
