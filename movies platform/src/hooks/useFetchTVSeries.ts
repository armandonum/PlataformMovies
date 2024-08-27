import { useState, useEffect } from 'react';
import { fetchFromApi } from '../api/api';

interface TVSeries {
  id: number;
  name: string;
  poster_path: string;
  overview: string;
}

function useFetchTVSeries() {
  const [series, setSeries] = useState<TVSeries[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const data = await fetchFromApi('/tv/popular?');
        setSeries(data.results);
      } catch (err) {
        setError('Error loading TV series');
      } finally {
        setLoading(false);
      }
    };

    fetchSeries();
  }, []);

  return { series, loading, error };
}

export default useFetchTVSeries;