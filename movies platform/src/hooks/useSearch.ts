import { useState } from 'react';
import { fetchFromApi } from '../api/api';
import { Movie } from '../types/types';

interface SearchResult {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
}

const useSearch = (query: string) => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleSearch = async (query: string) => {
    if (!query) {
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await fetchFromApi(`/search/multi?query=${query}`);
      setResults(response.results);
    } catch (err) {
      setError('Error fetching search results');
    } finally {
      setLoading(false);
    }
  };

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseDetail = () => {
    setSelectedMovie(null);
  };

  return {
    results,
    loading,
    error,
    handleSearch,
    handleMovieClick,
    handleCloseDetail,
    selectedMovie
  };
};

export default useSearch;
