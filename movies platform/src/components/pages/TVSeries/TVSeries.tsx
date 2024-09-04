import React, {useState} from 'react';
import useFetchTVSeries from '../../../hooks/useFetchTVSeries';
import MovieDetail from '../../templates/moviedetails/MovieDetail';
import SeeNow from '../../templates/SeeNow';
import './TVSeries.css';

const TVSeries: React.FC = () => {
  const { series, loading, error, selectedMovie, handleMovieClick, handleCloseDetail } = useFetchTVSeries();
  const [showSeeNow, setShowSeeNow] = useState(false);

  const handleSeeNowClick = () => {
    setShowSeeNow(true);
  };
  const handleCloseSeeNow = () => {
    setShowSeeNow(false);
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="tvseries-container">
      
        <h1 className="tvseries-title">TV Series</h1>
          <div className="tvseries-list">
            {series.map((seriesItem) => (
              <div
                key={seriesItem.id}
                className="tvseries-item"
                onClick={() => handleMovieClick(seriesItem)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${seriesItem.poster_path}`}
                  alt={seriesItem.name}
                />
                <div className="tvseries-item-title">{seriesItem.name}</div>
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
              isTVSeries={true}
            />
          )}
        </>
      )}
          </div>
      
    </div>
  );
}

export default TVSeries;