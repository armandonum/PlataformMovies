import React from 'react';
import useMovie from '../hooks/useFetchMovies';

function MovieList() {
  const { movies, loading, error } = useMovie();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Películas Populares</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p>{movie.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
