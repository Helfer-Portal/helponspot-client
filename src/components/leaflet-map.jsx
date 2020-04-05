import React from "react";
import "./leaflet-map.css";
import { Map, TileLayer, GeoJSON} from 'react-leaflet';
import * as helpersJson from "./helpers.json";


/** Leaflet Map component that renders given GeoJSON */
 class LeafletMap extends React.Component {

   geoJSONStyle() {
     return {
       color: '#1f2021',
       weight: 1,
       fillOpacity: 0.5,
       fillColor: '#fff2af',
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
      const position = [53.55, 10.05]
      return (
        <Map style={{position: 'relative', width: '100%', height: '100%'}} center={position} zoom={11}>
           <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
           />
           <GeoJSON
            data={helpersJson.features}
            style={this.geoJSONStyle}
            onEachFeature={this.onEachFeature}
           />
         </Map>
      );
      }
}

export default LeafletMap;