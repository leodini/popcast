import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  episode_info: {},
  current_playing: {}
};

export const addCurrentPlaying = createAction("ADD_CURRENT_PLAYING");
export const addEpisodeToQueue = createAction("ADD_EPISODE_TO_QUEUE");
export const episodeInfo = createAction("EPISODE_INFO");

export default createReducer(INITIAL_STATE, {
  [addCurrentPlaying.type]: (state, action) => ({...state, current_playing: action.payload}), 
  [episodeInfo.type]: (state, action) => ({...state, episode_info: action.payload})
});
