import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  podcast: {},
};

export const podcast = createAction("PODCAST");

export default createReducer(INITIAL_STATE, {
  [podcast.type]: (state, action) => ({ ...state, podcast: action.payload }),
});
