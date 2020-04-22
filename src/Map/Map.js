import React from "react";
import { connect } from "react-redux";

import Location from "../Components/Location";

import { updateLngLat, updateZoom } from "../Store/Actions/Location";

import { loadMap, onLoadConfig, onMoveConfig } from "./helper";

import "./Map.css";

class Map extends React.Component {
  componentDidMount() {
    const { updateCoords, updateZoom } = this.props;
    const map = loadMap(this.mapContainer);

    onLoadConfig(map);
    onMoveConfig(map, updateCoords, updateZoom);
  }

  render() {
    return (
      <div>
        <Location />
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateCoords: (lng, lat) => dispatch(updateLngLat(lng, lat)),
    updateZoom: (zoom) => dispatch(updateZoom(zoom)),
  };
}

export default connect(null, mapDispatchToProps)(Map);
