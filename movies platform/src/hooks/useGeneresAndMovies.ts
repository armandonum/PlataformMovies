import { useState, useEffect } from 'react';

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
  generes: Genre[];
  movies: Movie[];
  loading: boolean;
  error: string | null;
  fetchMoviesByGenere: (genreId: number) => Promise<void>;
  selectGenere: (genre: Genre) => void;
  clearSelection: () => void;
  selectedGenere: Genre | null;
}

const useGeneresAndMovies = (): UseGenresAndMovies => {
  const [generes, setGeneres] = useState<Genre[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedGenere, setSelectedGenere] = useState<Genre | null>(null);

  useEffect(() => {
    const fetchGeneres = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=1bdcbbadf977d6001b666f71148cb673');
        const data = await response.json();
        setGeneres(data.genres);
      } catch (err) {
        setError('Error loading genres');
      } finally {
        setLoading(false);
      }
    };

    fetchGeneres();
  }, []);

  const fetchMoviesByGenere = async (genreId: number) => {
    setSelectedGenere(generes.find(genere => genere.id === genreId) || null);
    setLoading(true);
    try {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=1bdcbbadf977d6001b666f71148cb673&with_genres=${genreId}`);
      const data = await response.json();
      setMovies(data.results);
    } catch (err) {
      setError('Error loading movies');
    } finally {
      setLoading(false);
    }
  };

  const selectGenere = (genre: Genre) => {
    fetchMoviesByGenere(genre.id);
  };

  const clearSelection = () => {
    setSelectedGenere(null);
    setMovies([]);
  };

  return {
    generes,
    movies,
    loading,
    error,
    fetchMoviesByGenere,
    selectGenere,
    clearSelection,
    selectedGenere
  };
};

export default useGeneresAndMovies;
