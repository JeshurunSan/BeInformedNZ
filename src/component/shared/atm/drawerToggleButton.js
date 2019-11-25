import React from "react";

import "../../../css/shared/atm/drawerToggleButton.css";

const DrawerToggleButton = props => {
  return (
    <button className="toggle-button" onClick={props.click}>
      <div className="toggle-button-line" />
      <div className="toggle-button-line" />
      <div className="toggle-button-line" />
    </button>
  );
};

export default DrawerToggleButton;
