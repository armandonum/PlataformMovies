import React from 'react';
import useGeneresAndMovies from '../../../hooks/useGeneresAndMovies';
import './Genere.css';

const Genere = () => {
  const {
    generes,
    movies,
    loading,
    error,
    selectGenere,
    clearSelection,
    selectedGenere
  } = useGeneresAndMovies();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="genere-container">
      {!selectedGenere ? (
        <>
          <h1 className="genere-title">Movie Generes</h1>
          <div className="genere-section">
            <h2 className="genere-title">Generes</h2>
            <ul className="genere-list">
              {generes.map((genere) => (
                <li key={genere.id} className="genere-item" onClick={() => selectGenere(genere)}>
                  {genere.name}
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div className="genere-detail">
          <button className="back-button" onClick={clearSelection}>Back to Generes</button>
          <h2 className="genere-detail-title">{selectedGenere.name}</h2>
          <div className="movie-list">
            {movies.map((movie) => (
              <div key={movie.id} className="movie-item">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <p>Release Date: {movie.release_date}</p>
                  <p>Rating: {movie.vote_average}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Genere;
