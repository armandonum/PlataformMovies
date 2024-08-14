import MovieList from '../../../context/MovieList';
import './Movie.css'; 
import UpcomingMoviesList from './MovieList/UpcomingMoviesList';
import CurrentlyPlayingMoviesList from './MovieList/CurrentlyPlayingMoviesList';
export const Movie = () => {
  return (
   <div className='movie-container'>

<div className="movie-list-container">
        <MovieList />
      </div>

      <div className="currently-playing">
        <h2>currently playing</h2>
        <div className="currently-plaing-list">
          
          <CurrentlyPlayingMoviesList />
        </div>
        
        
      </div>

      <div className="coming-soon-section">
        <h2>Coming soon</h2>
        <div className="coming-soon-list">
          
        <UpcomingMoviesList />
        </div>
      </div>

      <footer className="movie-footer">
        <p>© 2024 Movie Explorer. Todos los derechos reservados.</p>
      </footer>
   </div>
      
   
  );
}
