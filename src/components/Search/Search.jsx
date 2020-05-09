import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useHistory } from 'react-router-dom'

import { stringToQuery } from '../../helpers/utils/queryString'
import styles from './Search.module.css'

const Search = () => {
  const [term, setTerm] = useState("");
  
  const history = useHistory()

  const handleTerm = (e) => {
    e.preventDefault();
    if (!!term) {
      history.push({
        pathname: '/search',
        search: `?query=${stringToQuery(term)}`
      })
    }
  };

  return (
    <form onSubmit={handleTerm}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="procure seu podcast favorito"
        onChange={(e) => setTerm(e.target.value)}
      />
      <button className={styles.buttonSearch} type="submit">
        <FaSearch
          style={{ color: "#fff", cursor: "pointer" }}
        />
      </button>
    </form>
  );
};

export default Search;
