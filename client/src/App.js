import React, { Component } from "react";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import Grid from "./components/Grid";

import "./App.css";

class App extends Component {
  state = {
    lat: 47.573142,
    lng: -122.382255,
    zoom: 16
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div className="Container">
        <h1>Map Road Traffic Representation</h1>
        <Map
          className="Map"
          center={position}
          zoom={this.state.zoom}
          zoomControl={false}
          //scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            //attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            //url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          <Grid />
        </Map>
      </div>
    );
  }
}

export default App;
