import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import { Episode, Header } from "../../components";
import { addMessage, addCurrentEpisode, addEpisodeToQueue } from "../../store/ducks";
import { fetchPodcast } from "../../store/fetchActions";
import "./styles.css";

const Podcast = () => {
  const [ currentPage, setCurrentPage ] = useState(0)

  const params = useParams();

  const { podcast, episodeList } = useSelector((state) => state.podcastReducer);
  const { next_episode_pub_date } = useSelector((state) => state.podcastReducer.podcast)

  const dispatch = useDispatch();

  const playEpisode = (episode) => {
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
                playEpisode={playEpisode}
              />
            ))}

        <div className="button-container">
          <MdChevronLeft style={{ marginLeft: "5px", color: "#F62459", cursor: "pointer", height: '50px', width: '100px' }}
          onClick={showPreviousEpisodes}>
            load more
          </MdChevronLeft>
          <MdChevronRight style={{ marginLeft: "5px", color: "#F62459", cursor: "pointer", height: '50px', width: '100px' }}
          onClick={loadMoreEpisodes}>
            Previous
          </MdChevronRight>
        </div>

        </div>
        
      </div>
    </>
  );
};

export default Podcast;
