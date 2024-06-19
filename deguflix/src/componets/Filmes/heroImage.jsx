import { useEffect } from "react";
import { useState } from "react";

function Heroimage() {

    const [filmes, setFilmes] = useState([])

    useEffect(()=> {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e")
        .then(response => response.json())
        .then(response => setFilmes(response.results[Math.floor(Math.random() * response.results.length)]))
        .catch(error => console.error(error))
    },[])

    return ( 
        <section className="HeroImage relative flex flex-row items-center justify-between mb-10">
                <img className="aspect-16/9 w-[100wv]" src={`https://image.tmdb.org/t/p/original/${filmes.backdrop_path}`} alt="" />
                <div className="HeroTexT max-w-full flex flex-col p-6 justify-center absolute h-full bg-gradient-to-r via-100% from-primary-color">
                    <h2>{filmes.title}</h2>
                    <p className="md:w-[32rem] sm:w-72 mobile:w-72 sm:text-sm mobile:text-xs text-wrap">{filmes.overview}</p>
                </div>
        </section>
     );
}

export default Heroimage;