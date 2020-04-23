import React from "react";

import { connect } from "react-redux";

import "./Menu.css";

const Menu = ({ isToggleBoundaries, toggleCABoundaries }) => {
  return (
    <div className="menu">
      <div className="menu_selection">
        <div className="menu_selection_label">County Boundaries</div>
        <input
          type="checkbox"
          checked={isToggleBoundaries}
          onChange={toggleCABoundaries}
        />
      </div>
    </div>
  );
};

function mapStateToProps({ CountyBoundaries }) {
  return {
    isToggleBoundaries: CountyBoundaries.toggle,
  };
}

export default connect(mapStateToProps)(Menu);
