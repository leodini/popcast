import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaPlayCircle } from "react-icons/fa";

import { addCurrentPlaying, addMessage, reset } from "../../store/ducks";
import { Header, Recommendations, Player } from "../../components";
import { parseTime } from "../../helpers/utils/parseTime";
import { fetchSingleEpisode } from "../../store/fetchActions";
import "./styles.css";

const SingleEpisode = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const episode = useSelector((state) => state.episodeReducer.episode_info);
  const { podcast } = episode;
  const { current_playing } = useSelector((state) => state.episodeReducer);

  const playEpisode = () => {
    dispatch(addCurrentPlaying(episode));
    dispatch(addMessage(`now playing ${episode.title}`));
  };

  useEffect(() => {
    dispatch(fetchSingleEpisode(id));

    return () => {
      dispatch(reset());
    };
  }, [dispatch, id]);

  if (!podcast || !episode) return null;

  const {
    title,
    description,
    pub_date_ms,
    audio_length_sec,
    thumbnail,
  } = episode;

  const {
    title: podcast_title,
    thumbnail: podcast_thumbnail,
    language,
    country,
  } = podcast;

  return (
    <>
      <Header />
      <div className="top-section">
        <div className="col-podcast-page"></div>
        <div id="podcast">
          <p id="podcast-title">{title}</p>
          <div id="info-container">
            <img src={podcast_thumbnail} alt={podcast_title} />
            <span>{pub_date_ms}</span>

            <div className="btn-play-container">
              <FaPlayCircle
                size={"22px"}
                id="player-btn"
                onClick={playEpisode}
              />
              <span className="audio-length">
                {parseTime(audio_length_sec)}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="about-this-episode">
        <p className="about-this">ABOUT THIS EPISODE</p>
        <img src={thumbnail} alt={title} className="thumb" />
        <p className="episode-desc">{description}</p>
        <div className="episode-info">
          <span className="language-country">{language}</span>
          <span className="language-country">{country}</span>
        </div>
      </div>

      <Recommendations
        id={id}
        typeOfRecommendation="episode"
        heightToFixed={335}
      />

      {current_playing && <Player current_playing={current_playing} />}
    </>
  );
};

export default SingleEpisode;
