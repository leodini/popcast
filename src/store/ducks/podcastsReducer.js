import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  podcasts: [],
  search_results: []
};

export const podcasts = createAction("PODCASTS");
export const search_results = createAction("SEARCH_RESULTS")

//reducer
export default createReducer(INITIAL_STATE, {
  [podcasts.type]: (state, action) => ({ ...state, podcasts: action.payload }),
  [search_results.type]: (state, action) => ({...state, search_results: action.payload})
});
