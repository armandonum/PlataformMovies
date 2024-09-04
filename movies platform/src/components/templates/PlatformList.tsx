import React from 'react';
import { Platform } from '../../types/types';

interface PlatformListProps {
  platforms: Platform[];
}

const PlatformList: React.FC<PlatformListProps> = ({ platforms }) => {
  const generatePlatformUrl = (platformName: string, movieId: number) => {
    switch (platformName.toLowerCase()) {
      case 'netflix':
        return `https://www.netflix.com/title/${movieId}`;
      case 'hulu':
        return `https://www.hulu.com/watch/${movieId}`;
      case 'disney+':
        return `https://www.disneyplus.com/movies/${movieId}`;
      case 'amazon prime video':
        return `https://www.amazon.com/dp/${movieId}`;
      default:
        return '#';
    }
  };

  return (
    <div className='platform-list'>
      {true ? (
        platforms.map(platform => (
          <div key={platform.provider_id} className='platform-item'>
            <button
              onClick={() => window.open(generatePlatformUrl(platform.provider_name, platform.provider_id), '_blank')}
            >
              <img
                src={`https://image.tmdb.org/t/p/w45${platform.logo_path}`}
                alt={platform.provider_name}
                className='platform-logo'
              />
              Watch on {platform.provider_name}
            </button>
          </div>
        ))
      ) : (
        
        <p></p>
      )}
    </div>
  );
};

export default PlatformList;
