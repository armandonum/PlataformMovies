
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
}

const SeeNow: React.FC<SeeNowProps> = ({ movieId, onClose }) => {
  const { actors, loading: actorsLoading, error: actorsError } = useActors(movieId);
  const { trailer, loading: trailerLoading, error: trailerError } = useTrailer(movieId);
  const { platforms, loading: platformsLoading, error: platformsError } = useAvailablePlatforms(movieId);

  return (
    <div className="see-now-wrapper">
      <button className="close-button" onClick={onClose}>
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
             
            ></iframe>
          ) : (
            <p>No trailer available</p>
          )}
        </div>
      </div>
      
      <PlatformList platforms={platforms} />

      <div className='actors-container'>
        <h2>Actors</h2>
        <div className='actors-content'>
          <ActorList actors={actors} />
        </div>
      </div>
    </div>
  );
};

export default SeeNow;
