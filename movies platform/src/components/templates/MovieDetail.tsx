import React from 'react';
import './MovieDetail.css';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

interface MovieDetailProps {
  movie: Movie;
  onClose: () => void;
  onSeeNow: () => void;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie, onClose,onSeeNow }) => {
  return (
    <div className="movie-detail-container active">
      <button className="close-button" onClick={onClose}>✕</button>
      <div className="movie-detail-content">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-detail-info">
          <h2>{movie.title}</h2>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average}</p>
          <p><strong>Overview:</strong> {movie.overview}</p>
          <button className="see-now-button"onClick={onSeeNow}>See Now</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
