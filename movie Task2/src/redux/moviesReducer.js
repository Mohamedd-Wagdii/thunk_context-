const INITIAL_STATE = {
  movies: [],
  loading: false,
  error: null,
};

export default function MoviesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_MOVIES":
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
