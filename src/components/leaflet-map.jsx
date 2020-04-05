import React from "react";
import "./leaflet-map.css";
import { Map, TileLayer, GeoJSON} from 'react-leaflet';


/** Leaflet Map component that renders given GeoJSON */
 class LeafletMap extends React.Component {

   constructor(props){
       super(props);
   }

   geoJSONStyle() {
     return {
       color: '#000000',
       weight: 1,
       fillOpacity: 0.5,
       fillColor: '#000000',
     }
   }

    onEachFeature(feature, layer) {
       var popupContent = "";
       popupContent += "<Popup>";
       popupContent += "<p><b>Bringt mit:</b></p>";
       popupContent += "<ul>";
       feature.properties.qualities.forEach(quality => {popupContent += "<li>" + quality + "</li>"});
       popupContent += "</ul></Popup>"
       layer.bindPopup(popupContent)
     }


     render(){
      return (
        <Map center={this.props.location} zoom={11}>
           <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
           />
           <GeoJSON
            data={this.props.geojson.default.features}
            style={this.geoJSONStyle}
            onEachFeature={this.onEachFeature}
           />
         </Map>
      );
      }
}

export default LeafletMap;