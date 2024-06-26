import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import Heroimage from "../componets/Filmes/heroImage";
import ClassRate from "../system/ClassRate"

function Filmes() {
    const [filmes, setFilmes] = useState([])
    useEffect(()=> {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e")
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch(error => console.error(error))
    },[])

    return ( 
        <>  
            <Heroimage/>
            <h2 className="px-2 mb-5 font-bold">Filmes populares</h2>
            <div className="listasFilmes flex overflow-x-auto gap-5">
                {
                    filmes.map(
                        filme => (
                            <>
                            <div className="card-filmes relative group group-hover:transition-opacity aspect-poster mobile:h-60 sm:min-h-72 md:min-h-80 my-5" key={filme.id}>
                            <Link to={`${filme.id}`}><img className="group-hover:opacity-30" src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} alt="" /><img/></Link>
                            <div className="invisible group-hover:visible absolute bottom-3 left-1 center">
                                <h1 className="text-wrap font-semibold">{filme.title}</h1>
                                <h2 className="text-wrap">Lançamento: {filme.release_date}</h2>
                            </div>
                            <div className={`size-8 ${ClassRate(filme.vote_average)} rounded-md border-2 border-white flex items-center justify-center invisible group-hover:visible absolute top-1 right-1`}>
                            <h2 className="font-bold">{Math.round((filme.vote_average)*10)}</h2>
                            </div>
                            </div>
                            </>
                        )
                    )
                }
                
            </div>
            <h2 className="px-2 mb-5 font-bold">Filmes populares</h2>
            <div className="listasFilmes flex overflow-x-auto gap-5">
                {
                    filmes.map(
                        filme => (
                            <>
                            <div className="card-filmes relative group group-hover:transition-opacity aspect-poster mobile:h-60 sm:min-h-72 md:min-h-80" key={filme.id}>
                            <Link to={`${filme.id}`}><img className="group-hover:opacity-30" src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} alt="" /><img/></Link>
                            <div className="invisible group-hover:visible absolute bottom-3 left-1 center">
                                <h1 className="text-wrap font-semibold">{filme.title}</h1>
                                <h2 className="text-wrap">Lançamento: {filme.release_date}</h2>
                            </div>
                            <div className={`size-8 ${ClassRate(filme.vote_average)} rounded-md border-2 border-white flex items-center justify-center invisible group-hover:visible absolute top-1 right-1`}>
                            <h2 className="font-bold">{Math.round((filme.vote_average)*10)}</h2>
                            </div>
                            </div>
                            </>
                        )
                    )
                }
                
            </div>
            <h2 className="px-2 mb-5 font-bold">Filmes populares</h2>
            <div className="listasFilmes flex overflow-x-auto gap-5">
                {
                    filmes.map(
                        filme => (
                            <>
                            <div className="card-filmes relative group group-hover:transition-opacity aspect-poster mobile:h-60 sm:min-h-72 md:min-h-80" key={filme.id}>
                            <Link to={`${filme.id}`}><img className="group-hover:opacity-30" src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} alt="" /><img/></Link>
                            <div className="invisible group-hover:visible absolute bottom-3 left-1 center">
                                <h1 className="text-wrap font-semibold">{filme.title}</h1>
                                <h2 className="text-wrap">Lançamento: {filme.release_date}</h2>
                            </div>
                            <div className={`size-8 ${ClassRate(filme.vote_average)} rounded-md border-2 border-white flex items-center justify-center invisible group-hover:visible absolute top-1 right-1`}>
                            <h2 className="font-bold">{Math.round((filme.vote_average)*10)}</h2>
                            </div>
                            </div>
                            </>
                        )
                    )
                }
                
            </div>
            <h2 className="px-2 mb-5 font-bold">Filmes em Lançamento</h2>
            <div className="listasFilmes flex overflow-x-auto gap-5">
                {
                    filmes.map(
                        filme => (
                            <>
                            <div className="card-filmes relative group group-hover:transition-opacity aspect-poster mobile:h-60 sm:min-h-72 md:min-h-80" key={filme.id}>
                            <Link to={`${filme.id}`}><img className="group-hover:opacity-30" src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} alt="" /><img/></Link>
                            <div className="invisible group-hover:visible absolute bottom-3 left-1 center">
                                <h1 className="text-wrap font-semibold">{filme.title}</h1>
                                <h2 className="text-wrap">Lançamento: {filme.release_date}</h2>
                            </div>
                            <div className={`size-8 ${ClassRate(filme.vote_average)} rounded-md border-2 border-white flex items-center justify-center invisible group-hover:visible absolute top-1 right-1`}>
                            <h2 className="font-bold">{Math.round((filme.vote_average)*10)}</h2>
                            </div>
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