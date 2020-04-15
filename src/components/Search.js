import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPodcast } from "../store/fetchActions";

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
        type="text"
        placeholder="procure seu podcast favorito"
        onChange={(e) => setTerm(e.target.value)}
      />
      <button type="submit">procurar</button>
    </form>
  );
};

export default Search;
