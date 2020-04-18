import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { MdQueueMusic } from "react-icons/md";
import "./styles.css";

const Episodes = ({ episode, getEpisode }) => {
  return (
    <div className="episodes">
      <span className="episode-title">{episode.title}</span>
      <FaPlayCircle
        onClick={() => getEpisode(episode)}
        style={{ marginLeft: "5px", color: "#F62459", cursor: "pointer" }}
      />
      <MdQueueMusic
        style={{ marginLeft: "5px", color: "#F62459", cursor: "pointer" }}
      />
    </div>
  );
};

export default Episodes;
