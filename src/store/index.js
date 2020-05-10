import { configureStore } from "@reduxjs/toolkit";
import { 
  podcastsReducer, 
  podcastReducer, 
  messageReducer, 
  episodeReducer,
  recommendationsReducer } from './ducks'

export default configureStore({
  reducer: {
    podcastsReducer,
    podcastReducer,
    messageReducer,
    episodeReducer,
    recommendationsReducer,
  },
});
