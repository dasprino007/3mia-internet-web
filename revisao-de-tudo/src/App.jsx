import './App.css'
import ConteudoPrincipal from './paginas/ConteudoPrincipal'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Container from './paginas/Container'

function App() {

  return (
    <>
      <Header />
      <Container>
        <Sidebar />
        <ConteudoPrincipal />
      </Container>
    </>
  )
}

export default App
