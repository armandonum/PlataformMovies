
import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import{ Movie} from './components/pages/newMovie/NewMovie'
import Template from './components/templates/template'
import Genere from './components/pages/Genre/Genre.tsx'
import Home from './components/pages/Home/Home.tsx';



const routes =createBrowserRouter([
  {
    path: '/',
    element: <Template><App /></Template>
  },
  {
    path: '/Home',
    element: <Template><Home /></Template>
  },
  {
    path: '/NewMovie',
    element: <Template><Movie /></Template>
  },
  {
    path: '/Genere',
    element: <Template><Genere /></Template>
  },
 
]
);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)