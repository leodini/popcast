import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  episode: {},
};

export const getEpisode = createAction("GET_EPISODE");

export default createReducer(INITIAL_STATE, {
  [getEpisode.type]: (state, action) => ({
    ...state,
    episode: { ...state, episode: action.payload },
  }),
});
