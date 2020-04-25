import React from "react";
import { connect } from "react-redux";

import Location from "../Components/Location";
import Menu from "../Components/Menu";

import { updateLngLat, updateZoom } from "../Store/Actions/Location";
import { countyBoundariesToggle } from "../Store/Actions/CountyBoundaries";

import {
  loadMap,
  onLoadConfig,
  onMoveConfig,
  toggleCAMapBoundaries,
} from "./helper";

import "./Map.css";

class Map extends React.Component {
  componentDidMount() {
    const { updateCoords, updateZoom } = this.props;
    this.map = loadMap(this.mapContainer);

    onLoadConfig(this.map);
    onMoveConfig(this.map, updateCoords, updateZoom);
  }

  toggleCABoundaries = () => {
    const { toggleBoundaries, isToggleBoundaries } = this.props;
    toggleBoundaries(isToggleBoundaries);
    toggleCAMapBoundaries(this.map, isToggleBoundaries);
  };

  render() {
    return (
      <div>
        <Menu toggleCABoundaries={this.toggleCABoundaries} />
        <Location />
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

function mapStateToProps({ CountyBoundaries }) {
  return {
    isToggleBoundaries: CountyBoundaries.toggle,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateCoords: (lng, lat) => dispatch(updateLngLat(lng, lat)),
    updateZoom: (zoom) => dispatch(updateZoom(zoom)),
    toggleBoundaries: (toggle) => dispatch(countyBoundariesToggle(toggle)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
