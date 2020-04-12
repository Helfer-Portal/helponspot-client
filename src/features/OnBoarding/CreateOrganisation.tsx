import React from "react";
import ButtonWithLink from "../../components/ButtonWithLink";
import QuestionWithLabel from "../../components/QuestionWithLabel";
import InputWithLabel from "../../components/UiKit/InputWithLabel";
import BackButton from "../../components/BackButton";

export default function CreateOrganisation() {
  return (
    <div className="flex flex-col w-full h-full px-8 py-4">
      <div style={{ flex: 1 }} className="flex w-full">
        <BackButton />
      </div>
      <div style={{ flex: 2 }}>
        <QuestionWithLabel
          question="Hi, wie heißt deine Organisation"
          label="Schritt 1 von 3"
        />
      </div>
      <div style={{ flex: 5 }} className="flex items-start">
        <InputWithLabel title="Name" placeholder={"z.B. DRK Berlin"} />
      </div>

      <div style={{ flex: 1 }} className="w-full">
        <ButtonWithLink
          className="w-full flex justify-center"
          children="Weiter"
          link="/app/organisation/createOrganisation/standort/"
        />
      </div>
    </div>
  );
}
