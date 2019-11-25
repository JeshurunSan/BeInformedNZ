import React from "react";
import "../../../../css/shared/NotSignedNavBar.css";

import Logo from "../../atm/Logo/logo.js";
import NotSigned from "../../atm/Userlog/NotSigned";
import Navigation from "../../mol/Navigation/Navigation";
import SearchEngine from "../../mol/searchEngine";
import DrawerToggleButton from "../../atm/drawerToggleButton";
// import Navigation from "../../mol/Navigation/Navigation";

const NotSignedNavBar = props => {
  return (
    <div className="NotSignedNavBar">
      <div>
        <DrawerToggleButton click={props.drawerClick} />
      </div>
      <div className="navbar-Logo">
        <Logo />
      </div>
      <Navigation />
      <SearchEngine />
      <NotSigned />
      {/* <Logo />   <Navigation />    <InputSearch />     <NotSigned /> */}
    </div>
  );
};

export default NotSignedNavBar;
