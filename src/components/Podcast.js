import React from "react";

const Podcast = ({ podcast }) => {
  return (
    <div className="podcastItem">
      <img src={podcast.image} alt={podcast.title} />
    </div>
  );
};

export default Podcast;
