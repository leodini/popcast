import { configureStore } from "@reduxjs/toolkit";
import podcastsReducer from "./ducks/podcastsReducer";
import podcastReducer from "./ducks/podcastReducer";

export default configureStore({
  reducer: {
    podcastsReducer,
    podcastReducer,
  },
});
