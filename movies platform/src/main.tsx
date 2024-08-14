
import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import{ Movie} from './components/pages/NewMovie.tsx'
import Template from './components/templates/template'


const routes =createBrowserRouter([
  {
    path: '/',
    element: <Template><App /></Template>
  },
  {
    path: '/NewMovie',
    element: <Template><Movie /></Template>
  },
 
]
);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)