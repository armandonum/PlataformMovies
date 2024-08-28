
import React from 'react';
import { Platform } from '../../types/types';
interface PlatformListProps {
  platforms: Platform[];
}

const PlatformList: React.FC<PlatformListProps> = ({ platforms }) => {
  return (
    <div className='platform-list'>
      {platforms.length > 0 ? (
        platforms.map(platform => (
          <div key={platform.provider_id} className='platform-item'>
            <button 
              onClick={() => window.open(platform.logo_path, '_blank')} 
            >
              Watch on {platform.provider_name}
            </button>
          </div>
        ))
      ) : (
        <p>No platforms available</p>
      )}
    </div>
  );
};

export default PlatformList;
