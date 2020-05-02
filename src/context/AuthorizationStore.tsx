import React, { Dispatch } from "react";
import { Auth } from "aws-amplify";
import RepositoryImpl from "../repository/repository";

let repository = new RepositoryImpl();

export enum UserRole {
  helper,
  organisation,
}

export interface Authorization {
  useruuid: string;
  role: UserRole;
  accessToken: string;
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

  // This side effect loads the uuid for the user via context it is distributed over all components
  React.useEffect(() => {
    (async () => {
      let user = await Auth.currentAuthenticatedUser();
      //   let userData = await repository.getUserInfoByEmail(user.attributes.email);

      // setData({ ...data, useruuid:"9d8af7fc-a430-43c3-aa75-32c5c73f90ca" });
    })();
  }, []);

  return (
    <AuthorizationContext.Provider value={[data, setData]}>
      {props.children}
    </AuthorizationContext.Provider>
  );
}
