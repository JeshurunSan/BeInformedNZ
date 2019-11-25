import React, { Component } from "react";
import "../../../../css/shared/social.css";

class Social extends Component {
  render() {
    return (
      <div className="social-icons">
        <a href="soc.js">
          <span className="fa fa-facebook" />
        </a>
        <a href="soc.js">
          <span className="fa fa-twitter" />
        </a>
        <a href="soc.js">
          <span className="fa fa-instagram" />
        </a>
        <a href="soc.js">
          <span className="fa fa-envelope" />
        </a>
      </div>
    );
  }
}

export default Social;
