import React from "react";
import { Link } from 'react-router-dom'
import { FaPlayCircle } from "react-icons/fa";
import { MdQueueMusic } from "react-icons/md";
import styles from './Episode.module.css'

const Episode = ({ episode, playEpisode, addToQueue }) => {
  return (
    <div className={styles.episodes}>
      <Link to={`/episode/${episode.id}`}>
        <span className={styles.episodeTitle}>{episode.title}</span>
      </Link>
      <FaPlayCircle
        onClick={() => playEpisode(episode)}
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
