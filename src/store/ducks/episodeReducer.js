import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  episode: {},
};

export const addEpisode = createAction("ADD_EPISODE");

export default createReducer(INITIAL_STATE, {
  [addEpisode.type]: (state, action) => ({
    ...state,
    episode: { ...state, episode: action.payload },
  }),
});
