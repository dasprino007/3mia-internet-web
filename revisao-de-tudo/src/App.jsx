import './App.css'
import ConteudoPrincipal from './paginas/ConteudoPrincipal'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Container from './paginas/Container'
import Card from './components/Card'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [artistas, setArtistas] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/get/artistas/")
    .then(res => res.json())
    .then(data => setArtistas(data))
    .catch(err => console.error(err))
  })

  return (
    <>
      <Header />
      <Container>
        <Sidebar />
        <ConteudoPrincipal>
          {
            artistas.map((artista) => {
              <div className="card">
              <p>{artista.nome}</p>
              <div className="containers"></div>
              </div>
            })
          }
        </ConteudoPrincipal>
      </Container>
    </>
  )
}

export default App
