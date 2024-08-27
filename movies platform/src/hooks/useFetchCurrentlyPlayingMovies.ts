import { useState, useEffect } from 'react';
import { fetchFromApi } from '../api/api'; 

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

function useCurrentlyPlayingMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchFromApi('/movie/now_playing?');
        setMovies(data.results);
      } catch (err) {
        setError((error as any).message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, loading, error };
}

export default useCurrentlyPlayingMovies;
