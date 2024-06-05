import { useState } from "react";


function Filmes() {
    const [filmes, setFilmes] = useState([])

    fetch("https://api.themoviedb.org/3/tv/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e")
    .then(response => response.json())
    .then(response => setFilmes(response.results))
    .catch(error => console.error(error))

    return ( 
        <>
            <h1>Filmes</h1>        
            <div className="listasFilmes">
                {
                    filmes.map(
                        filme => (
                            <>
                            <div className="card-filme" key={filme.id}>
                                <h1>{filme.name}</h1>
                                <p>- {filme.overview}</p>
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