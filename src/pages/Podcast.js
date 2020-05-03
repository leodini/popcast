import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPodcast } from "../store/fetchActions";
import { Episode, Header } from "../components";
import "./styles.css";
import { addMessage, addCurrentEpisode, addEpisodeToQueue } from "../store/ducks";

const Podcast = () => {

  const params = useParams();

  const { podcast, episodeList, next_episode_pub_date } = useSelector((state) => state.podcastReducer);

  const dispatch = useDispatch();

  const getEpisode = (episode) => {
    dispatch(addCurrentEpisode(episode));
  };

  const addEpisodeToQueue = (episode) => {
    dispatch(addEpisodeToQueue(episode));
    dispatch(addMessage(`${episode.title} added to queue`));
  };

  const loadMoreEpisodes = () => {
    dispatch(fetchPodcast(params.id, next_episode_pub_date))
  }

  useEffect(() => {
    dispatch(fetchPodcast(params.id));
  }, [dispatch, params.id]);

  // TODO: make pagination

  return (
    <>
      <Header/>
      <div className="container">
        <div className="podcast-container">
          <p className="podcast-title">{podcast.title}</p>
          <img src={podcast.image} alt={podcast.title} />
        </div>

        <div className="episode-container">

          {episodeList &&
            episodeList.map((episode) => (
              <Episode
                key={episode.id}
                addEpisodeToQueue={addEpisodeToQueue}
                episode={episode}
                getEpisode={getEpisode}
              />
            ))}

        <button onClick={loadMoreEpisodes}>load more</button>

        </div>
        
      </div>
    </>
  );
};

export default Podcast;
