import { useState, useEffect } from 'react';

function useCurrentlyPlayingMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=1bdcbbadf977d6001b666f71148cb673`);
        const data = await response.json();
        setMovies(data.results);
      
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, loading, error };
}

export default useCurrentlyPlayingMovies;
