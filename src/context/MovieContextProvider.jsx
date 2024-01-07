import { useState } from 'react';
import MovieContext from './MovieContext';
import axios from 'axios';

const MovieContextProvider = ({ children }) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  const [currentMovie, setCurrentMovie] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovieByTitle = async (title) => {
    setIsLoading(true);
    const response = await axios.get(
      `${baseUrl}/search/movie${apiKey}&query=${title}`
    );

    if (response.data.results.length > 0) {
      setCurrentMovie(response.data.results[0]);
    }
    setIsLoading(false);
  };

  const fetchPopularMovies = async () => {
    setIsLoading(true);
    const response = await axios.get(`${baseUrl}/movie/now_playing${apiKey}`);
    setCurrentMovie(response.data.results[1]);
    setIsLoading(false);
  };

  const fetchMovieRecommendations = async (movieId) => {
    setIsLoading(true)
    const response = await axios.get(
      `${baseUrl}/movie/${movieId}/recommendations${apiKey}`
    );
    if (response.data.results.length > 0) {
      setRecommendedMovies(response.data.results);
    }
    setIsLoading(false)
  };

  const updateCurrentMovie = (movie) => {
    setCurrentMovie(movie);
  };

  return (
    <MovieContext.Provider
      value={{
        currentMovie,
        recommendedMovies,
        fetchMovieByTitle,
        fetchMovieRecommendations,
        fetchPopularMovies,
        updateCurrentMovie,
        isLoading,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
