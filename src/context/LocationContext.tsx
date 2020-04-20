import React from "react";
import { Skill } from "../repository/model/helprequest";
import { NewHelperPostRequest } from "../repository/model/helper";
import Chance from "chance";

let chance = new Chance();

/** what we collect while boarding */
export interface HelperOnBoardingStore {
  lastName: string;
  firstName: string;
  selected_competences: { id: string; key: string; name: string }[];
  location: LocationStore;
}

/** what we get from browser api */
type LocationStore = {
  latitude: string;
  longitude: string;
  automatic: boolean;
};

const locMockdata: LocationStore = {
  latitude: "abc",
  longitude: "efg",
  automatic: false,
};

const defaultRequestData: HelperOnBoardingStore = {
  lastName: "",
  firstName: "",
  selected_competences: [],
  location: locMockdata,
};

/** converts the boarded infos ready for post request */
export const convertToNewHelperPostRequest = (
  data: HelperOnBoardingStore
): NewHelperPostRequest => {
  return {
    lastName: data.lastName,
    firstName: data.firstName,
    email: chance.email(),
    // TODO update
    isGPSLocationAllowed: data.location.automatic,
    address: {
      street: chance.street(),
      houseNumber: String(chance.integer({ min: 1, max: 20 })),
      postalCode: chance.zip(),
      city: chance.city(),
      country: chance.country(),
    },
    // "9d8af7fc-a430-43c3-aa75-32c5c73f90ca" test uuid
    qualifications: data.selected_competences.map((el) => el.key),
    avatar: "no avatar",
  };
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
