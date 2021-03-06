import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";

import {
  Podcast,
  Header,
  SearchResults,
  Recommendations,
  Player,
} from "../../components";
import { searchPodcast } from "../../store/fetchActions";
import { reset } from "../../store/ducks";
import "./styles.css";

const Home = () => {
  const { podcasts } = useSelector((state) => state.podcastsReducer);
  const { search_results } = useSelector((state) => state.podcastsReducer);
  const { current_playing } = useSelector((state) => state.episodeReducer);

  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    //parses the query in the url and returns an object
    const searchValue = queryString.parse(location.search);
    //dispatches the value of the search
    dispatch(searchPodcast(searchValue.query));
    // dispatch(fetchGenres());
    return () => {
      dispatch(reset());
    };
  }, [location, dispatch]);

  return (
    <div>
      <Header />
      <div className="background">
        <div id="col1"></div>
        <div id="col2">
          <div className="flex">
            {podcasts &&
              podcasts.map((podcast) => (
                <div className="grid-container" key={podcast.id}>
                  <Link
                    to={`/podcast/${podcast.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Podcast podcast={podcast} />
                  </Link>
                </div>
              ))}
          </div>
          <div style={{ marginBottom: '150px'}}>
          {search_results &&
            search_results.map((result) => (
              <div key={result.id} className="">
                <SearchResults episodeResult={result} />
              </div>
            ))}
            </div>
        </div>
        <div id="col3">
          {podcasts.length ? (
            <Recommendations
              id={podcasts[0].id}
              typeOfRecommendation="podcast"
              heightToFixed={86}
            />
          ) : null}
        </div>
        {current_playing && <Player current_playing={current_playing} />}
      </div>
    </div>
  );
};

export default Home;
