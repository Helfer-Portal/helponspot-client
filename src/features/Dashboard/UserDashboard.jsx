import React, { useContext } from "react";
import { Link } from "react-router-dom";

import OpenRequest from "./OpenRequest";
import Reactions from "./Reactions";
import ReqProvider, { ReqContext } from "../../context/MockRequests";
import { ButtonPrimaryBlue } from "../../components/UiKit";

export default function UserDashboard() {
  const [data, setData] = useContext(ReqContext);
  return (
    <ReqProvider>
      <div className="flex flex-col w-full px-8 py-4 overflow-y-auto w-full scrolling-touch">
        <div style={{ flex: 2 }}>
          <h1 className="question font-dm-sans-h1">
            Hi Max, bist du bereit, anzupacken?
          </h1>
          <div className="my-1 flex">
            <div className="bg-figmaOrange text-white inline-block rounded-lg px-2 py-1">
              2 offen
            </div>
          </div>
        </div>

        <div></div>
        {data.map((el) => {
          el = { ...el, helper: true };
          return <OpenRequest {...el} />;
        })}
      </div>
    </ReqProvider>
  );
}
