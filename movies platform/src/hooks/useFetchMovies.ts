import { useState, useEffect } from 'react';
import { fetchFromApi } from '../api/api';

import { Movie } from '../types/types';

function useMovie(_query: string) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchFromApi('/movie/popular?');
        setMovies(data.results);
      } catch (err) {
        setError((error as any).message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleMouseEnter = (movie: Movie) => {
    setBackgroundImage(movie.poster_path);
  };

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseDetail = () => {
    setSelectedMovie(null);
  };

  return { 
    movies, 
    loading, 
    error, 
    backgroundImage, 
    selectedMovie, 
    handleMouseEnter, 
    handleMovieClick, 
    handleCloseDetail 
  };
}

export default useMovie;
