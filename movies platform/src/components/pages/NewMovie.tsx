import MovieList from '../MovieList';

export const Movie = () => {
  return (
    <div >
      <div className="App">

        <main>
          <div style={
            {display: 'flex',
              backgroundColor: 'blue',
              // height de toda la pantalla
             // width: '100vw',
              height: '100vh',
              zIndex: 1,
             justifyContent: 'end',
             flexDirection: 'column',
            
            }
          }>
            hola
            <MovieList />
          </div>
          
        </main>
   <div style={{
    backgroundColor: 'blue',
    height: '100px',
   }}>
    adad
   </div>
        <footer>
          <p>© 2024 Movie Explorer. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
}