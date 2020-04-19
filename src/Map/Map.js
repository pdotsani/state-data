import React from "react";
import mapboxgl from "mapbox-gl";

import "./Map.css";

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -119.41,
      lat: 36.77,
      zoom: 5,
    };
  }

  componentDidMount() {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
  }

  render() {
    return (
      <div>
        <div>
          <div className="sidebarStyle">{`${this.state.lng} : ${this.state.lat}`}</div>
        </div>
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}
