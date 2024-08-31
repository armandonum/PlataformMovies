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
        return '#'; // URL predeterminada si no se encuentra la plataforma
    }
  };

  return (
    <div className='platform-list'>
      {platforms.length > 0 ? (
        platforms.map(platform => (
          <div key={platform.provider_id} className='platform-item'>
            <button 
              onClick={() => window.open(generatePlatformUrl(platform.provider_name, platform.provider_id), '_blank')}
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
