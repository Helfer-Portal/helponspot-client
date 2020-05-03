import React, { Dispatch } from "react";
import { Skill, PostOrganisation } from "../repository/model/helprequest";

export const OrgBoardingPostStoreContext = React.createContext<any>([]);

/**
 * Stores the current input of the new help request form
 */
export default function OrgBoardingPostStoreContextProvider(props: {
  children: JSX.Element;
}) {
  const [data, setData] = React.useState<Partial<PostOrganisation>>({});

  return (
    <OrgBoardingPostStoreContext.Provider value={[data, setData]}>
      {props.children}
    </OrgBoardingPostStoreContext.Provider>
  );
}
