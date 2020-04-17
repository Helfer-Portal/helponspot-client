import QuestionWithLabel from "../../../components/QuestionWithLabel";
import React from "react";
import ButtonWithLink from "../../../components/ButtonWithLink";
import { InputWithLabel } from "../../../components/UiKit";
import {LocContext} from "../../../context/LocationContext";

export default function HelperName() {
    let [locationContext, setLocationContext] = React.useContext(LocContext);
    console.log("loc")
    console.log(locationContext)
  return (
    <div className="flex flex-col w-full h-full px-8 py-4">
      <div style={{ flexBasis: "20%" }}> </div>
      <div className="">
        <QuestionWithLabel question="Wie heißt du?" label="Schritt 2 von 3" />
      </div>
      <div className="my-3">
        <InputWithLabel
          fname="first_name"
          title="Vorname"
          placeholder={"z.b. Max"}
        />
      </div>
      <div className="my-3">
        <InputWithLabel
          fname="surname"
          title="Nachname"
          placeholder="z.B. Mustermann"
        />
      </div>

      <div style={{ flex: 1 }} className="w-full">
        <ButtonWithLink
          className="w-full flex justify-center"
          children="Weiter"
          link="/app/helfer/createHelper/standort/"
        />
      </div>
    </div>
  );
}
