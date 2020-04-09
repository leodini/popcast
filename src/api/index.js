import axios from "axios";

export default axios.create({
  baseURL: "https://listen-api.listennotes.com/api/v2/",
  headers: {
    "X-ListenAPI-Key": process.env.API_KEY,
  },
});
