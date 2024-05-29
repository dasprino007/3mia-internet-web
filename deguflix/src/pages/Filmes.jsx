import data from '../../artigo.json'

function Filmes() {
    return ( 
        <>
        <h1>Filmes</h1>
        <div className='flex flex-wrap'>
        {
            data.map(
                Filmes => (
                    <div>
                        <h1 key={Filmes.title}>{Filmes.title}</h1>
                        <img src={Filmes.image}/>
                    </div>
                )
            )
        }
        </div>
        </>
     );
}

export default Filmes;