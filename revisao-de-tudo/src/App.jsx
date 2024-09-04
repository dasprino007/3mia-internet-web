import './App.css'
import Card from './Card'
import NavCard from './NavCard'

function App() {

  return (
    <>
      <header>
      </header>
      <main>
        <nav>
          <NavCard />
          <NavCard />
          <NavCard />
        </nav>
        <section className='Card-Section'>
          <div className='column-do-jose'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
