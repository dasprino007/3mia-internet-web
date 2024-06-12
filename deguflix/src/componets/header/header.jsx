import NavBar from "../navbar/navbar";
import { Outlet } from "react-router-dom"

function Header() {
    return ( 
        <header className="flex flex-row py-4 mb-4 text-xl">
        <h1 className="mx-2">Deguflix</h1>
        <NavBar></NavBar>
        </header>
     );
}

export default Header ;