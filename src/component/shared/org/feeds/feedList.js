//  lIBRARIES
import React from "react";
//  LINKS
import { Link } from "react-router-dom";
// CSS
import FeedsSummary from "../../mol/FeedsSummary";
import "../../../../css/shared/feedList.css";

const FeedList = ({ feeds }) => {
  return (
    <div className="FeedBox">
      {feeds &&
        feeds.map(feed => {
          return (
            <Link to={"/feed/" + feed.id} key={feed.id}>
              <FeedsSummary feed={feed} />
            </Link>
          );
        })}
    </div>
  );
};

export default FeedList;
