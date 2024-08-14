import React from 'react';
import useMovie from '../hooks/useFetchMovies';
import './MovieList.css';

function MovieList() {
  const { movies, loading, error } = useMovie();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="movie-list" >
      
      
        {movies.map(movie => (
          <div className="movie-item">
 {/* <h2>{movie.title}</h2> */}
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            {/* <p>{movie.overview}</p> */}
          </div>
           
         
        ))}
     
    </div>
  );
}

export default MovieList;

