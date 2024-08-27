import React from 'react';
import useMovie from '../../../hooks/useFetchMovies';
import MovieDetail from '../../templates/MovieDetail';
import './MovieList.css';

function MovieList() {
  const { 
    movies, 
    loading, 
    error, 
    backgroundImage, 
    selectedMovie, 
    handleMouseEnter, 
    handleMovieClick, 
    handleCloseDetail 
  } = useMovie();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div
      className="newmovie-list"
      style={{
        backgroundImage: backgroundImage ? `url(https://image.tmdb.org/t/p/original${backgroundImage})` : ``,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.5s ease-in-out',
      }}
    >
      {movies.map(movie => (
        <div
          className="newmovie-item"
          key={movie.id}
          onMouseEnter={() => handleMouseEnter(movie)}
          onClick={() => handleMovieClick(movie)}
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

export default MovieList;
