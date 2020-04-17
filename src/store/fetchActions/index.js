import api from "../../api";
import { podcasts } from "../ducks/podcastsReducer";
import { podcast } from "../ducks/podcastReducer";
import { addMessage } from "../ducks/messageReducer";

//fetch best podcasts of the home page
export const fetchBestPodcasts = () => {
  return (dispatch) => {
    api
      .get("/best_podcasts?region=br")
      .then((res) => dispatch(podcasts(res.data.podcasts)))
      .catch((err) => dispatch(addMessage(err.message)));
  };
};

//fetch the list of episodes for a podcast
export const fetchPodcast = (podcastId) => {
  return (dispatch) => {
    api
      .get(`/podcasts/${podcastId}`)
      .then((res) => dispatch(podcast(res.data)))
      .catch((err) => dispatch(addMessage(err.message)));
  };
};

//search for a specific podcast author
export const searchPodcast = (name) => {
  return (dispatch) => {
    api
      .get(`/typeahead?show_podcasts=1`, {
        params: {
          q: name,
        },
      })
      .then((res) => dispatch(podcasts(res.data.podcasts)))
      .catch((err) => dispatch(addMessage(err.message)));
  };
};
