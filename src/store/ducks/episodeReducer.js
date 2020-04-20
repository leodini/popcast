import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  episode: {},
  queue: [],
};

export const addEpisode = createAction("ADD_EPISODE");
export const addEpisodeToQueue = createAction("ADD_EPISODE_TO_QUEUE");

export default createReducer(INITIAL_STATE, {
  [addEpisode.type]: (state, action) => ({...state, episode: action.payload,}), 
  [addEpisodeToQueue.type]: (state, action) => ({...state, queue: [...state.queue, action.payload]})
});
