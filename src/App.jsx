import { Outlet } from "react-router-dom"
import Header from "./componets/header/header"
import Footer from "./componets/footer/Footer"

function App() {

  return (
    <>
    <Header></Header>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
