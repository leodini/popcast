import { configureStore } from "@reduxjs/toolkit";
import podcastsReducer from "./ducks/podcastsReducer";

export default configureStore({
  reducer: {
    podcastsReducer,
  },
});
