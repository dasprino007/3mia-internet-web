import './App.css'
import ConteudoPrincipal from './paginas/ConteudoPrincipal'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Container from './paginas/Container'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [artistas, setArtistas] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/get/artistas")
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
          <h1>teste</h1>
          <div className='column-do-jose'>
          {
            artistas.filter(artista => artista.nome.includes("Taylor Swift"))
            .map(artista => (
              <>
                <p>{artista.nome}</p>
              </>
            ))
          }
          </div>
        </ConteudoPrincipal>
      </Container>
    </>
  )
}

export default App
