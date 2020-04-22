import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentEpisode: {},
  queue: [],
};

export const addEpisode = createAction("ADD_EPISODE");
export const addEpisodeToQueue = createAction("ADD_EPISODE_TO_QUEUE");

export default createReducer(INITIAL_STATE, {
  [addEpisode.type]: (state, action) => ({...state, currentEpisode: action.payload,}), 
  [addEpisodeToQueue.type]: (state, action) => ({...state, queue: [...state.queue, action.payload]})
});
