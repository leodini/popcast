import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPodcast } from "../store/fetchActions";
import { addEpisode, addEpisodeToQueue } from "../store/ducks/episodeReducer";
import Episode from "../components/Episode";
import Header from '../components/Header'
import "./styles.css";
import { addMessage } from "../store/ducks/messageReducer";

const Podcast = () => {
  const params = useParams();
  const podcast = useSelector((state) => state.podcastReducer.podcast);
  const episodes = useSelector(
    (state) => state.podcastReducer.podcast.episodes
  );
  const dispatch = useDispatch();

  const getEpisode = (episode) => {
    dispatch(addEpisode(episode));
  };

  const addToQueue = (episode) => {
    dispatch(addEpisodeToQueue(episode));
    dispatch(addMessage(`${episode.title} added to queue`));
  };

  useEffect(() => {
    dispatch(fetchPodcast(params.id));
  }, [dispatch, params.id]);

  return (
    <>
      <Header/>
      <div className="container">
        <div className="podcast-container">
          <p className="podcast-title">{podcast.title}</p>
          <img src={podcast.image} alt={podcast.title} />
        </div>

        <div className="episode-container">

          {episodes &&
            episodes.map((episode) => (
              <Episode
                key={episode.id}
                addToQueue={addToQueue}
                episode={episode}
                getEpisode={getEpisode}
              />
            ))}

        </div>
      </div>
    </>
  );
};

export default Podcast;
