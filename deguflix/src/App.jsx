import { Outlet } from "react-router-dom"
import Header from "./componets/header/header"

function App() {

  return (
    <>
    <Header></Header>
    <Outlet/>
    </>
  )
}

export default App
