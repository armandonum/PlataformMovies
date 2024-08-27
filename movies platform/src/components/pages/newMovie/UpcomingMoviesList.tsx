import { useState } from 'react';
import useUpcomingMovies from '../../../hooks/useUpcomingMovies';
import './UpcomingMoviesList.css';
import MovieDetail from '../../templates/MovieDetail';


function UpcomingMoviesList() {
  const { movies, loading, error, selectedMovie, handleMovieClick, handleCloseDetail } = useUpcomingMovies() || {};


  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div
      className="upcomingmovie-list"

    >

      {movies.map((movie) => (
        <div
          className="upcomingmovie-item"
          key={movie.id} onClick={() => handleMovieClick(movie)}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
      ))}
          {selectedMovie && (
        <MovieDetail movie={selectedMovie} onClose={handleCloseDetail} />
      )}
    </div>
  );
}

export default UpcomingMoviesList;
