import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import OpenRequest from "./OpenRequest";
import UserRequest from "./UserRequest";
import Reactions from "./Reactions";
import ReqProvider, { ReqContext } from "../../context/MockRequests";
import { ButtonPrimaryBlue } from "../../components/UiKit";

export default function Dashboard() {
  const [data, setData] = useContext(ReqContext);

  let { role } = useParams();

  if (role == "organisation") {
    return (
      <ReqProvider>
        <div className="bg-bluePrimary flex flex-col w-full h-full px-8 py-4 overflow-y-auto w-full scrolling-touch">
          <div style={{ flex: 2 }}>
            <h1 className="question font-dm-sans-h1">
              Hi DRK Berlin, das gibt's Neues.
            </h1>
          </div>

          <div>
            <ButtonPrimaryBlue className="mb-2">
              <Link to="request/create">
                <div>Neue Anzeige erstellen</div>
              </Link>
            </ButtonPrimaryBlue>
            <Reactions reactNum={12} />
          </div>
          {data.map((el) => {
            return <OpenRequest {...el} />;
          })}
        </div>
      </ReqProvider>
    );
  } else if (role == "helper") {
    return (
      <ReqProvider>
        <div className="bg-bluePrimary flex flex-col w-full h-full px-8 py-4 overflow-y-auto w-full scrolling-touch">
          <div style={{ flex: 1 }}>
            <h1 className="question font-dm-sans-h1">
              Hi Max Mustermann, das gibt's Neues.
            </h1>
          </div>
          <div style={{ flex: 5 }}>
            {data.map((el) => {
              return <UserRequest {...el} />;
            })}
          </div>
        </div>
      </ReqProvider>
    );
  } else {
    alert("error");
  }
}
