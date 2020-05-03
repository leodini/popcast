import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentEpisode: {},
  queue: [],
  episode_info: {}
};

export const addCurrentEpisode = createAction("ADD_CURRENT_EPISODE");
export const addEpisodeToQueue = createAction("ADD_EPISODE_TO_QUEUE");
export const episodeInfo = createAction("EPISODE_INFO");

export default createReducer(INITIAL_STATE, {
  [addCurrentEpisode.type]: (state, action) => ({...state, currentEpisode: action.payload,}), 
  [addEpisodeToQueue.type]: (state, action) => ({...state, queue: [...state.queue, action.payload]}),
  [episodeInfo.type]: (state, action) => ({...state, episode_info: action.payload})
});
