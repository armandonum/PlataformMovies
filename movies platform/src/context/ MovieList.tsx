import React, { useState } from 'react';
import useMovie from '../hooks/useMovie';
import '../styles/MovieList.css';

function MovieList() {
  const { movies, loading, error } = useMovie();
  const [backgroundImage, setBackgroundImage] = useState<string>('');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div
      className="newmovie-list"
      style={{
        backgroundImage: backgroundImage ? `url(https://image.tmdb.org/t/p/original${backgroundImage})` : '',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.5s ease-in-out',
      }}
    >
      {movies.map(movie => (
        <div
          className="newmovie-item"
          key={movie.id}
          onMouseEnter={() => setBackgroundImage(movie.poster_path)}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
      ))}
    </div>
  );
}

export default MovieList;
