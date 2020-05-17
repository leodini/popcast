import api from "../../helpers/api";
import axios from "axios";
import {
  podcasts,
  podcast,
  episodeList,
  search_results,
  episodeInfo,
  set_recommendations,
  genres,
} from "../ducks";

//fetch best podcasts of the home page
export const fetchBestPodcasts = () => {
  return async (dispatch) => {
    let response = await api.get("/best_podcasts?region=br");
    const { data } = response;
    dispatch(podcasts(data.podcasts));
  };
};

//fetch the list of episodes for a podcast
export const fetchPodcast = (podcastId, next_episode_pub_date = "") => {
  return async (dispatch) => {
    let optionForPagination = !!next_episode_pub_date
      ? `?next_episode_pub_date=${next_episode_pub_date}`
      : "";
    let response = await api.get(
      `/podcasts/${podcastId}${optionForPagination}`
    );
    const { data } = response;
    if (!next_episode_pub_date) {
      dispatch(podcast(data));
    }
    data.episodes.map((episode) => dispatch(episodeList(episode)));
  };
};

//search for a specific podcast author
export const searchPodcast = (name) => {
  return async (dispatch) => {
    function getPodcastArtist() {
      return api.get(`/typeahead?show_podcasts=1`, { params: { q: name } });
    }
    function getPodcastEpisodes() {
      return api.get("/search", { params: { q: name } });
    }
    axios.all([getPodcastArtist(), getPodcastEpisodes()]).then(
      axios.spread(function (podcastArtist, podcastEpisode) {
        dispatch(podcasts(podcastArtist.data.podcasts));
        dispatch(search_results(podcastEpisode.data.results));
      })
    );
  };
};

export const fetchSingleEpisode = (episodeId) => {
  return async (dispatch) => {
    let response = await api.get(`/episodes/${episodeId}`);
    const { data } = response;
    dispatch(episodeInfo(data));
  };
};

export const fetchRecommendations = (string, id) => {
  return async (dispatch) => {
    if (string === "podcast") {
      let { data: recommendations } = await api.get(
        `/podcasts/${id}/recommendations`
      );
      dispatch(set_recommendations(recommendations));
    }
    if (string === "episode") {
      let { data: recommendations } = await api.get(
        `/episodes/${id}/recommendations`
      );
      dispatch(set_recommendations(recommendations));
    }
    return;
  };
};

export const fetchGenres = (genresArray = []) => {
  return async (dispatch) => {
    let response = await api.get("/genres");
    response.data.genres.map((genre) => {
      if (genresArray.includes(genre.id)) {
        dispatch(genres(genre.name));
      }
    });
  };
};
