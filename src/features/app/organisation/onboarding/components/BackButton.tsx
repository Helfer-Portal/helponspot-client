import React from "react";
import { useHistory } from "react-router-dom";

/** Button to navigate back in Org Story */
const BackButton = () => {
  let history = useHistory();

  return (
    <button
      onClick={() => history.goBack()}
      className="underline font-inter font-bold text-figmaDescription"
    >
      ← zurück
    </button>
  );
};

export default BackButton;
