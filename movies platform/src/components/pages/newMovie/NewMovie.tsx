import MovieList from './MovieList';
import './newMovie.css'; 
import UpcomingMoviesList from './UpcomingMoviesList';
import CurrentlyPlayingMoviesList from './CurrentlyPlayingMoviesList';
export const Movie = () => {
  return (
    <div className="movie-list-container">
      <MovieList />

      <div className="coming-soon-section">
        <h2>urrently playing</h2>
        <div className="coming-soon-list">
          {/* Aquí puedes agregar una lista de películas que están por venir */}
          <div className="coming-soon-item">
            
          <CurrentlyPlayingMoviesList />
          </div>
        </div>
      </div>
      <div className="coming-soon-section">
        <h2>Coming Soon</h2>
        <div className="coming-soon-list">
          {/* Aquí puedes agregar una lista de películas que están por venir */}
          <div className="coming-soon-item">
          <UpcomingMoviesList />
          </div>
        </div>
      </div>
    </div>
  );
};
