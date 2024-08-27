import React, { useState } from 'react';
import useFetchTVSeries from '../../../hooks/useFetchTVSeries';
import MovieDetail from '../../templates/MovieDetail';
import './TVSeries.css';

const TVSeries: React.FC = () => {
  const { series, loading, error, selectedMovie, handleMovieClick, handleCloseDetail } = useFetchTVSeries();

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
        <MovieDetail movie={selectedMovie} onClose={handleCloseDetail} />
                 )}
          </div>
      
    </div>
  );
}

export default TVSeries;