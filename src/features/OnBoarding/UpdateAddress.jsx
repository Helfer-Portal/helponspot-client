import React from "react";
import QuestionWithLabel from "../../components/QuestionWithLabel";
import InputWithLabel from "../../components/UiKit/InputWithLabel";
import ButtonWithLink from "../../components/ButtonWithLink";
import BackButton from "../../components/BackButton";

/** second Screen of User Story */

export default function UpdateAddress() {
  return (
    <div className="flex flex-col w-full h-full px-8 py-4">
      <div style={{ flex: 1 }} className="flex w-full">
        <BackButton />
      </div>
      <div style={{ flex: 2 }}>
        <QuestionWithLabel
          question="Wo befindet ihr euch"
          label="Schritt 2 von 3"
        />
      </div>
      <div style={{ flex: 5 }} className="flex items-start">
        <InputWithLabel title="Standort" placeholder={"z.B. Musterstraße 13"} />
      </div>
      <div style={{ flex: 1 }} className="w-full">
        <ButtonWithLink
          className={"w-full flex justify-center"}
          link={"/app/organisation/request/"}
        >
          Weiter
        </ButtonWithLink>
      </div>
    </div>
  );
}
