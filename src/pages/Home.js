import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBestPodcasts } from "../store/fetchActions";
import Podcast from "../components/Podcast";
import Search from "../components/Search";

const Home = () => {
  const podcasts = useSelector((state) => state.podcastsReducer.podcasts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBestPodcasts());
  }, [dispatch]);

  return (
    <div>
      <h2>popcasts</h2>
      <Search />
      {podcasts &&
        podcasts.map((podcast) => (
          <Link key={podcast.id} to={`/podcast/${podcast.id}`}>
            <Podcast podcast={podcast} />
          </Link>
        ))}
    </div>
  );
};

export default Home;
