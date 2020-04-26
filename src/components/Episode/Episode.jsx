import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { MdQueueMusic } from "react-icons/md";
import styles from './Episode.module.css'

const Episode = ({ episode, getEpisode, addToQueue }) => {
  return (
    <div className={styles.episodes}>
      <span className={styles.episodeTitle}>{episode.title}</span>
      <FaPlayCircle
        onClick={() => getEpisode(episode)}
        style={{ marginLeft: "5px", color: "#F62459", cursor: "pointer" }}
      />
      <MdQueueMusic
        onClick={() => addToQueue(episode)}
        style={{ marginLeft: "5px", color: "#F62459", cursor: "pointer" }}
      />
    </div>
  );
};

export default Episode;
