import React, { useContext } from "react";
import Reactions from "./Reactions";
import OpenRequest from "./OpenRequest";
import ReqProvider, { ReqContext } from "../../context/MockRequests";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [data, setData] = useContext(ReqContext);

  return (
    <ReqProvider>
      <div className="flex flex-col w-full h-full px-8 py-4 overflow-y-auto w-full scrolling-touch">
        <div style={{ flex: 2 }}>
          <h1 className="question font-dm-sans-h1">
            Hi DRK Berlin, das gibt's Neues.
          </h1>
        </div>

        <div>
          <div className="unlimited text-center mb-2">
            <Link to="request/create">
              <div>Neue Anzeige erstellen</div>
            </Link>
          </div>
          <Reactions reactNum={12} />
        </div>
        {data.map((el) => {
          return <OpenRequest {...el} />;
        })}
      </div>
    </ReqProvider>
  );
}
