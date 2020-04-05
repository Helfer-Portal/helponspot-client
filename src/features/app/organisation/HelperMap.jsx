import React from "react";
import QuestionWithLabel from "../../../components/QuestionWithLabel";
import LeafletMap from "../../../components/leaflet-map";

export default function HelperMap() {
  return (
      <div style={{position: 'relative'}} className="h-full w-full">
        <QuestionWithLabel
            question="Diese Leute sind bereit zu helfen:"
            label="Helferkarte"
        />
        <LeafletMap></LeafletMap>
      </div>
  );
}
