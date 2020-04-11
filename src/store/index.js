import { configureStore } from "@reduxjs/toolkit";
import podcastsReducer from "./ducks/podcastsReducer";
import podcastReducer from "./ducks/podcastReducer";
import messageReducer from "./ducks/messageReducer";

export default configureStore({
  reducer: {
    podcastsReducer,
    podcastReducer,
    messageReducer,
  },
});
