import React, { useState } from 'react';
import useFetchTVSeries from '../../../hooks/useFetchTVSeries';
import './TVSeries.css';

const TVSeries: React.FC = () => {
  const { series, loading, error } = useFetchTVSeries();
  const [selectedSeries, setSelectedSeries] = useState<any | null>(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="tvseries-container">
      {selectedSeries ? (
        <div className="tvseries-detail">
          <button className="back-button" onClick={() => setSelectedSeries(null)}>Back</button>
          <img
            src={`https://image.tmdb.org/t/p/w500${selectedSeries.poster_path}`}
            alt={selectedSeries.name}
          />
          <h2 className="tvseries-detail-title">{selectedSeries.name}</h2>
          <p className="tvseries-detail-overview">{selectedSeries.overview}</p>
        </div>
      ) : (
        <>
          <h1 className="tvseries-title">TV Series</h1>
          <div className="tvseries-list">
            {series.map((seriesItem) => (
              <div
                key={seriesItem.id}
                className="tvseries-item"
                onClick={() => setSelectedSeries(seriesItem)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${seriesItem.poster_path}`}
                  alt={seriesItem.name}
                />
                <div className="tvseries-item-title">{seriesItem.name}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default TVSeries;