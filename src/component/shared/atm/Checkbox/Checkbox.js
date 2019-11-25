import React from "react";

import "../../../../css/shared/checkbox.css";

const Checkbox = () => {
  return (
    <div className="Checkbox">
      <label className="container">
        Feed
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
      <label className="container">
        Transport
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
      <label className="container">
        Traffic Rules
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
      <label className="container">
        Customs / Culture
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
      <label className="container">
        Ethnic Food Locations
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
      <label className="container">
        Halal Restaurants
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
      <label className="container">
        Destinations
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
      <label className="container">
        Security & Safety Rules
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
    </div>
  );
};

export default Checkbox;
