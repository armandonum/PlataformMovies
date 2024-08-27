import React, { useEffect, useState } from 'react';
import { fetchFromApi } from '../../api/api';
import ActorList from './ActorList';
import './SeeNow.css';

interface SeeNowProps {
  movieId: number;
  onClose: () => void;
}

interface Actor {
  id: number;
  name: string;
  profile_path: string;
}

const SeeNow: React.FC<SeeNowProps> = ({ movieId, onClose }) => {
  const [trailer, setTrailer] = useState<string | null>(null);
  const [actors, setActors] = useState<Actor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const trailerData = await fetchFromApi(`/movie/${movieId}/videos?`);
        const actorsData = await fetchFromApi(`/movie/${movieId}/credits?`);
        const trailerVideo = trailerData.results.find((video: any) => video.type === 'Trailer');
        setTrailer(trailerVideo ? `https://www.youtube.com/watch?v=${trailerVideo.key}` : null);
        setActors(actorsData.cast || []); // Manejar caso donde cast puede ser undefined
      } catch (err) {
        setError('Error loading movie details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [movieId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="see-now-container">
      <button className="close-button" onClick={onClose}>✕</button>
      <div className="see-now-content">
        {trailer ? (
          <div className="trailer-container">
            <h2>Trailer</h2>
            <p>
              <a href={trailer} target="_blank" rel="noopener noreferrer">Watch Trailer on YouTube</a>
            </p>
          </div>
        ) : (
          <p>No trailer available</p>
        )}
        <div className="actors-container">
          <ActorList actors={actors} />
        </div>
      </div>
    </div>
  );
};

export default SeeNow;
