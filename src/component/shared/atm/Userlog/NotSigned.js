import React, { Component } from "react";
import "../../../../css/shared/NotSigned.css";
import { NavLink } from "react-router-dom";

class NotSigned extends Component {
  render() {
    return (
      <span className="NotSigned">
        <NavLink className="Links" to="/signin">
          Sign In
        </NavLink>
        &nbsp;|&nbsp;
        <NavLink className="Links" to="/signup">
          Sign Up
        </NavLink>
      </span>
    );
  }
}

export default NotSigned;
