import { useState, useEffect, useRef } from 'react';
import { fetchFromApi } from '../api/api'; 


interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

interface UseMovies {
  movies: Movie[];
  selectedMovie: Movie | null;
  loading: boolean;
  error: string | null;
  carouselRef: React.RefObject<HTMLDivElement>;
  currentIndex: number;
  handleMovieClick: (movie: Movie) => void;
  handleCloseDetail: () => void;
  handleNext: () => void;
  handlePrev: () => void;
}

const useHomeMovies = (): UseMovies => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        //const moviesUrl = 'https://api.themoviedb.org/3/trending/movie/week?api_key=1bdcbbadf977d6001b666f71148cb673';
        const moviesUrl = await fetchFromApi('/trending/movie/week?');
        const moviesResponse = await fetch(moviesUrl);
        const moviesData = await moviesResponse.json();
        setMovies(moviesData.results.slice(0, 10));
      } catch (err) {
        setError('Error loading movies');
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

  const handleNext = () => {
    if (carouselRef.current) {
      const newIndex = (currentIndex + 1) % movies.length;
      setCurrentIndex(newIndex);
      carouselRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      const newIndex = (currentIndex - 1 + movies.length) % movies.length;
      setCurrentIndex(newIndex);
      carouselRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
    }
  };

  return {
    movies,
    selectedMovie,
    loading,
    error,
    carouselRef,
    currentIndex,
    handleMovieClick,
    handleCloseDetail,
    handleNext,
    handlePrev
  };
};

export default useHomeMovies;
