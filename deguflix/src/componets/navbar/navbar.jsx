import { Link } from 'react-router-dom'

function NavBar() {
    return ( 
        <nav>
            <ul className='flex gap-3'>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"filmes"}>filmes</Link></li>
                <li><Link to={"sobre"}>sobre</Link></li>
                <li><Link to={"contato"}>contato</Link></li>
            </ul>
        </nav>
     );
}

export default NavBar;