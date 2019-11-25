import React from "react";

import "../../../../css/shared/FeedsSummary.css";

const FeedsSummary = ({ feed }) => {
  return (
    <div className="post-wrap">
      <div className="feedsTitle">
        <section className="title-img">
          <div className="title-info">
            <h1>{feed.title}</h1>
            <p>
              Posted by {feed.authorFirstName} {feed.authorLastName}
            </p>
          </div>
        </section>
      </div>
      <div className="media-sec">
        <section>
          <img url={feed.url} />
        </section>
      </div>
      <div className="bottom-links">
        <section>
          <span id="comment-box">
            <a href="#">Comment</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="#">Share</a>
          </span>
        </section>
      </div>
    </div>
  );
};

export default FeedsSummary;
