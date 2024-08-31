import React from 'react';
import useActors from '../../hooks/useActors';
import useTrailer from '../../hooks/useTrailer';
import useAvailablePlatforms from '../../hooks/useAvailablePlatforms';
import ActorList from './ActorList';
import PlatformList from './PlatformList'; 
import './SeeNow.css';

interface SeeNowProps {
  movieId: number;
  onClose: () => void;
  isTVSeries?: boolean;
}

const SeeNow: React.FC<SeeNowProps> = ({ movieId, onClose, isTVSeries = false }) => {
  const { actors, loading: actorsLoading, error: actorsError } = useActors(movieId);
  const { trailer, loading: trailerLoading, error: trailerError } = useTrailer(movieId);
  const { platforms, loading: platformsLoading, error: platformsError } = useAvailablePlatforms(movieId);

  return (
    <div className="see-now-wrapper">
      <button className="close-button_pla" onClick={onClose}>
        x
      </button>
      
      <div className='trailer_container'>
        <h2>See Trailer</h2>
        <div className="trailer-content">
          {trailerLoading ? (
            <p>Loading trailer...</p>
          ) : trailerError ? (
            <p>{trailerError}</p>
          ) : trailer ? (
            <iframe
              width="560"
              height="315"
              src={trailer}
              title="Movie Trailer"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          ) : (
            <p></p>
          )}
        </div>
      </div>

      <div className='platforms-container'>
        
        {platformsLoading ? (
          <p>Loading platforms...</p>
        ) : platformsError ? (
          <p></p>
        ) : (
          <PlatformList platforms={platforms} />
        )}
      </div>

      <div className='actors-container'>
        <h2>Actors</h2>
        {actorsLoading ? (
          <p>Loading actors...</p>
        ) : actorsError ? (
          <p>{actorsError}</p>
        ) : (
          <div className='actors-content'>
            <ActorList actors={actors} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SeeNow;
