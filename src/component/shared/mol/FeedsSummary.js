import React from "react";
import { Link } from "react-router-dom";

import "../../../css/shared/mol/FeedsSummary.css";

const FeedsSummary = ({ feed }) => {
  const image = feed.url ? (
    <img className="smc-media" src={feed.url} />
  ) : (
    <img
      className="smc-media"
      src="https://firebasestorage.googleapis.com/v0/b/be-informed-nz.appspot.com/o/images%2Fno-image.jpg?alt=media&token=72df1863-cd0d-40b1-95d5-67be1421b5bd"
    />
  );

  return (
    <div className="social-card">
      <div className="smc-header">
        <div className="smc-title">{feed.title}</div>
        <div className="smc-author">
          Posted by {feed.authorFirstName} {feed.authorLastName}
        </div>
      </div>
      <div className="smc-image">{image}</div>
      <div className="smc-footnote">
        <Link to="/share">Share</Link>
        <i>|</i>
        <Link to="/comment">Comment</Link>
      </div>
    </div>
  );
};

export default FeedsSummary;
