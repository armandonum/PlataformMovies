import { useState } from 'react';
import useUpcomingMovies from '../../../hooks/useUpcomingMovies';
import './UpcomingMoviesList.css';
import MovieDetail from '../../templates/moviedetails/MovieDetail';
import SeeNow from '../../templates/SeeNow';


function UpcomingMoviesList() {
  const { movies, loading, error, selectedMovie, handleMovieClick, handleCloseDetail } = useUpcomingMovies() || {};
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
    <div
      className="upcomingmovie-list"

    >

      {movies.map((movie) => (
        <div
          className="upcomingmovie-item"
          key={movie.id} onClick={() => handleMovieClick(movie)}
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

export default UpcomingMoviesList;
