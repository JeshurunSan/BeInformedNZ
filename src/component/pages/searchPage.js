import React, { Component } from "react";
import "../../css/pages/searchPage.css";

import Footer from "../shared/org/footer";
import SearchEngine from "./../shared/mol/searchEngine";

import Navigation from "../shared/mol/Navigation/Navigation";
import SearchList from "../shared/org/feeds/SearchList";

import { connect } from "react-redux";

// Firestore connect as H O C
import { firestoreConnect } from "react-redux-firebase";

// Compose for composing two H O C's
import { compose } from "redux";

class SearchPage extends Component {
  render() {
    const { feeds1 } = this.props;
    return (
      <div className="SearchPage">
        <SearchList feeds={feeds1} />

        <Footer />
      </div>
    );
  }
}

const mapToStateToProps = state => {
  // console.log(state);
  return {
    // feeds: state.feed.feeds
    feeds1: state.firestore.ordered.feeds
  };
};

export default compose(
  connect(mapToStateToProps),
  firestoreConnect([{ collection: "feeds" }])
)(SearchPage);

// /* <div className="search-content">
//         <div className="SearchFunction">
//           <SearchEngine />
//         </div>

//         <div className="SearchCategories">
//           <Navigation />
//         </div> */
