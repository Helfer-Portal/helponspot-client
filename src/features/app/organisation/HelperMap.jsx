import React from "react";
import QuestionWithLabel from "../../../components/QuestionWithLabel";
import LeafletMap from "../../../components/leaflet-map";
import * as helpersJson from "../../../assets/helpers.json"; // Mock data until api is ready

/*
These are bits of information that need to be passed to the generalised LeafletMap component
*/
let geojson = helpersJson;
let location = [53.55, 10.05];

export default function HelperMap(props) {
  return (
    <div style={{ position: "relative" }} className="h-full w-full">
      {/* <QuestionWithLabel
            question="Diese Leute sind bereit zu helfen:"
            label="Helferkarte"
        /> */}
      <LeafletMap geojson={geojson} location={location}></LeafletMap>
    </div>
  );
}
