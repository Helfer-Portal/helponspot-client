import React from "react";
import LeafletMap from "../../components/LeafletMap";
import * as requestsJson from "../../assets/requestsForMap.json";
import HelperMap from "./HelperMap"; // Mock data until api is ready

/*
These are bits of information that need to be passed to the generalised LeafletMap component
*/
let geojson = requestsJson; // must be filtered by request to api
let location = [53.55, 10.05]; // from geocoding the address of the request
let icon = "organisation"; // currently available: "helper", "organisation"

export function RequestMap(props) {
  console.log(props);
  return (
    <div style={{ position: "relative" }} className="h-full w-full">
      {/* <QuestionWithLabel
            question="Diese Leute sind bereit zu helfen:"
            label="Helferkarte"
        /> */}
      <LeafletMap
        {...props}
        geojson={geojson}
        location={location}
        icon={icon}
      ></LeafletMap>
    </div>
  );
}

export default function RequestsMapForHelper(props) {
  return (
    <div
      style={{ position: "relative" }}
      className="flex flex-col w-full h-full px-8 py-4 overflow-y-auto"
    >
      <div
        style={{
          position: "absolute",
          zIndex: 2,
          // overflow: "hidden",
          height: "100%",
          // minHeight: 1000,
          width: "100%",
          top: 0,
          left: 0,
          visibility: props.modal ? "hidden" : "initial",
        }}
      >
        {/* Info about the Map */}
        <div
          style={{
            position: "absolute",
            zIndex: 1,
            right: "5%",
            width: "60%",
          }}
          className="bg-white my-4 p-1 rounded"
        >
          <h4 className="font-bold font-dm-sans text-md">
            Was kann ich machen?
          </h4>
          <p className="font-inter text-sm">
            Durch klicken, können einzelne Helfer vorgemerkt werden.
          </p>
        </div>
        {/* Buttons bottom */}
        <div
          style={{
            position: "absolute",
            zIndex: 1,
            top: "auto",
            left: "auto",
            bottom: "10%",
            width: "100%",
          }}
          className="px-4"
        ></div>
        <RequestMap role="helper" />
      </div>
    </div>
  );
}
