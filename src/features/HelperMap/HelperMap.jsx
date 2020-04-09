import React from "react";
import QuestionWithLabel from "../../components/QuestionWithLabel";
import LeafletMap from "../../components/LeafletMap";
import * as helpersJson from "../../assets/helpers.json"; // Mock data until api is ready

/*
These are bits of information that need to be passed to the generalised LeafletMap component
*/
let geojson = helpersJson; // must be filtered by request to api
let location = [53.55, 10.05]; // from geocoding the address of the request
let icon = "helper"; // currently available: "helper", "organisation"

export default function HelperMap(props) {
  return (
    <div style={{ position: "relative" }} className="h-full w-full">
      {/* <QuestionWithLabel
            question="Diese Leute sind bereit zu helfen:"
            label="Helferkarte"
        /> */}
      <LeafletMap
        geojson={geojson}
        location={location}
        icon={icon}
      ></LeafletMap>
    </div>
  );
}
