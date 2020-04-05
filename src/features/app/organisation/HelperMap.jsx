import React from "react";
import QuestionWithLabel from "../../../components/QuestionWithLabel";
import LeafletMap from "../../../components/leaflet-map";
import * as geojson from "../../../assets/helpers.json";

export default function HelperMap() {
  return (
      <div>
        <QuestionWithLabel
            question="Diese Leute sind bereit zu helfen:"
            label="Helferkarte"
        />
        <LeafletMap location={[53.55, 10.05]} geojson={geojson}></LeafletMap>
      </div>
  );
}