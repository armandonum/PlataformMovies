// Genere.tsx
import { useEffect, useState } from 'react';
import './Genere.css';

interface Genre {
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
  const [genres, setGenres] = useState<Genre[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGenresAndMovies = async () => {
      try {
        const genresUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=1bdcbbadf977d6001b666f71148cb673';
        const genresResponse = await fetch(genresUrl);
        const genresData = await genresResponse.json();
        setGenres(genresData.genres);

        const moviesUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=1bdcbbadf977d6001b666f71148cb673';
        const moviesResponse = await fetch(moviesUrl);
        const moviesData = await moviesResponse.json();
        setMovies(moviesData.results);
      } catch (err) {
        setError('Error loading genres and movies');
      } finally {
        setLoading(false);
      }
    };

    fetchGenresAndMovies();
  }, []);

  if (loading) return <p>Loading genres and movies...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="genere-container">
      <h1 className="genere-title">Movie Genres</h1>
      <div className="genre-section">
        <h2 className="genre-title">Genres</h2>
        <ul className="genre-list">
          {genres.map((genre) => (
            <li key={genre.id} className="genre-item">
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>Fecha de lanzamiento: {movie.release_date}</p>
              <p>Calificación: {movie.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Genere;