//  lIBRARIES
import React from "react";
// import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

// CSS
import "../../../../css/shared/feedDetails.css";

import Footer from './../footer';

// H O C's
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";


const FeedDetails = props => {
  const { feed, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (feed) {
    return (
      <div className="FeedContainer">
        <div className="DetailsContainer">
        <div className="feedDetails">
          <div className="FeedTitle">
            <section className="title">{feed.title}</section>
            <section className="details">
              <span className="fa fa-info-circle" /> {feed.address}{" "}
              <i>|</i>
              <span className="fa fa-phone" /> {feed.phone} <i>|</i>
              <span className="fa fa-globe">
                <a href={feed.website}>{feed.website}</a>
              </span>
            </section>
          </div>

          <div className="FeedMedia">
              <img className="image" src={feed.url} />
              <div className="map">Map</div>
          </div>

         <div className="secondRow">
         <div className="FeedRating">
            <section className="Rating">
              <span className="heading">User Rating</span>
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <p>4.1 average based on 254 reviews.</p>
              <div className="row">
                <div className="side">
                  <span>5 star</span>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div className="bar-5" />
                  </div>
                </div>
                <div className="side right">
                  <span>150</span>
                </div>
                <div className="side">
                  <span>4 star</span>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div className="bar-4" />
                  </div>
                </div>
                <div className="side right">
                  <span>63</span>
                </div>
                <div className="side">
                  <span>3 star</span>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div className="bar-3" />
                  </div>
                </div>
                <div className="side right">
                  <span>15</span>
                </div>
                <div className="side">
                  <span>2 star</span>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div className="bar-2" />
                  </div>
                </div>
                <div className="side right">
                  <span>6</span>
                </div>
                <div className="side">
                  <span>1 star</span>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div className="bar-1" />
                  </div>
                </div>
                <div className="side right">
                  <span>20</span>
                </div>
              </div>
            </section>
          </div>

          <div className="FeedDescription">
            <section className="profile">
              Description of {feed.title}
              <br />
              <p>{feed.content}</p>
            </section>
          </div>

         </div>

          <div className="FeedComment">
            <section className="comments">
              <p>Comment Section</p>
              <div
                className="comment-wrap"
                title="please remove this############################################################"
              >
                <div className="comment-box">
                  <span>User Anonymous</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec efficitur diam ac consequat euismod. Morbi vehicula,
                    tortor sed molestie tempor, augue enim condimentum massa,
                    feugiat scelerisque ligula felis eget arcu.
                  </p>
                </div>
              </div>
              <div
                className="comment-wrap"
                title="please remove this############################################################"
              >
                <div className="comment-box">
                  <span>User Anonymous</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec efficitur diam ac consequat euismod. Morbi vehicula,
                    tortor sed molestie tempor, augue enim condimentum massa,
                    feugiat scelerisque ligula felis eget arcu.
                  </p>
                </div>
              </div>
              <div
                className="comment-wrap"
                title="please remove this############################################################"
              >
                <div className="comment-box">
                  <span>User Anonymous</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec efficitur diam ac consequat euismod. Morbi vehicula,
                    tortor sed molestie tempor, augue enim condimentum massa,
                    feugiat scelerisque ligula felis eget arcu.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
      </div>
    );
  } else {
    return (
      <div className="loading">
        <p>Loading the Content</p>
        <Footer />
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const feeds = state.firestore.data.feeds;
  const feed = feeds ? feeds[id] : null;

  return {
    feed: feed,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "feeds" }])
)(FeedDetails);

/* <div className="Layout">
        <span className="feedTitle">Feed's Title - {id}</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div>Posted by Abdurakhim</div>
        <div>7th March 2019</div>
      </div> */
