import NavBar from "../navbar/navbar";
import { Outlet } from "react-router-dom"

function Header() {
    return ( 
        <header>
        <h1>ola visitante</h1>
        <span>bem vindo ao MoviAPP!!!</span>
        <NavBar></NavBar>
        </header>
     );
}

export default Header ;