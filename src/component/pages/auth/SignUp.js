import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "../../../css/pages/auth.css";

// Route Guard
import { Redirect } from "react-router-dom";

// H O C
import { connect } from "react-redux";

// Redux  and Firebase Action
import { signUp } from "../../../store/actions/authActions";

import Header from "../../shared/org/header/header";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.signUp(this.state);
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/new" />;
    return (
      <div className="container1">
        <Header />
        <div className="Auth">
          <h1>Sign Up</h1>
          <form onSubmit={this.handleSubmit} className="Auth-form">
            <div className="input-field">
              <input type="email" id="email" onChange={this.handleChange} />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field">
              <input
                type="password"
                id="password"
                onChange={this.handleChange}
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="input-field">
              <input type="text" id="firstName" onChange={this.handleChange} />
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field">
              <input type="text" id="lastName" onChange={this.handleChange} />
              <label htmlFor="lastName">Last Name</label>
            </div>
            <div className="btn">
              <button>Register</button><Link to="/signin"><button>Sign In</button></Link>
              <div className="AuthError">
                {authError ? <p>{authError}</p> : null}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
