import React from "react";

const mockData = [
  {
    title: "Helft Tragen und Transportieren",
    timeLast: "5 Tage",
    reqHelpers: 30,
    confirmed: 14,
    denied: 14,
    open: 12,
    req_id: 1,
  },
  {
    title: "Blutspender gesucht",
    timeLast: "2 Tage",
    reqHelpers: -1,
    confirmed: 140,
    denied: 0,
    open: 0,
    req_id: 2,
  },
];

export const ReqContext = React.createContext();

/** stores dummy data for help requests across pages */
export default function ReqProvider(props) {
  const [data, setData] = React.useState(mockData);

  return (
    <ReqContext.Provider value={[data, setData]}>
      {props.children}
    </ReqContext.Provider>
  );
}
