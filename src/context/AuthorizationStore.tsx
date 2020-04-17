import React, { Dispatch } from "react";

export enum UserRole {
  helper,
  organisation,
}

export interface Authorization {
  role: UserRole;
}

export const AuthorizationContext = React.createContext<
  Partial<(Authorization | any)[]>
>([]);

/**
 * Stores the current input of the new help request form
 */
export default function AuthorizationContextProvider(props: {
  children: JSX.Element;
}) {
  const [data, setData] = React.useState<Partial<Authorization>>({
    role: UserRole.organisation,
  });

  return (
    <AuthorizationContext.Provider value={[data, setData]}>
      {props.children}
    </AuthorizationContext.Provider>
  );
}
