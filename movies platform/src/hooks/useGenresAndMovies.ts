import { useState, useEffect } from 'react';
import { fetchFromApi } from '../api/api';

interface Genre {
  id: number;
  name: string;
}

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

interface UseGenresAndMovies {
  genres: Genre[];
  movies: Movie[];
  loading: boolean;
  error: string | null;
  fetchMoviesByGenre: (genreId: number) => Promise<void>;
  selectGenre: (genre: Genre) => void;
  clearSelection: () => void;
  selectedGenre: Genre | null;
}

const useGenresAndMovies = (): UseGenresAndMovies => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        //const  response= await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=1bdcbbadf977d6001b666f71148cb673');
        const response = await fetchFromApi('/genre/movie/list?');

        setGenres(response.genres);
      } catch (err) {
        setError('Error loading genres');
      } finally {
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);

  const fetchMoviesByGenre = async (genreId: number) => {
    setSelectedGenre(genres.find(genre => genre.id === genreId) || null);
    setLoading(true);
    try {
     // const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=1bdcbbadf977d6001b666f71148cb673&with_genres=${genreId}`);
      const response = await fetchFromApi(`/discover/movie?with_genres=${genreId}`);
     
      setMovies(response.results);
    } catch (err) {
      setError('Error loading movies');
    } finally {
      setLoading(false);
    }
  };

  const selectGenre = (genre: Genre) => {
    fetchMoviesByGenre(genre.id);
  };

  const clearSelection = () => {
    setSelectedGenre(null);
    setMovies([]);
  };

  return {
    genres,
    movies,
    loading,
    error,
    fetchMoviesByGenre,
    selectGenre,
    clearSelection,
    selectedGenre
  };
};

export default useGenresAndMovies;
