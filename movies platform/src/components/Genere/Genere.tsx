import React, { useEffect, useState } from 'react';
import './Genere.css';

interface Genere {
  id: number;
  name: string;
}

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const Genere = () => {
  const [generes, setGeneres] = useState<Genere[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedGenere, setSelectedGenere] = useState<Genere | null>(null);

  useEffect(() => {
    const fetchGeneres = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/genere/movie/list?api_key=1bdcbbadf977d6001b666f71148cb673');
        const data = await response.json();
        setGeneres(data.generes);
      } catch (err) {
        setError('Error loading generes');
      } finally {
        setLoading(false);
      }
    };

    fetchGeneres();
  }, []);

  const fetchMoviesByGenere = async (genereId: number) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=1bdcbbadf977d6001b666f71148cb673&with_generes=${genereId}`);
      const data = await response.json();
      setMovies(data.results);
    } catch (err) {
      setError('Error loading movies');
    } finally {
      setLoading(false);
    }
  };

  const handleGenereClick = (genere: Genere) => {
    setSelectedGenere(genere);
    setLoading(true);
    fetchMoviesByGenere(genere.id);
  };

  const handleBackClick = () => {
    setSelectedGenere(null);
    setMovies([]);
  };

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
                <li key={genere.id} className="genere-item" onClick={() => handleGenereClick(genere)}>
                  {genere.name}
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div className="genere-detail">
          <button className="back-button" onClick={handleBackClick}>Back to Generes</button>
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
