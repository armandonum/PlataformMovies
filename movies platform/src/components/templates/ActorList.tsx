import React from 'react';
import './ActorList.css';
import { Actor } from '../../types/types';

interface ActorListProps {
  actors: Actor[];
}

const ActorList: React.FC<ActorListProps> = ({ actors }) => {

  return (
    <div className="actor-list-container">
      <div className="actor-list">
        {actors.length > 0 ? (
          actors.map(actor => (
            <div className="actor-item" key={actor.id}>
              <img
                className="actor-image"
                src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : '/default-profile.png'}
                alt={actor.name}
              />
              <p className="actor-name">{actor.name}</p>
            </div>
          ))
        ) : (
          <p>No cast information available</p>
        )}
      </div>
     
    </div>
    
  );
};

export default ActorList;
