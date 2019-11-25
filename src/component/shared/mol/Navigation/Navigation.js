import React from "react";
import { Link } from "react-router-dom";
import "../../../../css/shared/mol/navigation.css";

const Navigation = () => {
  return (
    <div className="Navigation">
      <Link to="/">
        <span className="fa fa-home" />Home
      </Link>
      <Link to="/search">
        <span className="fa fa-search" />Search
      </Link>
      <Link to="/feed">
        <span className="fa fa-book" />Articles
      </Link>
      <Link to="/destinations">
        <span className="fa fa-plane" />Destinations
      </Link>
      <Link to="/activities">
        <span className="fa fa-cutlery" />Activities
      </Link>
      <Link to="/information">
        <span className="fa fa-info-circle" />Information
      </Link>
    </div>
  );
};

export default Navigation;
