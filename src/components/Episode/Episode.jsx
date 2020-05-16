import React from "react";
import { Link } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { addCurrentPlaying, addMessage } from "../../store/ducks";
import { convertTimeStamp } from "../../helpers/utils/convertTimeStamp";
import { parseTime } from "../../helpers/utils/parseTime";
import "./styles.css";

const Episode = ({ episode }) => {
  const dispatch = useDispatch();

  const playEpisode = () => {
    dispatch(addCurrentPlaying(episode));
    dispatch(addMessage(`now playing ${episode.title}`));
  };

  return (
    <div className="unique-episode-container">
      <div key={episode.id} className="episode">
        <Link to={`/episode/${episode.id}`} style={{ textDecoration: "none" }}>
          <img
            className="epi-thumb"
            src={episode.thumbnail}
            alt={episode.title}
          />
        </Link>
        <div id="title-container">
          <p className="epi-title">{episode.title}</p>
          <p className="date">{convertTimeStamp(episode.pub_date_ms)}</p>
        </div>
      </div>
      <div className="btn-play-container">
        <FaPlayCircle size={"22px"} id="player-btn" onClick={playEpisode} />
        <span className="audio-length">
          {parseTime(episode.audio_length_sec)}
        </span>
      </div>
    </div>
  );
};

export default Episode;
