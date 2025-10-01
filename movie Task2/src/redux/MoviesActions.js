import { axiosInstance } from "../Helpers/axiosInstance";
import { setMovies, setError } from "./moviesReducer"

export const fetchMovies = (query, page) => async (dispatch) => {
  try {
    const url = query ? "/search/movie" : "/movie/popular";
    const response = await axiosInstance.get(url, {
      params: { query, page },
    });
    dispatch(setMovies(response.data.results));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
