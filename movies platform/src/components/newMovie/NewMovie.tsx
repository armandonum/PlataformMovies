import React from 'react';
import MovieList from '../../context/ MovieList';
import './Movie.css';
import UpcomingMoviesList from './MovieList/UpcomingMoviesList';
import CurrentlyPlayingMoviesList from './MovieList/CurrentlyPlayingMoviesList';

const NewMovie = () => {
  return (
    <div className="movie-list-container">
      <MovieList />

      <div className="coming-soon-section">
        <h2>Currently Playing</h2>
        <div className="coming-soon-list">
          <CurrentlyPlayingMoviesList />
        </div>
      </div>
      <div className="coming-soon-section">
        <h2>Coming Soon</h2>
        <div className="coming-soon-list">
          <UpcomingMoviesList />
        </div>
      </div>
    </div>
  );
}

export default NewMovie;
