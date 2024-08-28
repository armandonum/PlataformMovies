import { useState, useEffect } from 'react';
import { fetchFromApi } from '../api/api';
import { Platform } from '../types/types';



const useAvailablePlatforms = (movieId: number) => {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlatforms = async () => {
      try {
        const response = await fetchFromApi(`/movie/${movieId}?/watch/providers`);
        console.log('API Response:', response); 
        setPlatforms(response.results.US.flatrate);

  
        
      } catch (err) {
        console.error('Error fetching platforms:', err);
        setError('Error loading platforms. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPlatforms();
  }, [movieId]);

  return { platforms, loading, error };
};

export default useAvailablePlatforms;
