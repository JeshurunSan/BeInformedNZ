//  lIBRARIES
import React, { Component } from "react";
//  LINKS
import { Link } from "react-router-dom";
// CSS
import FeedsSummary from "../../mol/FeedsSummary";
import "../../../../css/shared/org/SearchList.css";
import FeedDetails from "../FeedDetails/FeedDetails";

class SearchList extends Component {
  static defaultProps = {
    // <-- DEFAULT PROPS
    feeds: [] // undefined gets converted to array,render won't trigger error
  };
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    let filteredFeeds = this.props.feeds.filter(feed => {
      // const array = ['title','authorFirstName'];

      return (
        feed.title
          .toString()
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

    const content =
      this.state.search != "" ? (
        <div className="search-wrap">
          <div className="SearchList-content">
            <div className="feedlist-container">
              {filteredFeeds &&
                filteredFeeds.map(feed => {
                  return (
                    <Link to={"/feed/" + feed.id} key={feed.id}>
                      <FeedsSummary feed={feed} />
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      ) : (
        <div className="feedlist-container">
          No results found. Try searching for something, e.g. chinese
          restaurant, public transport :(
        </div>
      );
    // const feeds = this.props.feeds;
    return (
      <div className="search-wrap">
        <div className="SearchList-content">
          <div className="jumbotron">
            <div className="SearchContainer">
              <div className="input-search">
                <input
                  type="text"
                  placeholder="search for article title"
                  value={this.state.search}
                  onChange={this.updateSearch.bind(this)}
                />
                <button>
                  <span className="fa fa-search" />
                </button>
              </div>
            </div>
          </div>
          {content}
        </div>
      </div>
    );
  }
}

export default SearchList;
