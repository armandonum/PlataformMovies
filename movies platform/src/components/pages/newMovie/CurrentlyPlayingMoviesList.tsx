import React,{useState} from 'react';
import useCurrentlyPlayingMovies from '../../../hooks/useFetchCurrentlyPlayingMovies';
import MovieDetail from '../../../components/templates/moviedetails/MovieDetail';
import SeeNow from '../../templates/SeeNow';
import './CurrentlyPlayingMoviesList.css';


const CurrentlyPlayingMoviesList: React.FC = () => {
  const { movies, loading, error, selectedMovie, handleMovieClick, handleCloseDetail } = useCurrentlyPlayingMovies();
  const [showSeeNow, setShowSeeNow] = useState(false);

  const handleSeeNowClick = () => {
    setShowSeeNow(true);
  };

  const handleCloseSeeNow = () => {
    setShowSeeNow(false);
  };
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="currently-playing-list">
      {movies.map(movie => (
        <div
          className="currently-playing-item"
          key={movie.id}
          onClick={() => handleMovieClick(movie)}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
      ))}

{selectedMovie && (
        <>
          <MovieDetail
            movie={selectedMovie}
            onClose={handleCloseDetail}
            onSeeNow={handleSeeNowClick}
          />
          {showSeeNow && (
            <SeeNow
              movieId={selectedMovie.id}
              onClose={handleCloseSeeNow}
            />
          )}
        </>
      )}
    </div>
  );
}

export default CurrentlyPlayingMoviesList;
