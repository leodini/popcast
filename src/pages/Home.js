import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBestPodcasts } from "../store/fetchActions";
import Podcast from "../components/Podcast";

const Home = () => {
  const podcasts = useSelector((state) => state.podcastsReducer.podcasts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBestPodcasts());
  }, [dispatch]);

  return (
    <div>
      <h2>popcasts</h2>
      {podcasts &&
        podcasts.map((podcast) => (
          <Podcast key={podcast.id} podcast={podcast} />
        ))}
    </div>
  );
};

export default Home;
