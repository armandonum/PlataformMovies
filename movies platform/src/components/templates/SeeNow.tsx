import React from 'react';
import useActors from '../../hooks/useActors';
import ActorList from './ActorList';
import './SeeNow.css';

interface SeeNowProps {
  movieId: number;
  onClose: () => void;
}

const SeeNow: React.FC<SeeNowProps> = ({ movieId, onClose }) => {
  const { actors, loading: actorsLoading, error: actorsError } = useActors(movieId);

  return (
    <div className="see-now-wrapper">
      <button className="close-button" onClick={onClose}>
        x
      </button>
      <div className='trailer_container'>
        <h2>See Trailer</h2>
        <div className="trailer-content">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/AZbEi95SuMg"
          ></iframe>
        </div>

      </div >

      <div className='seeMovie'>
        <button>HBO</button>
        <button> netflix    </button>
      </div>

      <div className='acrtors-container'>
        <h2>Actors</h2>
        <div className='actors-content'>
          <ActorList actors={actors} />
        </div>
      </div>
    </div>
  );
};

export default SeeNow;