import React from "react";
import { Link } from "react-router-dom";
import {
  ButtonSecondaryOrange,
  ButtonPrimaryOrange,
} from "../../components/UiKit";

export default function userRequest(props) {
  return (
    <div className="flex flex-col my-4 p-4 max-w-sm bg-white rounded-lg">
      <Link to={`../organisation/request/details/${props.req_id}`}>
        <div>
          <h5 className="font-dm-sans font-bold text-figmaDescription">
            Helft tragen und Transportieren
          </h5>
        </div>
      </Link>

      <div className="border-b-2 pb-2">
        <p className="font-inter text-figmaParagraph">
          DRK Berlin | 11km entfernt
        </p>
      </div>

      <div className="mt-2 flex flex-col">
        <div>
          <h5 className="font-dm-sans font-bold text-figmaDescription">
            bist du dabei?
          </h5>
        </div>

        <div className="flex flex-row">
          <div style={{ flex: 1 }} className="pr-2 my-1 flex">
            <ButtonPrimaryOrange
              onClick={() => alert("subbr sach handschuhfach")}
            >
              ja
            </ButtonPrimaryOrange>
          </div>

          <div style={{ flex: 1 }} className="pl-2 my-1 flex">
            <ButtonSecondaryOrange border>nein</ButtonSecondaryOrange>
          </div>
        </div>
      </div>
    </div>
  );
}
