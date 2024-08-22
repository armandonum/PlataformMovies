import React, { useState, useEffect } from 'react';
import './TVSeries.css';

interface TVSeries {
  id: number;
  name: string;
  poster_path: string;
  overview: string;
}

const TVSeries: React.FC = () => {
  const [series, setSeries] = useState<TVSeries[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSeries, setSelectedSeries] = useState<TVSeries | null>(null);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=1bdcbbadf977d6001b666f71148cb673');
        const data = await response.json();
        setSeries(data.results);
      } catch (err) {
        setError('Error loading TV series');
      } finally {
        setLoading(false);
      }
    };

    fetchSeries();
  }, []);

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
            {series.map((series) => (
              <div
                key={series.id}
                className="tvseries-item"
                onClick={() => setSelectedSeries(series)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
                  alt={series.name}
                />
                <div className="tvseries-item-title">{series.name}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default TVSeries;
