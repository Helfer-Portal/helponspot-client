import React from "react";
import { Link } from "react-router-dom";
import ButtonWithLink from "../../components/ButtonWithLink";
import { ButtonSecondaryOrange } from "../../components/UiKit";
import ButtonPrimaryGreen from "../../components/UiKit/ButtonPrimaryGreen";

export default function OpenRequest(props) {
  //TODO: define alias
  const roleString = props.helper !== true ? "organisation" : "helper";
  return (
    <div className="flex flex-col my-4 p-4 max-w-sm bg-white rounded-lg">
      {/* use absolute path to prevent problems when calling from a different path than expected */}
      <Link to={`/app/${roleString}/request/details/${props.req_id}`}>
        <div>
          <h5 className="font-dm-sans font-bold text-figmaDescription">
            {props.title}
          </h5>
        </div>
      </Link>

      <div>
        <p className="font-inter text-figmaParagraph">
          noch {props.timeLast} |{" "}
          {props.reqHelpers < 0 ? "alle" : props.reqHelpers} Teilnehmer
        </p>
      </div>
      {!props.helper && (
        <div className="mt-2 flex flex-col">
          <div className="my-1 flex">
            <div className="bg-figmaAccept inline-block rounded-lg px-2 py-1">
              {props.confirmed} angenommen
            </div>
          </div>

          <div className="my-1 flex">
            <div className="bg-figmaDeny inline-block rounded-lg px-2 py-1">
              {props.denied} abgelehnt
            </div>
          </div>

          <div className="my-1 flex">
            <div className="bg-figmaOpen inline-block rounded-lg px-2 py-1">
              {props.open} offen
            </div>
          </div>
        </div>
      )}
      {/* props.overview for when a list of all requests is to be displayed; this list should not contain buttons */}
      {props.helper && !props.overview && (
        <div style={{ flex: 1 }} className="flex py-4 flex-row">
          {/*settingPermission to True triggers update */}
          <div style={{ flex: 1 }} className="pr-2">
            <ButtonPrimaryGreen
              children="ja!"
              link="/app/helper/createHelper/standort/"
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
      )}
    </div>
  );
}
