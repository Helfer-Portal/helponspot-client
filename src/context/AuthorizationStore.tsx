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
  orgUUIDs?: UUID[];
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

      /* moved to AuthorizationWrapper, so values are loaded after login
      setData({
        ...data,
        useruuid: userData.id,
        orgUUIDs: userData.organisations.map((el) => el.id),

       */
    })();
  }, []);

  return (
    <AuthorizationContext.Provider value={[data, setData]}>
      {props.children}
    </AuthorizationContext.Provider>
  );
}
