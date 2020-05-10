import React, { useEffect } from "react";
import queryString from 'query-string'
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { Podcast, Header, SearchResults } from "../../components";
import { searchPodcast } from "../../store/fetchActions";
import "./styles.css";

const Home = () => {
  const { podcasts } = useSelector((state) => state.podcastsReducer);
  const { search_results } = useSelector(state => state.podcastsReducer)

  const location = useLocation()

  const dispatch = useDispatch()

  useEffect(() => {
    //parses the query in the url and returns an object
    const searchValue = queryString.parse(location.search)
    //dispatches the value of the search
    dispatch(searchPodcast(searchValue.query))
  }, [location, dispatch])

  return (
    <div>
      <Header/>
        <div className="background">
        {
            podcasts && podcasts.map(podcast => (
                <div className="grid-container" key={podcast.id}>
                    <Link to={`/podcast/${podcast.id}`} style={{ textDecoration: 'none' }}>
                        <Podcast podcast={podcast} />
                    </Link>
                </div>
            ))
        }
        {
          search_results && search_results.map(result => (
            <div className="search-results">
              <Link to={`/podcast/${result.id}`} style={{ textDecoration: 'none' }}>
                <SearchResults episodeResult={result} />
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Home;
