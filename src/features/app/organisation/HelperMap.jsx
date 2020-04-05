import React from "react";
import QuestionWithLabel from "../../../components/QuestionWithLabel";
import LeafletMap from "../../../components/leaflet-map";
import * as helpersJson from "../../../assets/helpers.json";

// Diese Informationen müssen an LeafletMap übergeben werden
var location=[53.55, 10.05];
var geojson = helpersJson;

export default function HelperMap() {
  return (
      <div>
        <QuestionWithLabel
            question="Diese Leute sind bereit zu helfen:"
            label="Helferkarte"
        />
        <LeafletMap location={location} geojson={geojson}></LeafletMap>
      </div>
  );
}
