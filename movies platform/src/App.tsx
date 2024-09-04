
import './App.css'
import images from './logo/ours.jpeg'
import images2 from './logo/ours2.jpeg'
import images3 from './logo/ours3.jpg'


function App() {


   return (
    <>
          




<div id="carrusel-contenido">
            <div id="carrusel-caja">
                <div className="carrusel-elemento">
                    <img src={images} />
                </div>
                <div className="carrusel-elemento">   
                    <img src={images2}/>
                </div>
                <div className="carrusel-elemento">   
                <img src={images3} />               
                </div>
            </div>
        </div>
    </>
  )
}

export default App



// import React from 'react';
// import MovieList from './components/MovieList';

// function App() {
//   return (



    
//     <div className="App">
//       <header>
//         <h1>Bienvenido a Movie Explorer</h1>
//       </header>
//       <main>
//         <MovieList />
//       </main>
//       <footer>
//         <p>© 2024 Movie Explorer. Todos los derechos reservados.</p>
//       </footer>
//     </div>
//   );
// }

// export default App;
