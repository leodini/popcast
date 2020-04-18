import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { searchPodcast } from "../store/fetchActions";
import "./styles.css";

const Search = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const handleTerm = (e) => {
    e.preventDefault();
    if (!!term) {
      dispatch(searchPodcast(term));
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
