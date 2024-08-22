import { Genere,Movie } from '../types/types';


const API_KEY = '1bdcbbadf977d6001b666f71148cb673';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchGeneres = async (): Promise<Genere[]> => {
  const response = await fetch(`${BASE_URL}/genere/movie/list?api_key=${API_KEY}`);
  const data = await response.json();
  return data.generes;
};

export const fetchMoviesByGenere = async (genereId: number): Promise<Movie[]> => {
  const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_generes=${genereId}`);
  const data = await response.json();
  return data.results;
};

export const fetchTrendingMovies = async (): Promise<Movie[]> => {
  const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const fetchCurrentlyPlayingMovies = async (): Promise<Movie[]> => {
  const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const fetchUpcomingMovies = async (): Promise<Movie[]> => {
  const response = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};
