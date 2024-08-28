import { useState, useEffect } from 'react';
import { fetchFromApi } from '../api/api';
import { Movie } from '../types/types';



function useUpcomingMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchFromApi('/movie/upcoming?');
        setMovies(data.results);
      } catch (err) {
        setError((error as any).message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);


  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseDetail = () => {
    setSelectedMovie(null);
  };

  return { movies, loading, error,    selectedMovie, 
     
    handleMovieClick, 
    handleCloseDetail  };
}

export default useUpcomingMovies;
