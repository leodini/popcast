import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPodcast } from "../../store/fetchActions";
import { Episode, Header } from "../../components";
import "./styles.css";
import { addMessage, addCurrentEpisode, addEpisodeToQueue } from "../../store/ducks";

const Podcast = () => {
  const [ currentPage, setCurrentPage ] = useState(0)

  const params = useParams();

  const { podcast, episodeList } = useSelector((state) => state.podcastReducer);
  const { next_episode_pub_date } = useSelector(state => state.podcastReducer.podcast)

  const dispatch = useDispatch();

  const getEpisode = (episode) => {
    dispatch(addCurrentEpisode(episode));
  };

  const addToQueue = (episode) => {
    dispatch(addEpisodeToQueue(episode));
    dispatch(addMessage(`${episode.title} added to queue`));
  };

  const loadMoreEpisodes = () => {
    dispatch(fetchPodcast(params.id, next_episode_pub_date))
    setCurrentPage(currentPage + 1)
  }

  const showPreviousEpisodes = () => {
    if (currentPage === 0) return
    setCurrentPage(currentPage -1)
  }

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

          {episodeList[currentPage] &&
            episodeList[currentPage].map((episode) => (
              <Episode
                key={episode.id}
                addToQueue={addToQueue}
                episode={episode}
                getEpisode={getEpisode}
              />
            ))}

        <button onClick={loadMoreEpisodes}>load more</button>
        <button onClick={showPreviousEpisodes}>Previous</button>

        </div>
        
      </div>
    </>
  );
};

export default Podcast;
