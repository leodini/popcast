import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPodcast } from "../store/fetchActions";
import { addEpisode } from "../store/ducks/podcastReducer";

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

  useEffect(() => {
    dispatch(fetchPodcast(params.id));
  }, [dispatch, params.id]);

  return (
    <div className="container">
      <p>{podcast.title}</p>
      <img src={podcast.image} alt={podcast.title} />
      {episodes &&
        episodes.map((episode) => (
          <div className="grid-container" key={episode.id}>
            <span>{episode.title}</span>
            <button onClick={() => getEpisode(episode)}>play</button>
          </div>
        ))}
    </div>
  );
};

export default Podcast;
