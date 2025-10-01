import axios from "axios";
import store from "../redux/store";
import { setLoading } from "../redux/moviesReducer";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

axiosInstance.interceptors.request.use(
  (config) => {
    store.dispatch(setLoading(true));
    config.params = {
      ...config.params,
      api_key: "266fa35430a1a599464e4bee16690be8", 
    };
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    store.dispatch(setLoading(false));
    return response;
  },
  (error) => {
    store.dispatch(setLoading(false));
    return Promise.reject(error);
  }
);
