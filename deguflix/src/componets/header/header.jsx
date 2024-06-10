import NavBar from "../navbar/navbar";
import { Outlet } from "react-router-dom"

function Header() {
    return ( 
        <header className="flex flex-row p-4 mb-4 text-xl justify-between">
        <h1 className="mx-2">ola visitante</h1>
        <span className="mx-2">bem vindo ao MoviAPP!!!</span>
        <NavBar></NavBar>
        </header>
     );
}

export default Header ;