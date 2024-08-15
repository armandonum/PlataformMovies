import { useState } from 'react';
import useUpcomingMovies from '../../../../hooks/useUpcomingMovies';
import './UpcomingMoviesList.css';

function UpcomingMoviesList() {
    const { movies, loading, error } = useUpcomingMovies() || {};


  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
      <div
        className="upcomingmovie-list"
       
      >
       
        {(movies as any[]).map(movie => (
          <div
            className="upcomingmovie-item"
              key={movie.id}
          >
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
             </div>
        ))}
      </div>
    );
}

export default UpcomingMoviesList;
