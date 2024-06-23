import ClassRate from "../system/ClassRate";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

function SobreFilmes() {
    const {id} = useParams() 
    const [filme, setFilme] = useState([])
    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e`)
        .then(response => response.json())
        .then(response => setFilme(response))
        .catch(error => console.error(error))
    },[])

    return ( 
        <>
<div className="relative">
    <img className="bg-black opacity-30" src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt="" />
        <section className="HeroImageSobreFilmes top-40 right-96 absolute flex flex-row p-10 justify-center items-center">
        <img className="aspect-poster h-[28rem]" src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}></img>
        <div className="flex flex-col w-[40rem] mx-5">
            <h2 className="text-3xl font-bold">{filme.title}</h2>
            <div className="flex flex-row items-center gap-2">
            <div className={`size-8 ${ClassRate(filme.vote_average)} rounded-md border-2 border-white flex items-center justify-center`}>
                <p className=" font-bold">{Math.round((filme.vote_average)*10)}</p>
            </div>
            <div className="size-3 bg-white rounded-full"></div>
            <p className=" font-light text-sm">Lançamento:{filme.release_date}</p>
            <div className="size-3 bg-white rounded-full"></div>
            <p className=" font-light text-sm">Tempo de filme: {filme.runtime} min</p>
            </div>
            <h3>sinopse:</h3>
            <p>{filme.overview}</p>
        </div>
    </section>
</div>
    </>
    );
}

export default SobreFilmes;