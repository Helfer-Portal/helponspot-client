import React from "react";
import LeafletMap from "../../components/LeafletMap";
import * as requestsJson from "../../assets/requestsForMap.json";
import HelperMap from "./HelperMap"; // Mock data until api is ready
import { AuthorizationContext } from "../../context/AuthorizationStore";
import RepositoryImpl from "../../repository/repository";

let repository = new RepositoryImpl();
/*
These are bits of information that need to be passed to the generalised LeafletMap component
*/
let geojson = requestsJson; // must be filtered by request to api
let location = [53.55, 10.05]; // from geocoding the address of the request
let icon = "organisation"; // currently available: "helper", "organisation"

export function RequestMap(props) {
  let { reqData, ...rest } = props;
  console.log(reqData);
  return (
    <div style={{ position: "relative" }} className="h-full w-full">
      <LeafletMap
        {...rest}
        geojson={{
          type: "FeatureCollection",
          name: "helpers",
          crs: {
            type: "name",
            properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" },
          },
          bbox: [
            9.77211481047126,
            53.4183350054373,
            10.2690464035447,
            53.6905187299499,
          ],
          features: [
            {
              type: "Feature",
              properties: {
                id: 0,
                title: "Jetzt beim DRK anpacken",
                qualities: ["LKW", "Ersthelfer", "Blutspender"],
              },
              bbox: [10.227297, 53.418335, 10.227297, 53.418335],
              geometry: { type: "Point", coordinates: [10.227297, 53.418335] },
            },
            ,
            ...reqData,
          ],
        }}
        location={location}
        icon={icon}
      ></LeafletMap>
    </div>
  );
}

export default function RequestsMapForHelper(props) {
  const [authInfo, setAuthInfo] = React.useContext(AuthorizationContext);
  const [reqData, setReqData] = React.useState([]);
  const [reqDetails, setReqDetails] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    if (authInfo.useruuid) {
      (async () => {
        try {
          setLoading(true);
          setIsError(false);
          let reqData = await repository.getHelpRequestsForUserId(
            authInfo.useruuid
          );
          let reqDetailsApiCalls = reqData.map(async (req) => {
            let reqDetailsResult = await repository.getHelpRequestById(req.id);
            return reqDetailsResult;
          });
          let apiResults = await Promise.all(reqDetailsApiCalls);
          setReqDetails(apiResults);
          if (reqData) {
            setReqData(reqData);
            setLoading(false);
          } else {
            throw new Error("Unable to fetch All Requests");
          }
        } catch (err) {
          setIsError(true);
          console.log(err);
        }
      })();
    }
  }, [authInfo.useruuid]);

  const geoJsonFeatureForReqResult = (reqResult) => {
    return {
      type: "Feature",
      properties: {
        id: reqResult.id,
        title: reqResult.name,
        qualities: reqResult.skills.map((el) => el.name),
      },
      bbox: [10.227297, 53.418335, 10.227297, 53.418335],
      geometry: reqResult.address.point,
    };
  };

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
        <RequestMap
          reqData={reqDetails.map((el) => geoJsonFeatureForReqResult(el))}
          role="helper"
        />
      </div>
    </div>
  );
}
