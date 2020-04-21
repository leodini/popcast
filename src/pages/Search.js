import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams, useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import { searchPodcast } from "../store/fetchActions";
import queryString from 'query-string'

import Podcast from "../components/Podcast";
import Header from '../components/Header'

import "./styles.css";

const Home = () => {
  const podcasts = useSelector((state) => state.podcastsReducer.podcasts);

  const location = useLocation()

  const dispatch = useDispatch()

  useEffect(() => {
    const searchValue = queryString.parse(location.search)
    dispatch(searchPodcast(searchValue.query))
  }, [location])

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
