import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBestPodcasts } from "../../store/fetchActions";
import { Podcast, Header } from "../../components";
import "./styles.css";

const Home = () => {
  const podcasts = useSelector((state) => state.podcastsReducer.podcasts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBestPodcasts());
  }, [dispatch]);

  return (
    <div>
      <Header/>
      {podcasts &&
        podcasts.map((podcast) => (
          <div className="grid-container" key={podcast.id}>
            <Link to={`/podcast/${podcast.id}`}>
              <Podcast podcast={podcast} />
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Home;
