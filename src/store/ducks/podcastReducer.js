import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  podcast: {},
  episodeList: [],
  genres: [],
};

export const podcast = createAction("PODCAST");
export const episodeList = createAction("EPISODE_LIST");
export const genres = createAction("GENRES");

export default createReducer(INITIAL_STATE, {
  [podcast.type]: (state, action) => ({
    ...state,
    podcast: action.payload,
    episodeList: [],
  }),
  [episodeList.type]: (state, action) => ({
    ...state,
    episodeList: [...state.episodeList, action.payload],
  }),
  [genres.type]: (state, action) => ({
    ...state,
    genres: [...state.genres, action.payload],
  }),
});
