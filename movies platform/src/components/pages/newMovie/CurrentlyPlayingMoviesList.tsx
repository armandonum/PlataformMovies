import React from 'react';
import useCurrentlyPlayingMovies from '../../../hooks/useFetchCurrentlyPlayingMovies';
import MovieDetail from '../../templates/MovieDetail';
import './CurrentlyPlayingMoviesList.css';


const CurrentlyPlayingMoviesList: React.FC = () => {
  const { movies, loading, error, selectedMovie, handleMovieClick, handleCloseDetail } = useCurrentlyPlayingMovies();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="currently-playing-list">
      {movies.map(movie => (
        <div
          className="currently-playing-item"
          key={movie.id}
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

export default CurrentlyPlayingMoviesList;
