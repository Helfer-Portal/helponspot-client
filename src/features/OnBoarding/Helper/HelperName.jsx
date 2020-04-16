import QuestionWithLabel from "../../../components/QuestionWithLabel";
import UserCard from "../../ChooseUserType/UserCard";
import React from "react";
import Competences from "../../CreateRequest/Competences";
import ButtonWithLink from "../../../components/ButtonWithLink";
import { InputWithLabel } from "../../../components/UiKit";

export default function HelperName() {
  return (
    <div className="flex flex-col w-full h-full px-8 py-4">
      <div style={{ flexBasis: "20%" }}> </div>
      <div className="">
        <QuestionWithLabel question="Wie heißt du?" label="Schritt 2 von 3" />
      </div>
      <div className="my-3">
        <InputWithLabel fname="first_name" label="Vorname" />
      </div>
      <div className="my-3">
        <InputWithLabel fname="surname" label="Nachname" />
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
