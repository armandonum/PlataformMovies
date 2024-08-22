import React, { useEffect, useState, useRef } from 'react';
import './Home.css';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=1bdcbbadf977d6001b666f71148cb673');
        const data = await response.json();
        setMovies(data.results.slice(0, 10));
      } catch (err) {
        console.error('Error loading movies', err);
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

  return (
    <div className="home-container">
      <h1 className="welcome-message">Welcome to Movie World</h1>

      <div className="trending-section">
        <h2 className="trending-title">Currently Trending</h2>
        <div className="carousel-container">
          <div className="carousel" ref={carouselRef}>
            {movies.concat(movies).map((movie, index) => (
              <div key={index} className="carousel-item" onClick={() => handleMovieClick(movie)}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-controls">
            <button className="carousel-button" onClick={handlePrev}>◀</button>
            <button className="carousel-button" onClick={handleNext}>▶</button>
          </div>
        </div>
      </div>

      {selectedMovie && (
        <div className="movie-detail-container active">
          <button className="close-button" onClick={handleCloseDetail}>✕</button>
          <div className="movie-detail-content">
            <img
              src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
              alt={selectedMovie.title}
            />
            <div className="movie-detail-info">
              <h2>{selectedMovie.title}</h2>
              <p><strong>Release Date:</strong> {selectedMovie.release_date}</p>
              <p><strong>Rating:</strong> {selectedMovie.vote_average}</p>
              <p><strong>Overview:</strong> {selectedMovie.overview}</p>
              <button className="see-now-button">See Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
