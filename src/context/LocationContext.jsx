import React from "react";
import { Skill } from "../repository/model/helprequest";

const locMockdata = {
  latitude: "abc",
  longitude: "efg",
  automatic: false,
};

const defaultRequestData = {
  name: null,
  selected_competences: [],
  location: locMockdata,
};

export const CreateHelperContext = React.createContext([]);

/** stores dummy data for help requests across pages */
export default function CreateHelperProvider(props) {
  const [requestData, setRequestData] = React.useState(defaultRequestData);

  return (
    <CreateHelperContext.Provider value={[requestData, setRequestData]}>
      {props.children}
    </CreateHelperContext.Provider>
  );
}
