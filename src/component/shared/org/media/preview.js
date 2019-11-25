import React from "react";
import "../../../../css/shared/org/media.css";

const Preview = props => {
  const { pictureURL } = props;
  return <img className="feed-image" src={pictureURL} />;
};
export default Preview;
