import { createContext } from 'react';

const MovieContext = createContext({
  isLoading: false,
  currentMovie: [],
  recommendedMovies: [],
  fetchMovieByTitle: () => {},
  fetchMovieRecommendations: () => {},
  fetchPopularMovies: () => {},
  updateCurrentMovie: () => {},
});

export default MovieContext;
