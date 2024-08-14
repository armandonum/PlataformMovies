import MovieList from '../../context/MovieList';
import './Movie.css'; // Importa los estilos desde el archivo CSS

export const Movie = () => {
  return (
   <div className='movie-container'>

<div className="movie-list-container">
        <MovieList />
      </div>

      <div className="coming-soon-section">
        <h2>Coming soon</h2>
        <div className="coming-soon-list">
          <p>Próximamente... (Puedes añadir otra lista aquí)</p>
        </div>
      </div>

      <div className="coming-soon-section">
        <h2>Coming soon</h2>
        <div className="coming-soon-list">
          <p>Próximamente... (Puedes añadir otra lista aquí)</p>
        </div>
      </div>

      <footer className="movie-footer">
        <p>© 2024 Movie Explorer. Todos los derechos reservados.</p>
      </footer>
   </div>
      
   
  );
}
