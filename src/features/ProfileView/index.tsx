import React from "react";
import { useParams } from "react-router-dom";

import OrgProfileView from "../ProfileOrg";
import { ProfileUserAccount } from "../ProfileUser";

const ProfileView = () => {
  let { role } = useParams();

  if (role == "helper") {
    return <ProfileUserAccount />;
  } else if (role == "organisation") {
    return <OrgProfileView />;
  }
};

export default ProfileView;
