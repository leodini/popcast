import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPodcast } from "../store/fetchActions";

const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!!search) {
      dispatch(searchPodcast(search));
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="procure seu podcast favorito"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">procurar</button>
    </form>
  );
};

export default Search;
