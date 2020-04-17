import QuestionWithLabel from "../../../components/QuestionWithLabel";
import React, {useContext, useState} from "react";
import ButtonWithLink from "../../../components/ButtonWithLink";
import { ButtonSecondaryOrange } from "../../../components/UiKit";
import {LocContext} from "../../../context/LocationContext";
import {usePosition} from "../../../repository/useLocation";
import {Redirect} from "react-router-dom";


export default function HelperStandort() {
    let [locPermissionButton, setLocPermission] = useState(false);
    let [redirect, setRedirect] = useState(false);



    let [locationContext, setLocationContext] = React.useContext(LocContext);
    console.log("loc")
    console.log(locationContext)

    let {latitude, longitude, error} = usePosition(locPermissionButton);
    if(locPermissionButton && !error ){
        locationContext = {latitude:latitude, longitude: longitude, automatic:true};
        setLocationContext(locationContext);
        setRedirect(true);
    }
    const triggerUpdate = () => {
        locPermissionButton = true;
    }
    if (redirect) {
        console.log("redirecting")
    //    return <Redirect to={this.state.redirect}/>
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
        <div onClick={ () => setLocPermission(true)}  style={{ flex: 1 }} className="pr-2">
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
