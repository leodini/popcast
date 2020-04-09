import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  podcasts: [],
};

export const podcasts = createAction("PODCASTS");

//reducer
export default createReducer(INITIAL_STATE, {
  [podcasts.type]: (state, action) => ({ ...state, podcasts: action.payload }),
});
