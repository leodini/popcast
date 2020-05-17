import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MdOpenInBrowser } from "react-icons/md";
import { FaApple, FaRss } from "react-icons/fa";

import About from "./About";
import { Recommendations, Episode, Header, Player } from "../../components";
import {
  fetchPodcast,
  fetchRecommendations,
  fetchGenres,
} from "../../store/fetchActions";
import { reset } from "../../store/ducks";
import "./styles.css";

const Podcast = () => {
  const params = useParams();

  const { podcast, episodeList, genres } = useSelector(
    (state) => state.podcastReducer
  );
  const { next_episode_pub_date } = useSelector(
    (state) => state.podcastReducer.podcast
  );
  const { current_playing } = useSelector((state) => state.episodeReducer);

  const dispatch = useDispatch();

  const loadMoreEpisodes = () => {
    dispatch(fetchPodcast(params.id, next_episode_pub_date));
  };

  useEffect(() => {
    dispatch(fetchPodcast(params.id));
    dispatch(fetchRecommendations(params.id));
    return () => {
      dispatch(reset());
    };
  }, [dispatch, params.id]);

  useEffect(() => {
    dispatch(fetchGenres(podcast.genre_ids));
  }, [podcast, dispatch]);

  return (
    <>
      <Header />
      <div className="top-section">
        <div className="col-podcast-page"></div>
        <div id="podcast">
          <p id="podcast-title">{podcast.title}</p>
          <div id="info-container">
            <img src={podcast.image} alt={podcast.title} />
            <div id="podcast-info-container">
              <p id="podcast-publisher">
                By <strong>{podcast.publisher}</strong>
              </p>
              <div id="contact">
                <a className="social-info" href={podcast.website}>
                  <MdOpenInBrowser style={{ padding: "1px" }} /> WEBSITE
                </a>
                <a className="social-info" href={podcast.rss}>
                  <FaRss style={{ padding: "1px" }} /> RSS
                </a>
                <a
                  className="social-info"
                  href={`https://podcasts.apple.com/us/podcast/id${podcast.itunes_id}`}
                >
                  <FaApple style={{ padding: "1px" }} /> ITUNES
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="podcast-episodes-container">
        <div id="col1"></div>
        <div id="col2">
          <About podcast={podcast} />

          <div id="episode-list-card">
            <p className="unique-episode-title">Previous Episodes</p>
            {episodeList.length &&
              episodeList.map((result) => (
                <div key={result.id} className="search-results">
                  <Episode episode={result} />
                </div>
              ))}
          </div>
          <button className="load-more-btn" onClick={loadMoreEpisodes}>
            Load more
          </button>
        </div>

        <div id="col3">
          <Recommendations
            id={podcast.id}
            typeOfRecommendation="podcast"
            heightToFixed={335}
          />
        </div>
        {current_playing && <Player current_playing={current_playing} />}
      </div>
    </>
  );
};

export default Podcast;
