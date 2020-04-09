import React from "react";
import {
  Map,
  Marker,
  TileLayer,
  GeoJSON,
  Popup,
  FeatureGroup,
} from "react-leaflet";
import L from "leaflet";
import helperIconUrl from "../assets/helfer.png";
import organisationIconUrl from "../assets/organisationen.png";
import iconShadowUrl from "../assets/shadow.png";
import { Link } from "react-router-dom";

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
  constructor(props) {
    super(props);
    this.data = this.props.geojson.default.features;

    this.state = {
      viewport: {
        center: this.props.location,
        zoom: 11,
      },
      previousViewport: {
        center: this.props.location,
        zoom: 11,
      },
    };
  }
  componentDidMount() {
    /* The map object get's it viewport property on change of
    center or zoom level. Initially it is undefined. To avoid
    errors, we pass it it's initial viewport upon rendering. */
    this.map.viewport = this.state.viewport;
  }

  zoomToMarker(feature) {
    let coordinates = [
      feature.geometry.coordinates[1] + 0.01,
      feature.geometry.coordinates[0],
    ];
    return () => {
      this.setState({ previousViewport: this.map.viewport });
      this.setState({ viewport: { center: coordinates, zoom: 13 } });
    };
  }
  zoomBack() {
    this.setState({ viewport: this.state.previousViewport });
  }

  createMarkerWithPopup(feature) {
    const id = feature.properties.id;
    const name = feature.properties.name;

    return (
      <Marker
        onClick={this.zoomToMarker(feature)}
        onPopupclose={this.zoomBack.bind(this)}
        icon={icons[this.props.icon]}
        position={{
          lat: feature.geometry.coordinates[1],
          lng: feature.geometry.coordinates[0],
        }}
      >
        <Popup>
          <Link to={`/app/organisation/user/${id}`}> {name}</Link>
          <p>
            <b>Bringt mit:</b>
          </p>
          "
          {feature.properties.qualities.map((quality) => (
            <li> {quality} </li>
          ))}
          ;
        </Popup>
      </Marker>
    );
  }

  render() {
    return (
      <Map
        ref={(ref) => {
          this.map = ref;
        }} // makes map object available
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
        center={this.state.viewport.center}
        zoom={this.state.viewport.zoom}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {this.data.map((feature) => {
          return this.createMarkerWithPopup(feature);
        })}
      </Map>
    );
  }
}
export default LeafletMap;
