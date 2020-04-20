import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Podcast from "../components/Podcast";
import Header from '../components/Header'

import "./styles.css";

const Home = () => {
  const podcasts = useSelector((state) => state.podcastsReducer.podcasts);

  return (
    <div>
      <Header/>

        {
            podcasts && podcasts.map(podcast => (
                <div className="grid-container" key={podcast.id}>
                    <Link to={`/podcast/${podcast.id}`}>
                        <Podcast podcast={podcast} />
                    </Link>
                </div>
            ))
        }

    </div>
  );
};

export default Home;
