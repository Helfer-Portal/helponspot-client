import React from "react";

const mockData =
  {
    latitude: "abc",
    longitude: "efg",
    automatic:false
  };


export const LocContext = React.createContext(
    [mockData, ()=>{}]
);

/** stores dummy data for help requests across pages */
export default function LocProvider(props) {
  const [data, setData] = React.useState(mockData);

  return (
    <LocContext.Provider value={[data, setData]}>
      {props.children}
    </LocContext.Provider>
  );
}
