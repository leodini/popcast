import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPodcast } from "../store/fetchActions";
import { Episode, Header } from "../components";
import "./styles.css";
import { addMessage, addEpisode, addEpisodeToQueue } from "../store/ducks";

const Podcast = () => {

  const params = useParams();

  const podcast = useSelector((state) => state.podcastReducer.podcast);
  const episodes = useSelector((state) => state.podcastReducer.episodeList);
  
  //next_episode_pub_date is used to set the pagination
  const next_episode_pub_date = useSelector((state) => state.podcastReducer.podcast.next_episode_pub_date);


  const dispatch = useDispatch();

  const getEpisode = (episode) => {
    dispatch(addEpisode(episode));
  };

  const addToQueue = (episode) => {
    dispatch(addEpisodeToQueue(episode));
    dispatch(addMessage(`${episode.title} added to queue`));
  };

  const handleLoadMore = () => {
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

          {episodes &&
            episodes.map((episode) => (
              <Episode
                key={episode.id}
                addToQueue={addToQueue}
                episode={episode}
                getEpisode={getEpisode}
              />
            ))}

        <button onClick={handleLoadMore}>load more</button>

        </div>
        
      </div>
    </>
  );
};

export default Podcast;
