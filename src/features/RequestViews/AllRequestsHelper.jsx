import React, { useContext } from "react";

import OpenRequest from "../Dashboard/OpenRequest";
import ReqProvider, { ReqContext } from "../../context/MockRequests";

/* Component that renders all/some recent requests for the helper, so that he can apply and search through them */

export default function AllRequests() {
  const [data, setData] = useContext(ReqContext);
  return (
    <ReqProvider>
      <div className="flex flex-col w-full px-8 py-4 overflow-y-auto w-full scrolling-touch">
        <div style={{ flex: 2 }}>
          <h1 className="question font-dm-sans-h1">Aktuelle Anzeigen</h1>
        </div>

        {data.map((el) => {
          el = { ...el, helper: true, overview: true };
          return <OpenRequest {...el} />;
        })}
      </div>
    </ReqProvider>
  );
}
