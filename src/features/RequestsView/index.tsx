import React from "react";

import AllRequests from "../AllRequests";
import CurrentRequestsView from "../CurrentRequests";
import { useParams } from "react-router-dom";

const RequestsView = () => {
  const { role } = useParams();
  if (role == "helper") {
    return <CurrentRequestsView />;
  } else if (role == "organisation") {
    return <AllRequests />;
  }
};

export default RequestsView;
