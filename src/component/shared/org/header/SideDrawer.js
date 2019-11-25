import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../atm/Logo/logo.js";
import NotSigned from "../../atm/Userlog/NotSigned";

// css
import "../../../../css/shared/org/SideDrawer.css";

const SideDrawer = props => {
  let drawerClasses = "side-drawer";

  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <div className={drawerClasses}>
      <Logo />
      <div className="side-navigation">
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/feed">Articles</Link>
        <Link to="/destinations">Destinations</Link>
        <Link to="/activities">Activities</Link>
        <Link to="/information">Information</Link>
      </div>
      <NotSigned />
    </div>
  );
};

export default SideDrawer;
