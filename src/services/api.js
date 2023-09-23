import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketmovies-api-6d59.onrender.com"
});