import { useState, useEffect } from 'react';

function useUpcomingMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=1bdcbbadf977d6001b666f71148cb673`);
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

export default useUpcomingMovies;
