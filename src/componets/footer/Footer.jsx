import FooterNavbar from "../navbar/FooterNavbar";

function Footer() {
    return ( 
    <>
    <section  className="Footer p-10 bg-secondary-color flex flex-row justify-between items-center">
    <div className="size-45">
        <h2 className="text-4xl font-bold">Deguflix</h2>
        <span className="text-xs font-thin">Copyright do site © 2024 Deguflix. Todos os direitos reservados.</span>
    </div>
    <div className="Footer Navbar flex flex-col">
        <h2>Paginas</h2>
        <FooterNavbar/>
    </div>
    </section>
    </>
    
    );
}

export default Footer;