import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaPlayCircle } from "react-icons/fa";
import { MdLanguage, MdPlace } from "react-icons/md";
import { Link } from 'react-router-dom'

import { addCurrentPlaying, addMessage, reset } from "../../store/ducks";
import { Header, Recommendations, Player, Genres } from "../../components";
import { parseTime } from "../../helpers/utils/parseTime";
import { convertTimeStamp } from '../../helpers/utils/convertTimeStamp'
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
    id: podcast_id,
    language,
    country,
    genre_ids,
  } = podcast;

  return (
    <>
      <Header />
      <div className="top-section">
        <div id="col-podcast-page"></div>
        <div id="podcast">
          <div className="podcast-title-and-thumb">
            <img src={podcast_thumbnail} alt={podcast_title} />
            <p className="podcast-title">{podcast_title}</p>
          </div>
          <div id="info-container-podcast">
            <p id="podcast-title">{title}</p>
            <span className="pub-date-time">{convertTimeStamp(pub_date_ms)}</span>

            <div className="btn-play-container">
              <FaPlayCircle
                size={"34px"}
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

      <div className="main-section">

        <div className="col1"></div>

      <div className="about-this-episode">
        <p className="about-this">ABOUT THIS EPISODE</p>
        <img src={thumbnail} alt={title} className="thumb" />
        <p className="episode-desc">{description}</p>
        <div className="episode-info">
          <Genres genresForPodcast={genre_ids} />
          <span className="language-country"><MdLanguage /> {language}</span>
          <span className="language-country"><MdPlace /> {country}</span>
        </div>
        <div className="view-more">
          <Link to={`/podcast/${podcast_id}`} style={{textDecoration: 'none'}} className="btn-view-more">View other episodes</Link>
        </div>
      </div>


      <Recommendations
        id={id}
        typeOfRecommendation="episode"
        heightToFixed={1000}
      />

      </div>

      {current_playing && <Player current_playing={current_playing} />}
    </>
  );
};

export default SingleEpisode;
