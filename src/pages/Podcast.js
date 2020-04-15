import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPodcast } from "../store/fetchActions";

const Podcast = () => {
  const params = useParams();
  const podcast = useSelector((state) => state.podcastReducer.podcast);
  const episodes = useSelector(
    (state) => state.podcastReducer.podcast.episodes
  );
  const dispatch = useDispatch();

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
            <audio controls>
              <source src={episode.audio} type="audio/mpeg" />
            </audio>
          </div>
        ))}
    </div>
  );
};

export default Podcast;
