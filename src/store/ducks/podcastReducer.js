import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  podcast: {},
  episode: {},
};

export const podcast = createAction("PODCAST");
export const addEpisode = createAction("ADD_EPISODE");

export default createReducer(INITIAL_STATE, {
  [podcast.type]: (state, action) => ({ ...state, podcast: action.payload }),
  [addEpisode.type]: (state, action) => ({
    ...state,
    episode: action.payload,
  }),
});
