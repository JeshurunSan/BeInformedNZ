import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../../../css/shared/atm/logo.css";

class Logo extends Component {
  render() {
    return (
      <div className="Logo">
        <NavLink to="/">
          <span>
            <i>be</i>
            <b>informed</b>
            <sup>nz</sup>
          </span>
        </NavLink>
      </div>
    );
  }
}

export default Logo;
