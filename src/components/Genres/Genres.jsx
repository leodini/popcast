import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchGenres } from "../../store/fetchActions";
import "./styles.css";

const Genres = ({ genresForPodcast }) => {
  const genreNames = useSelector((state) => state.genresReducer.genres);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres(genresForPodcast));
  }, [genresForPodcast, dispatch]);

  return (
    <div className="genres-container">
      {genreNames.map((genre, index) => (
        <div key={index} className="genre">
          <span className="genre-name">{genre}</span>
        </div>
      ))}
    </div>
  );
};

export default Genres;
