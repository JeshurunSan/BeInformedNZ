import React from "react";

import "../../../css/shared/mol/backdrop.css";

const Backdrop = props => {
  return <div className="backdrop" onClick={props.click} />;
};

export default Backdrop;
