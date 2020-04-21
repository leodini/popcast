import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useHistory } from 'react-router-dom'
import { stringToQuery } from '../utils/queryString'
import "./styles.css";

const Search = () => {
  const [term, setTerm] = useState("");
  
  const history = useHistory()

  const handleTerm = (e) => {
    e.preventDefault();
    if (!!term) {
      // dispatch(searchPodcast(term));
      history.push({
        pathname: '/search',
        search: `?query=${stringToQuery(term)}`
      })
    }
  };

  return (
    <form onSubmit={handleTerm}>
      <input
        className="search-input"
        type="text"
        placeholder="procure seu podcast favorito"
        onChange={(e) => setTerm(e.target.value)}
      />
      <button className="button-search" type="submit">
        <FaSearch
          style={{ marginLeft: "5px", color: "#F62459", cursor: "pointer" }}
        />
      </button>
    </form>
  );
};

export default Search;
