import React from "react";
import QuestionWithLabel from "../../../components/QuestionWithLabel";
import InputWithLabel from "../../../components/UiKit/InputWithLabel";
import ButtonWithLink from "../../../components/ButtonWithLink";
import BackButton from "../../../components/BackButton";
import { CreateHelperContext } from "../../../context/LocationContext";
import { AuthorizationContext } from "../../../context/AuthorizationStore";
import RepositoryImpl from "../../../repository/repository";
import { useHistory } from "react-router-dom";

let repository = new RepositoryImpl();

export default function UpdateAddressHelper() {
  let history = useHistory();
  let address = null;
  let [authData, setAuthData] = React.useContext(AuthorizationContext);
  let [requestData, setRequestData] = React.useContext(CreateHelperContext);
  const onChangeAddress = (e) => {
    address = e.target.value;
    console.log("adress update", address);
  };

  //TODO: use this context to enter the address
  const sendPatchData = async (location) => {
    console.log("Request Data before patch", requestData);
    console.log("sending patch");
    await setRequestData({
      ...requestData,
      location: { ...location, automatic: true },
    });
    //TODO: send location as well
    let userInfo = {
      firstName: requestData.firstName,
      lastName: requestData.lastName,
      qualifications: requestData.added_competences.map((ob) => ob.key),
      email: authData.email,
      id: authData.useruuid,
    };
    let res = await repository.patchUserInfo(userInfo);
    console.log("response", res);
    history.push("/app/helper/helperdashboard");
  };
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
        <InputWithLabel
          title="Standort"
          placeholder={"z.B. Musterstraße 13"}
          onChange={onChangeAddress}
        />
      </div>
      <div
        style={{ flex: 1 }}
        className="w-full"
        onClick={() => sendPatchData(address)}
      >
        <ButtonWithLink
          className={"w-full flex justify-center"}
          onClick={() => alert("ab")}
        >
          Weiter
        </ButtonWithLink>
      </div>
    </div>
  );
}
