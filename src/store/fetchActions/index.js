import api from "../../api";
import { podcasts } from "../ducks/podcastsReducer";
import { podcast } from "../ducks/podcastReducer";

export const fetchBestPodcasts = () => {
  return (dispatch) => {
    api
      .get("/best_podcasts?region=br")
      .then((res) => dispatch(podcasts(res.data.podcasts)))
      .catch((err) => console.log(err));
  };
};

export const fetchPodcast = (podcastId) => {
  return (dispatch) => {
    api
      .get(`/podcasts/${podcastId}`)
      .then((res) => dispatch(podcast(res.data)))
      .catch((err) => console.log(err));
  };
};
