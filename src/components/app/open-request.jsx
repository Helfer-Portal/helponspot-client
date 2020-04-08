import React from "react";
import { Link } from "react-router-dom";

export default function OpenRequest(props) {
  return (
    <div className="flex flex-col my-4 p-4 max-w-sm bg-white rounded-lg">
      <Link to={`../organisation/request/details/${props.req_id}`}>
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
    </div>
  );
}
