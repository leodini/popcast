import api from "../../api";
import { podcasts } from "../ducks/podcastsReducer";

export const fetchBestPodcasts = () => {
  return (dispatch) => {
    api
      .get("/best_podcasts")
      .then((res) => dispatch(podcasts(res.data.podcasts)))
      .catch((err) => console.log(err));
  };
};
