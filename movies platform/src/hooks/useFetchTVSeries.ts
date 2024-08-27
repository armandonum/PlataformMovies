import { useState, useEffect } from 'react';
import { fetchFromApi } from '../api/api';

interface Movie {
  name: string | undefined;
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

function useFetchMovie() {
  const [series, setSeries] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const data = await fetchFromApi('/tv/popular?');
        setSeries(data.results);
      } catch (err) {
        setError('Error loading TV series');
      } finally {
        setLoading(false);
      }
    };

    fetchSeries();
  }, []);
  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseDetail = () => {
    setSelectedMovie(null);
  };

  return { series, loading, error,
    selectedMovie, 
     
    handleMovieClick, 
    handleCloseDetail
   };
}

export default useFetchMovie;