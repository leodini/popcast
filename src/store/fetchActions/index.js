import api from "../../api";
import { podcasts, podcast, episodeList, episodeInfo } from "../ducks";

//fetch best podcasts of the home page
export const fetchBestPodcasts = () => {
  return async(dispatch) => {
    let response = await api.get('/best_podcasts?region=br')
    const { data } = response
    dispatch(podcasts(data.podcasts))
  }
};

//fetch the list of episodes for a podcast
export const fetchPodcast = (podcastId, next_episode_pub_date = '') => {
  return async(dispatch) => {
    let response = await api.get(`/podcasts/${podcastId}?next_episode_pub_date=${next_episode_pub_date}`)
    const { data } = response
    dispatch(podcast(data))
    data.episodes.map(episode => dispatch(episodeList(episode)))
  };
};

//search for a specific podcast author
export const searchPodcast = (name) => {
  return async(dispatch) => {
    let response = await api.get(`/typeahead?show_podcasts=1`, { params: { q: name }})
    const { data } = response
    dispatch(podcasts(data.podcasts))
  };
};

export const fetchSingleEpisode = (episodeId) => {
  return async(dispatch) => {
    let response = await api.get(`/episodes/${episodeId}`)
    const { data } = response
    dispatch(episodeInfo(data))
  }
}