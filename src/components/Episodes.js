import React from "react";

const Episodes = ({ episode, getEpisode }) => {
  return (
    <div className="grid-container">
      <span>{episode.title}</span>
      <button onClick={() => getEpisode(episode)}>play</button>
    </div>
  );
};

export default Episodes;
