import React from "react";

const Podcast = ({ podcast }) => {
  return (
    <div className="podcastItem">
      <p>{podcast.title_original}</p>
      <img src={podcast.image} alt="" />
    </div>
  );
};

export default Podcast;
