import MovieList from '../../../context/MovieList';
import './Movie.css'; // Importa los estilos desde el archivo CSS

export const Movie = () => {
  return (
    <div className="movie-list-container">
      <MovieList />

      <div className="coming-soon-section">
        <h2>Coming Soon</h2>
        <div className="coming-soon-list">
          {/* Aquí puedes agregar una lista de películas que están por venir */}
          <div className="coming-soon-item">
            <img src="https://via.placeholder.com/150" alt="Upcoming Movie" />
            <p>Upcoming Movie 1</p>
          </div>
        </div>
      </div>
    </div>
  );
};
