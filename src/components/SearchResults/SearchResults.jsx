import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaPlayCircle } from "react-icons/fa";

import { addCurrentPlaying, addMessage } from "../../store/ducks";
import { convertTimeStamp } from "../../helpers/utils/convertTimeStamp";
import { parseTime } from "../../helpers/utils/parseTime";
import "./styles.css";

const SearchResults = ({ episodeResult }) => {
  const dispatch = useDispatch();

  const playEpisode = () => {
    dispatch(addCurrentPlaying(episodeResult));
    dispatch(addMessage(`now playing ${episodeResult.title_original}`));
  };

  const {
    description_original,
    thumbnail,
    podcast_title_original,
    title_original,
    audio_length_sec,
    pub_date_ms,
    publisher_original,
    id,
  } = episodeResult;

  return (
    <div className="episode-result-container">
      <Link to={`/episode/${id}`} style={{ textDecoration: "none" }}>
        <p className="episode-title">{title_original}</p>
      </Link>
      <div className="thumbnail-container">
        <img src={thumbnail} alt={title_original} />
        <div className="time-container">
          <span className="podcast-title">{podcast_title_original}</span>
          <span className="publisher">
            By <strong>{publisher_original}</strong>
          </span>
          <p className="date">{convertTimeStamp(pub_date_ms)}</p>
        </div>
      </div>
      <p className="description">
        {description_original.length < 200
          ? `${description_original}`
          : `${description_original.substring(0, 200)}...`}
      </p>
      <div className="play-episode">
        <FaPlayCircle size={"22px"} id="player-btn" onClick={playEpisode} />
        <span className="time-span">{parseTime(audio_length_sec)}</span>
      </div>
    </div>
  );
};

export default SearchResults;
