import React from "react";
import "./leaflet-map.css";
import { Map, Marker, TileLayer, GeoJSON } from "react-leaflet";
import L from "leaflet";
import helperIconUrl from "../assets/helfer.png";
import organisationIconUrl from "../assets/organisationen.png";
import iconShadowUrl from "../assets/shadow.png";

/* This component relies on leaflet.css, which
currently is imported in a link tag in index.html */

/* Definition of custom icons */

export const helperIcon = new L.Icon({
  iconUrl: helperIconUrl,
  iconAnchor: [32, 66],
  popupAnchor: [0, -55],
  iconSize: [64, 66],
  shadowUrl: iconShadowUrl,
  shadowSize: [80, 82],
  shadowAnchor: [32, 66],
});

export const organisationIcon = new L.Icon({
  iconUrl: organisationIconUrl,
  iconAnchor: [32, 66],
  popupAnchor: [0, -55],
  iconSize: [64, 66],
  shadowUrl: iconShadowUrl,
  shadowSize: [80, 82],
  shadowAnchor: [32, 66],
});

export const icons = {
  helper: helperIcon,
  organisation: organisationIcon,
};

/* Leaflet Map component that renders given GeoJSON */

class LeafletMap extends React.Component {
  onEachFeature(feature, layer) {
    /* The method bindPopup only takes strings
    but the string can contain html, which will
    then be parsed and rendered */
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
    return L.marker(latlng, { icon: icons[this.props.icon] });
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
