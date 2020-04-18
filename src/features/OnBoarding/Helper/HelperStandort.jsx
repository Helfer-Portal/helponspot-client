import QuestionWithLabel from "../../../components/QuestionWithLabel";
import React, { useContext, useState } from "react";
import ButtonWithLink from "../../../components/ButtonWithLink";
import { ButtonSecondaryOrange } from "../../../components/UiKit";
import { CreateHelperContext } from "../../../context/LocationContext";
import { usePosition } from "../../../repository/useLocation";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function HelperStandort() {
  let [locPermissionButton, setLocPermission] = useState(false);
  let history = useHistory();

  let [requestData, setRequestData] = React.useContext(CreateHelperContext);

  const callback = (location) => {
    setRequestData({ ...requestData, location: location });
    history.push("/app/helfer/createHelper/name");
  };

  let { latitude, longitude, error } = usePosition(
    locPermissionButton,
    callback
  );
  console.log(error);
  if (error) {
    alert("Something went wrong, please enter address manually");
  }
  //TODO: error handling

  const triggerUpdate = () => {
    locPermissionButton = true;
  };

  return (
    <div className="flex flex-col w-full h-full px-8 py-4">
      <div style={{ flexBasis: "20%" }}> </div>
      <div className="">
        <QuestionWithLabel
          question="Teile deinen Standort, damit man dich schneller findet!"
          label="Schritt 3 von 3"
        />
      </div>
      <div className="flex flex-col w-full">
        <div className="font-inter text-figmaParagraph text-sm">
          Möchtest du deinen Standort jetzt freigeben?
        </div>
      </div>
      <div style={{ flex: 1 }} className="flex py-4 flex-row">
        {/*settingPermission to True triggers update */}
        <div
          onClick={() => setLocPermission(true)}
          style={{ flex: 1 }}
          className="pr-2"
        >
          <ButtonWithLink
            children="ja, bitte!"
            link="/app/helfer/createHelper/standort/"
          />
        </div>
        <div style={{ flex: 1 }}>
          <div className="pl-2">
            <ButtonSecondaryOrange
              onClick={() => alert("was machen wir hier?")}
            >
              vorerst nicht
            </ButtonSecondaryOrange>
          </div>
        </div>
      </div>
    </div>
  );
}
