import QuestionWithLabel from "../../../components/QuestionWithLabel";
import React from "react";
import ButtonWithLink from "../../../components/ButtonWithLink";
import { InputWithLabel } from "../../../components/UiKit";
import BackButton from "../../../components/BackButton";
import { CreateHelperContext } from "../../../context/LocationContext";

export default function HelperName() {
  let [boardingData, setBoardingData] = React.useContext(CreateHelperContext);
  console.log("loc");
  console.log(boardingData);
  // chnage handler for the input
  const onChangeFirstName = (e) => {
    setBoardingData({
      ...boardingData,
      firstName: e.target.value,
    });
  };
  const onChangeLastName = (e) => {
    setBoardingData({
      ...boardingData,
      lastName: e.target.value,
    });
  };

  return (
    <div className="bg-bluePrimary flex flex-col w-full h-full px-8 py-4">
      <div style={{ flexBasis: "20%" }}>
        <BackButton />{" "}
      </div>
      <div className="">
        <QuestionWithLabel question="Wie heißt du?" label="Schritt 2 von 3" />
      </div>
      <div className="my-3">
        <InputWithLabel
          fname="first_name"
          title="Vorname"
          placeholder={"z.b. Max"}
          onChange={onChangeFirstName}
        />
      </div>
      <div className="my-3">
        <InputWithLabel
          fname="surname"
          title="Nachname"
          placeholder="z.B. Mustermann"
          onChange={onChangeLastName}
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
