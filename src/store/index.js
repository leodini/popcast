import { configureStore } from "@reduxjs/toolkit";
import { 
  podcastsReducer, 
  podcastReducer, 
  messageReducer, 
  episodeReducer } from './ducks'

export default configureStore({
  reducer: {
    podcastsReducer,
    podcastReducer,
    messageReducer,
    episodeReducer,
  },
});
