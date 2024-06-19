import { Link } from 'react-router-dom'

function NavBar() {
    return ( 
        <nav>
            <ul className='flex gap-3'>
                <li className='hover:underline decoration-third-color'><Link to={"/"}>Home</Link></li>
                <li className='hover:underline decoration-third-color'><Link to={"filmes"}>filmes</Link></li>
                <li className='hover:underline decoration-third-color'><Link to={"sobre"}>sobre</Link></li>
                <li className='hover:underline decoration-third-color'><Link to={"contato"}>contato</Link></li>
                <li className='hover:underline decoration-third-color'><Link to={"blog"}>blog</Link></li>
            </ul>
        </nav>
     );
}

export default NavBar;