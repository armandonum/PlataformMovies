import MovieList from './MovieList';
import './newMovie.css'; 
import UpcomingMoviesList from './UpcomingMoviesList';
import CurrentlyPlayingMoviesList from './CurrentlyPlayingMoviesList';
export const Movie = () => {
  return (
    <div className="movie-list-container">
      <MovieList />

      <div className="coming-soon-section">
        <h2>Currently playing</h2>
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
};
