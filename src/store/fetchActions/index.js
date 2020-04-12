import api from "../../api";
import { podcasts } from "../ducks/podcastsReducer";
import { podcast } from "../ducks/podcastReducer";
import { addMessage } from "../ducks/messageReducer";

export const fetchBestPodcasts = () => {
  return (dispatch) => {
    api
      .get("/best_podcasts?region=br")
      .then((res) => dispatch(podcasts(res.data.podcasts)))
      .catch((err) => dispatch(addMessage(err.message)));
  };
};

export const fetchPodcast = (podcastId) => {
  return (dispatch) => {
    api
      .get(`/podcasts/${podcastId}`)
      .then((res) => dispatch(podcast(res.data)))
      .catch((err) => dispatch(addMessage(err.message)));
  };
};

export const searchPodcast = (name) => {
  return (dispatch) => {
    api
      .get("/search?only_in=title", {
        params: {
          q: name,
        },
      })
      .then((res) => dispatch(podcasts(res.data.results)))
      .catch((err) => dispatch(addMessage(err.message)));
  };
};
