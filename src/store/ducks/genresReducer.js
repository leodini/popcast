import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  genres: [],
};

export const genres = createAction("GENRES");
export const resetGenres = createAction("RESET_GENRES");

export default createReducer(INITIAL_STATE, {
  [genres.type]: (state, action) => ({
    ...state,
    genres: [...state.genres, action.payload],
  }),
  [resetGenres.type]: (state) => ({ ...state, genres: [] }),
});
