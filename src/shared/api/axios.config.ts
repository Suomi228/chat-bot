import axios from "axios";
import { BASE_URL, API_TOKEN } from "../consts/consts.ts";

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${API_TOKEN}`;
  return config;
});

instance.interceptors.response.use(
  (config) => {
    console.log("hi from succes axios");
    return config;
  }
);

export default instance;
