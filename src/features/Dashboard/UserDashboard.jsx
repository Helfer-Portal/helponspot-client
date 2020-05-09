import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import OpenRequest from "./OpenRequest";
import Reactions from "./Reactions";
import ReqProvider, { ReqContext } from "../../context/MockRequests";
import { ButtonPrimaryBlue } from "../../components/UiKit";
import RepositoryImpl from "../../repository/repository";
import { AuthorizationContext } from "../../context/AuthorizationStore";

let repository = new RepositoryImpl();
export default function UserDashboard() {
  let [authData, setAuthData] = useContext(AuthorizationContext);
  const [data, setData] = useState([]);

  React.useEffect(() => {
    repository.getHelpRequests().then((requests) => {
      console.log("Received Requests, setting ...");
      console.log("data", requests);
      setData(requests);
    });
  }, []);
  return (
    <ReqProvider>
      <div
        style={{ position: "relative" }}
        className="flex flex-col w-full h-full px-8 py-4 overflow-y-auto"
      >
        <div style={{ flex: 2 }}>
          <h1 className="question font-dm-sans-h1">
            Hi {authData.firstName}, bist du bereit, anzupacken?
          </h1>

          <div className="my-1 flex">
            <div className="bg-figmaOrange text-white inline-block rounded-lg px-2 py-1">
              {data.length} offen
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-shrink flex-grow-0">
          {data.map((el) => {
            el = { ...el, helper: true };
            return <OpenRequest {...el} />;
          })}
        </div>
      </div>
    </ReqProvider>
  );
}
