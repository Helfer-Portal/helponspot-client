import QuestionWithLabel from "../../../components/QuestionWithLabel";
import React, { useContext, useState } from "react";
import ButtonWithLink from "../../../components/ButtonWithLink";
import { ButtonSecondaryOrange } from "../../../components/UiKit";
import BackButton from "../../../components/BackButton";

import { CreateHelperContext } from "../../../context/LocationContext";
import { usePosition } from "../../../repository/useLocation";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { convertToNewHelperPostRequest } from "../../../context/LocationContext";
import RepositoryImpl from "../../../repository/repository";
import { AuthorizationContext } from "../../../context/AuthorizationStore";

let repository = new RepositoryImpl();

export default function HelperStandort() {
  console.log("loaded HelperStandort");
  //this indicator is changed when the user clicks on the button, and triggers an update of the location on the next rerender
  let [locPermissionThroughButton, setLocPermission] = useState(false);
  let history = useHistory();
  let [authData, setAuthData] = React.useContext(AuthorizationContext);
  let [requestData, setRequestData] = React.useContext(CreateHelperContext);

  const callback = async (location) => {
    await setRequestData({
      ...requestData,
      location: { ...location, automatic: true },
    });
    console.log("callback called");
    let userInfo = {
      firstName: requestData.firstName,
      lastName: requestData.lastName,
      qualifications: requestData.qualifications,
      email: authData.email,
    };
    await repository.patchUserInfo(userInfo);
    history.push("/app/helper/createHelper/name");
  };

  let { latitude, longitude, error } = usePosition(
    locPermissionThroughButton,
    callback
  );

  if (locPermissionThroughButton && !error) {
    console.log("returned permission");
    setRequestData(requestData);
    console.log(requestData);
  }
  if (locPermissionThroughButton && error) {
    console.log("error", error);
    history.push("/app/helper/createHelper/standortmanuell");
  }

  return (
    <div className="flex flex-col w-full h-full px-8 py-4 bg-bluePrimary">
      <div style={{ flexBasis: "20%" }}>
        <BackButton />
      </div>
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
            link="/app/helper/createHelper/standort/"
          />
        </div>
        <div style={{ flex: 1 }}>
          <div className="pl-2">
            <ButtonSecondaryOrange
              onClick={() =>
                repository.createHelper(
                  convertToNewHelperPostRequest(requestData)
                )
              }
            >
              vorerst nicht
            </ButtonSecondaryOrange>
          </div>
        </div>
      </div>
    </div>
  );
}
