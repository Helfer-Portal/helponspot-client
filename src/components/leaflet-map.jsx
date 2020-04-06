import React from "react";
import "./leaflet-map.css";
import { Map, Marker, TileLayer, GeoJSON } from "react-leaflet";
import L from "leaflet";
import helperIconUrl from "../assets/helfer.png";
import iconShadowUrl from "../assets/shadow.png";

/** Definition of custom icons **/

export const helperIcon = new L.Icon({
  iconUrl: helperIconUrl,
  iconAnchor: [32, 66],
  popupAnchor: [0, -55],
  iconSize: [64, 66],
  shadowUrl: iconShadowUrl,
  shadowSize: [80, 82],
  shadowAnchor: [32, 66],
});

/** Leaflet Map component that renders given GeoJSON */
class LeafletMap extends React.Component {
  geoJSONStyle() {
    return {
      color: "#1f2021",
      weight: 1,
      fillOpacity: 0.5,
      fillColor: "#fff2af",
    };
  }

  onEachFeature(feature, layer) {
    var popupContent = "";
    popupContent += "<Popup>";
    popupContent += "<p><b>Bringt mit:</b></p>";
    popupContent += "<ul>";
    feature.properties.qualities.forEach((quality) => {
      popupContent += "<li>" + quality + "</li>";
    });
    popupContent += "</ul></Popup>";
    layer.bindPopup(popupContent);
  }

  pointToLayer(feature, latlng) {
    //return L.circleMarker(latlng, null);
    return L.marker(latlng, { icon: helperIcon });
  }

  render() {
    return (
      <Map
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
        center={this.props.location}
        zoom={11}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON
          data={this.props.geojson.default.features}
          pointToLayer={this.pointToLayer.bind(this)}
          onEachFeature={this.onEachFeature.bind(this)}
        />
      </Map>
    );
  }
}

export default LeafletMap;
