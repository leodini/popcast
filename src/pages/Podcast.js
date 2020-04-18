import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPodcast } from "../store/fetchActions";
import { addEpisode } from "../store/ducks/podcastReducer";
import Episodes from "../components/Episodes";
import "./styles.css";

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
      <div className="podcast-container">
        <p className="podcast-title">{podcast.title}</p>
        <img src={podcast.image} alt={podcast.title} />
      </div>

      <div className="episode-container">
        {episodes &&
          episodes.map((episode) => (
            <Episodes
              key={episode.id}
              episode={episode}
              getEpisode={getEpisode}
            />
          ))}
      </div>
    </div>
  );
};

export default Podcast;
