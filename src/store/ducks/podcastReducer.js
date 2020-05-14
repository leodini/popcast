import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  podcast: {},
  episodeList: []
};

export const podcast = createAction("PODCAST");
export const episodeList = createAction('EPISODE_LIST')

export default createReducer(INITIAL_STATE, {
  [podcast.type]: (state, action) => ({ ...state, podcast: action.payload, episodeList: [] }),
  [episodeList.type]: (state, action) => ({...state, episodeList: [...state.episodeList, action.payload]})
});
