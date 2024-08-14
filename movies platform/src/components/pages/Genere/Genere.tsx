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
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  useEffect(() => {
    const fetchGenresAndMovies = async () => {
      try {
        const genresUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=1bdcbbadf977d6001b666f71148cb673';
        const genresResponse = await fetch(genresUrl);
        const genresData = await genresResponse.json();
        setGenres(genresData.genres);
      } catch (err) {
        setError('Error loading genres');
      } finally {
        setLoading(false);
      }
    };

    fetchGenresAndMovies();
  }, []);

  const handleGenreClick = async (genre: Genre) => {
    setSelectedGenre(genre);
    setLoading(true);

    try {
      const moviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=1bdcbbadf977d6001b666f71148cb673&with_genres=${genre.id}`;
      const moviesResponse = await fetch(moviesUrl);
      const moviesData = await moviesResponse.json();
      setMovies(moviesData.results);
    } catch (err) {
      setError('Error loading movies');
    } finally {
      setLoading(false);
    }
  };

  const handleBackClick = () => {
    setSelectedGenre(null);
    setMovies([]);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="genere-container">
      {!selectedGenre ? (
        <>
          <h1 className="genere-title">Movie Genres</h1>
          <div className="genre-section">
            <h2 className="genre-title">Genres</h2>
            <ul className="genre-list">
              {genres.map((genre) => (
                <li key={genre.id} className="genre-item" onClick={() => handleGenreClick(genre)}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div className="genre-detail">
          <button className="back-button" onClick={handleBackClick}>Back to Genres</button>
          <h2 className="genre-detail-title">{selectedGenre.name}</h2>
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
