import { useState, useEffect } from 'react';
//import fetch from 'node-fetch';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

function useMovie() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const url = 'https://api.themoviedb.org/3/movie/popular?api_key=1bdcbbadf977d6001b666f71148cb673';
        const response = await fetch(url);
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

export default useMovie;
