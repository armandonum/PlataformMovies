import { useState, useEffect } from 'react';
import { fetchFromApi } from '../api/api';

const useTrailer = (movieId: number) => {
  const [trailer, setTrailer] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const trailerData = await fetchFromApi(`/movie/${movieId}/videos?`);
        const trailerVideo = trailerData.results.find((video: any) => video.type === 'Trailer');
        setTrailer(trailerVideo ? `https://www.youtube.com/embed/${trailerVideo.key}` : null);
      } catch (err) {
        setError('Error loading trailer. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTrailer();
  }, [movieId]);

  return { trailer, loading, error };
};

export default useTrailer;
