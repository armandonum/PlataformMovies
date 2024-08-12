// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         grupo conformado por milton charly armando
//         <p> grupo de platafoma de PELICULAS         </p>
//       </p>
//     </>
//   )
// }

// export default App



import React from 'react';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Bienvenido a Movie Explorer</h1>
      </header>
      <main>
        <MovieList />
      </main>
      <footer>
        <p>© 2024 Movie Explorer. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;