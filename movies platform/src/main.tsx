import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Movie from './components/newMovie/NewMovie.tsx';
import Template from './components/templates/template.tsx';
import Genere from './components/Genere/Genere.tsx';
import Home from './components/Home/Home.tsx';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Template><App /></Template>,
  },
  {
    path: '/home',
    element: <Template><Home /></Template>,
  },
  {
    path: '/new-movie',
    element: <Template><Movie /></Template>,
  },
  {
    path: '/genre',
    element: <Template><Genere /></Template>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  
      <RouterProvider router={routes} />
  
  </StrictMode>,
);
