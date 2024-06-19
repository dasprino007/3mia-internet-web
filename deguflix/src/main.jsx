import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/home.jsx'
import Filmes from './pages/Filmes.jsx'
import Contato from './pages/Contato.jsx'
import Sobre from './pages/Sobre.jsx'
import NotFound from './pages/NotFound.jsx'
import SobreFilmes from './pages/SobreFilme'
import Blog from './pages/Blog'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      children: [
        {index: true, element:<Home/>},
        {path: "filmes", element: <Filmes/>},
        {path: "filmes/:id", element: <SobreFilmes/>},
        {path: "contato", element: <Contato/>},
        {path: "sobre", element: <Sobre/>},
        {path:"blog", element: <Blog/>},
        {path: "*", element: <NotFound/>}
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
