import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBestPodcasts } from "../store/fetchActions";
import Podcast from "../components/Podcast";
import Search from "../components/Search";
import "./styles.css";

const Home = () => {
  const podcasts = useSelector((state) => state.podcastsReducer.podcasts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBestPodcasts());
  }, [dispatch]);

  return (
    <div>
      <h2 className="title">popcasts</h2>
      <Search />
      {podcasts &&
        podcasts.map((podcast) => (
          <div className="grid-container">
            <Link key={podcast.id} to={`/podcast/${podcast.id}`}>
              <Podcast podcast={podcast} />
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Home;
