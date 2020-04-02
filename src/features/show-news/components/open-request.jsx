import React from "react";

export default function OpenRequest(props) {
  return (
    <div>
      <div>
        <h5>{props.title}</h5>
      </div>

      <div>
          <p>noch {props.timeLast} | {props.reqHelpers} Teilnehmer</p>
      </div>

      <div>
          {props.confirmed} angenommen
      </div>

      <div>
          {props.denied} abgelehnt
      </div>

      <div>
          {props.open} offen
      </div>
    </div>
  );
}
