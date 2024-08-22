
import { fetchData } from '../utils/api';

export const fetchTrendingMovies = async () => {
  return fetchData('/trending/movie/week');
};

export const fetchCurrentlyPlayingMovies = async () => {
  return fetchData('/movie/now_playing');
};

export const fetchUpcomingMovies = async () => {
  return fetchData('/movie/upcoming');
};

export const fetchMoviesByGenere = async (genereId: number) => {
  return fetchData(`/discover/movie&with_generes=${genereId}`);
};
