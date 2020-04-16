import React, { useContext } from "react";
import { Link } from "react-router-dom";

import OpenRequest from "./OpenRequest";
import Reactions from "./Reactions";
import ReqProvider, { ReqContext } from "../../context/MockRequests";
import { ButtonPrimaryBlue } from "../../components/UiKit";

export default function Dashboard() {
  const [data, setData] = useContext(ReqContext);

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
}
