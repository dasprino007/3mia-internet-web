import { Link } from 'react-router-dom'

function FooterNavbar() {
    return (         
        <ul className='flex flex-col gap-0.5 border-t-2 border-white'>
            <li className='hover:underline decoration-third-color'><Link to={"/"}>Home</Link></li>
            <li className='hover:underline decoration-third-color'><Link to={"filmes"}>filmes</Link></li>
            <li className='hover:underline decoration-third-color'><Link to={"sobre"}>sobre</Link></li>
            <li className='hover:underline decoration-third-color'><Link to={"contato"}>contato</Link></li>
        </ul>
    );
}

export default FooterNavbar;