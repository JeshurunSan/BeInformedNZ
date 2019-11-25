import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/shared/org/header/header";
import SideDrawer from "./component/shared/org/header/SideDrawer";
import Backdrop from "./component/shared/mol/Backdrop";

import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Login from "./component/pages/Login";
import FeedDetails from "./component/shared/org/FeedDetails/FeedDetails";
import New from "./component/pages/New";
import QandaPage from "./component/pages/qandaPage";
import ErrorPage from "./component/pages/errorPage";
import SignIn from "./component/pages/auth/SignIn";
import SignUp from "./component/pages/auth/SignUp";
import CreateFeed from "./component/shared/org/feeds/CreateFeed";
import HomePage from "./component/pages/homePage";
import SearchPage from "./component/pages/searchPage";
import Dashboard from "./component/pages/dashboard";

import "./css/App.css";

class App extends Component {
  state = {
    sideDrawer: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <Header drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}
          </div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/feed/:id" component={FeedDetails} />
            <Route path="/feed" component={New} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateFeed} />
            <Route path="/qanda" component={QandaPage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route component={ErrorPage} />
          </Switch>
          {/* <Footer />
          <Social /> */}
        </div>
      </Router>
    );
  }
}

export default App;
