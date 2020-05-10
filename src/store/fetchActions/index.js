import api from "../../helpers/api";
import axios from 'axios'
import { podcasts, podcast, episodeList, episodeInfo, search_results } from "../ducks";

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
    let optionForPagination = !!next_episode_pub_date ? `?next_episode_pub_date=${next_episode_pub_date}` : ''
    let response = await api.get(`/podcasts/${podcastId}${optionForPagination}`)
    const { data } = response
    dispatch(podcast(data))
    dispatch(episodeList(data.episodes))
  };
};

//search for a specific podcast author
export const searchPodcast = (name) => {
  return async(dispatch) => {
    function getPodcastArtist(){
      return api.get(`/typeahead?show_podcasts=1`, { params: { q: name }})
    }
    function getPodcastEpisodes(){
      return api.get('/search', { params: { q: name }})
    }
    axios.all([getPodcastArtist(), getPodcastEpisodes()])
    .then(axios.spread(function(podcastArtist, podcastEpisode){
      dispatch(podcasts(podcastArtist.data.podcasts))
      dispatch(search_results(podcastEpisode.data.results))
    }))
  };
};

export const fetchSingleEpisode = (episodeId) => {
  return async(dispatch) => {
    let response = await api.get(`/episodes/${episodeId}`)
    const { data } = response
    dispatch(episodeInfo(data))
  }
}