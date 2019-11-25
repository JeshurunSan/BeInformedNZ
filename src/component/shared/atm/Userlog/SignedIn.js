import React from "react";
import "../../../../css/shared/SignedIn.css";
import { NavLink } from "react-router-dom";

// Redux and firebase
import { connect } from "react-redux";
import { signOut } from "../../../../store/actions/authActions";

const SignedIn = props => {
  return (
    <span className="SignedIn">
      <b>Welcome</b>&nbsp;
      <NavLink className="Links" to="/">
        {props.profile.initials}
      </NavLink>
      <button onClick={props.signOut}>Log Out</button>
    </span>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedIn);
