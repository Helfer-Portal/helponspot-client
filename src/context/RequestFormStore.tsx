import React, { Dispatch } from "react";
import { Skill } from "../repository/model/helprequest";

export type RequestForm = {
  title: string;
  street: string;
  town: string;
  selected_competences: Skill[];
  added_competences: Skill[];
  helperNum: number;
  date: Date;
  dateDiff: string;
  description: string;
};

export const RequestFormContext = React.createContext<
  Partial<(RequestForm | any)[]>
>([]);

/**
 * Stores the current input of the new help request form
 */
export default function RequestFormProvider(props: { children: JSX.Element }) {
  const [data, setData] = React.useState<Partial<RequestForm>>({});

  return (
    <RequestFormContext.Provider value={[data, setData]}>
      {props.children}
    </RequestFormContext.Provider>
  );
}
