import { useState } from 'react';
import { useEffect } from 'react';

export function MovieDetails({ movieId }: { movieId: number }) {
  const [details, setDetails] = useState<{ title: string; overview: string; backdrop_path: string } | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=1bdcbbadf977d6001b666f71148cb673`);
      const data = await response.json();
      setDetails(data);
    };
    fetchDetails();
  }, [movieId]);

  if (!details) return <p>Cargando detalles...</p>;

  return (
    <div>
      <h2>{details.title}</h2>
      <p>{details.overview}</p>
      <img src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`} alt={details.title} />
      {/* Agregar más detalles */}
    </div>
  );
}
