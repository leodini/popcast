import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = [];

export const message = createAction("MESSAGE");

export default createReducer(INITIAL_STATE, {
  [message.type]: (state, action) => [...state, action.payload],
});
