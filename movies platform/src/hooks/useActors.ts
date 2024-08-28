import { useState, useEffect } from 'react';
import { fetchFromApi } from '../api/api';
import { Actor } from '../types/types';

const useActors = (movieId: number) => {
  const [actors, setActors] = useState<Actor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const actorsData = await fetchFromApi(`/movie/${movieId}/credits?`);
        setActors(actorsData.cast || []); 
      } catch (err) {
        setError('Error loading actors. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchActors();
  }, [movieId]);

  return { actors, loading, error };
};

export default useActors;
