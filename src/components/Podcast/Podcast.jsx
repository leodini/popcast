import React from "react";
import styles from './Podcast.module.css'

const Podcast = ({ podcast }) => {
  return (
    <div className={styles.podcastItem}>
      <img src={podcast.image} alt={podcast.title} />
    </div>
  );
};

export default Podcast;
