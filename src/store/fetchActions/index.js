import api from "../../api";
import { podcasts, podcast, episodeList, addMessage } from "../ducks";

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
export const fetchPodcast = (podcastId, next_episode_pub_date = '') => {
  return (dispatch) => {
    api
      .get(`/podcasts/${podcastId}?next_episode_pub_date=${next_episode_pub_date}`)
      .then((res) => {
        dispatch(podcast(res.data))
        res.data.episodes.map(episode => dispatch(episodeList(episode)))
      })
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
