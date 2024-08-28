import { useState } from 'react';
import { fetchFromApi } from '../api/api';

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

  return { results, loading, error, handleSearch };
};

export default useSearch;