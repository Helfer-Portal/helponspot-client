import React from "react";
import ButtonWithLink from "../../../../components/ButtonWithLink";
import QuestionWithLabel from "../../../../components/QuestionWithLabel";
import InputWithLabel from "../../../../components/InputWithLabel";

export default function CreateOrganisation() {
  return (
      <div>
        <QuestionWithLabel
            question="Hi, wie heißt deine Organisation"
            label="Schritt 1 von 3"
        />
        <InputWithLabel fname="orgname" label="Name" />
        <div>
          <ButtonWithLink children="Zurück" link="/" />
          <ButtonWithLink children="Weiter" link="/org-register3" />
        </div>
      </div>
  );
}
