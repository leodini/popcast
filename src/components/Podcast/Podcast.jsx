import React from "react";
import styles from './Podcast.module.css'

const Podcast = ({ podcast }) => {
  return (
    <div className={styles.podcastItem}>
      <img className="thumb" style={{width: "80px"}} src={podcast.image} alt={podcast.title} />
      <p className={styles.podcast_title}>{podcast.title_original.length > 9 ? `${podcast.title_original.substring(0, 10)}...` : `${podcast.title_original}`}</p>
    </div>
  );
};

export default Podcast;

