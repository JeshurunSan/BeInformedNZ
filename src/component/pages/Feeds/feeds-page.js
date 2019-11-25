//  lIBRARIES
import React, { Component } from "react";

// CSS
import "../../../css/pages/feedPage.css";

//  LINKS
import FeedList from "../../shared/org/feeds/feedList";

import Categories from "../../shared/mol/categories";
import Footer from './../../shared/org/footer';

// H O C
import { connect } from "react-redux";

// Firestore connect as H O C
import { firestoreConnect } from "react-redux-firebase";

// Compose for composing two H O C's
import { compose } from "redux";

class Feeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: this.props.feeds
      // filter: this.props.filter
    };

    console.log("state", this.state.feeds);
    // console.log("filter", this.state.filter);

    // debugger;

    // const filter = this.state.feeds.filter(feed =>
    //   feed.title.includes(this.state.filter)
    // );
  }
  render() {
    // const filter = this.state.feeds.filter(feed =>
    //   feed.title.includes(this.state.filter)
    // );
    console.log(this.props);
    const { feeds } = this.props;

    return (
      <div className="Feed">
        <div className="feed-content">
          <div className="SearchFunction" />
          <div className="feed-container">
            <Categories />
            <FeedList feeds={feeds} />
            
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapToStateToProps = state => {
  console.log(state);
  return {
    // feeds: state.feed.feeds
    feeds: state.firestore.ordered.feeds
  };
};

export default compose(
  connect(mapToStateToProps),
  firestoreConnect([{ collection: "feeds" }])
)(Feeds);
