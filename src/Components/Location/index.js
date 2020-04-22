import React from "react";

import { connect } from "react-redux";

const Location = ({ lng, lat }) => {
  return <div className="sidebarStyle">{`${lng} : ${lat}`}</div>;
};

function mapStateToProps({ Location }) {
  return {
    lng: Location.lng,
    lat: Location.lat,
  };
}

export default connect(mapStateToProps)(Location);
