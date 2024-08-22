import React, { useState } from 'react';
import useCurrentlyPlayingMovies from '../../../hooks/useCurrentlyPlayingMovies';
import './CurrentlyPlayingMoviesList.css';

const CurrentlyPlayingMoviesList = () => {
  const { movies, loading, error } = useCurrentlyPlayingMovies();
  const [backgroundImage, setBackgroundImage] = useState<string>('');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="currently-playing-list">
      {movies.map(movie => (
        <div
          className="currently-playing-item"
          key={movie.id}
          onMouseEnter={() => setBackgroundImage(movie.poster_path)}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
      ))}
    </div>
  );
}

export default CurrentlyPlayingMoviesList;
