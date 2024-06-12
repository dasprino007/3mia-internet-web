import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'

function Filmes() {
    const [filmes, setFilmes] = useState([])
    useEffect(()=> {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e")
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch(error => console.error(error))
    },[])

    function ClassRate(data){
        if(data > 7){
            return('bg-GoodRate-color')
        }
        else if(data > 4){
            return('bg-MediumRate-color')
        }
        else{
            return('bg-BadRate-color')
        }
    }

    return ( 
        <>  <h2 className="mb-5">Filmes populares</h2>
            <div className="listasFilmes flex overflow-x-auto gap-5">
                {
                    filmes.map(
                        filme => (
                            <>
                            <div className="card-filmes relative group aspect-poster mobile:h-60 sm:min-h-72 md:min-h-80" key={filme.id}>
                            <div className="invisible group-hover:visible absolute bottom-3 left-1 center">
                                <h1 className="text-wrap">{filme.title}</h1>
                                <h2 className="">Lançamento: {filme.release_date}</h2>
                            </div>
                            <div className={`size-8 flex items-center justify-center invisible group-hover:visible absolute top-1 right-1 hover:opacity-0 ${ClassRate(filme.vote_average)}`}>
                            <h2>{Math.round((filme.vote_average)*10)}</h2>
                            </div>
                            <Link to={`${filme.id}`}><img className="group-hover:opacity-30" src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} alt="" /><img/></Link>
                            </div>
                            </>
                        )
                    )
                }
            </div>
            <div className="listasFilmes flex flex-row flex-wrap">
                {
                    filmes.map(
                        filme => (
                            <>
                            <div className="card-filmes" key={filme.id}>
                                <img src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} alt="" />
                                <h1 className="text-wrap">{filme.title}</h1>
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