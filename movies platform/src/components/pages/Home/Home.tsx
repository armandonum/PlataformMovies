import React, { useState } from 'react';
import useHomeMovies from '../../../hooks/useHomeMovies';
import MovieDetail from '../../templates/MovieDetail';
import SeeNow from '../../templates/SeeNow';
import './Home.css';

const Home: React.FC = () => {
  const {
    movies,
    selectedMovie,
    loading,
    error,
    carouselRef,
    handleMovieClick,
    handleCloseDetail,
    handleNext,
    handlePrev
  } = useHomeMovies();

  const [showSeeNow, setShowSeeNow] = useState(false);

  const handleSeeNowClick = () => {
    setShowSeeNow(true);
  };

  const handleCloseSeeNow = () => {
    setShowSeeNow(false);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

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
        <>
          <MovieDetail
            movie={selectedMovie}
            onClose={handleCloseDetail}
            onSeeNow={handleSeeNowClick}
          />
          {showSeeNow && (
            <SeeNow
              movieId={selectedMovie.id}
              onClose={handleCloseSeeNow}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Home;
