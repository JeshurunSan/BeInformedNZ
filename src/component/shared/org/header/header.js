import React from "react";
import "../../../../css/shared/org/header.css";
import SignedInNavBar from "./SignedInNavBar";
import NotSignedNavBar from "./NotSignedNavBar";

// Redux Connect H O C
import { connect } from "react-redux";

const Header = props => {
  const { auth, profile } = props;
  console.log(props);

  const links = auth.uid ? (
    <SignedInNavBar drawerClick={props.drawerClickHandler} profile={profile} />
  ) : (
    <NotSignedNavBar drawerClick={props.drawerClickHandler} />
  );

  return <div className="header">{links}</div>;
};
const mapStateToProps = state => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Header);

/* 


      
  };

      

        {sideDrawer}
      {backdrop}

       drawerClickHandler={this.drawerToggleClickHandler}
      */
