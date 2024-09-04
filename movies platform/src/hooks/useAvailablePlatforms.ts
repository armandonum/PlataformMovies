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
        const response = await fetchFromApi(`/movie/${movieId}/watch/providers?`);
        if (response.results?.US) { 
          const platformsData = response.results.US.flatMap((region: any) =>
            region.providers.map((provider: any) => ({
              provider_id: provider.provider_id,
              provider_name: provider.provider_name,
              logo_path: provider.logo_path,
            }))
          );
          setPlatforms(platformsData);
        } else {
          setError('No platforms found');
        }
      } catch (err) {
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
