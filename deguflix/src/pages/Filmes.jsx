import { useState } from "react";


function Filmes() {
    const [filmes, setFilmes] = useState([])
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e")
    .then(response => response.json())
    .then(response => setFilmes(response.results))
    .catch(error => console.error(error))

    return ( 
        <>      
            <div className="listasFilmes flex flex-row flex-wrap">
                {
                    filmes.map(
                        filme => (
                            <>
                            <div className="card-filmes relative group h-sm w-fit" key={filme.id}>
                            <div className="invisible group-hover:visible absolute bottom-3 center">
                                <h1 className="text-4xl text-wrap">{filme.title}</h1>
                                <h2 className="text-2xl">Lançamento: {filme.date}</h2>
                            </div>
                            <h2 className="invisible group-hover:visible absolute top-1 right-1">{Math.round((filme.vote_average)*10)}</h2>
                            <img className="group-hover:transition-opacity group-hover:opacity-30" src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} alt="" />
                            </div>
                            </>
                        )
                    )
                }
            </div>
        </>
     );
}

export default Filmes;