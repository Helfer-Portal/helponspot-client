import React from "react";
import QuestionWithLabel from "../../../components/QuestionWithLabel";
import InputWithLabel from "../../../components/UiKit/InputWithLabel";
import ButtonWithLink from "../../../components/ButtonWithLink";
import BackButton from "../../../components/BackButton";
import { CreateHelperContext } from "../../../context/LocationContext";

export default function UpdateAddressHelper() {
  //TODO: use this context to enter the address
  let [requestData, setRequestData] = React.useContext(CreateHelperContext);

  return (
    <div className="flex flex-col w-full h-full px-8 py-4">
      <div style={{ flex: 1 }} className="flex w-full">
        <BackButton />
      </div>
      <div style={{ flex: 2 }}>
        <QuestionWithLabel
          question="Leider konnten wir deine Adresse nicht ermitteln, bitte gib sie manuell ein;"
          label="Schritt 3 von 3"
        />
      </div>
      <div style={{ flex: 5 }} className="flex items-start">
        <InputWithLabel title="Standort" placeholder={"z.B. Musterstraße 13"} />
      </div>
      <div style={{ flex: 1 }} className="w-full">
        <ButtonWithLink
          className={"w-full flex justify-center"}
          link={"/app/helper/helperdashboard/"}
        >
          Weiter
        </ButtonWithLink>
      </div>
    </div>
  );
}
