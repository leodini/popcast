import axios from "axios";

export default axios.create({
  baseURL: "https://listen-api.listennotes.com/api/v2/",
  headers: {
    "X-ListenAPI-Key": "34f1ea09a0ae4b04a1b0123440f22956",
  },
});
