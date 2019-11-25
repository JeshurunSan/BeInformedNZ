import React, { Component } from "react";
import "../../../css/shared/mol/searchEngine.css";

// Action for search
import { onFindFeed } from "../../../store/actions/feedActions";

// H O C
import { connect } from "react-redux";

class SearchEngine extends Component {
  findFeed() {
    // console.log("find Article", this.searchInput.value);
    this.props.onFindFeed(this.searchInput.value);
  }
  render() {
    return (
      <div className="SearchContainer">
        <div className="input-search">
          <input type="text" placeholder="Search..." />
          <button>
            <span className="fa fa-search" />
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    onFindFeed: name => dispatch(onFindFeed(name))
  };
};

export default connect(
  null,
  mapDispatchtoProps
)(SearchEngine);
