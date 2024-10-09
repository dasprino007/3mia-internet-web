function ConteudoPrincipal({ children }) {
    return ( 
        <>
        <section className='main'>
            <div className='column-do-jose'>
                { children }
            </div>
        </section>
        </>
     );
}

export default ConteudoPrincipal;