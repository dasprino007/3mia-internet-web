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
        <section className="HeroImage flex flex-row items-center justify-between">
            <div className="flex flex-col">
                <h1>{filmes.title}</h1>
                <span>{filmes.release_date}</span>
                <p>{filmes.overview}</p>
            </div>
            <div className="HeroImageImg aspect-16/9">
                <img src={`https://image.tmdb.org/t/p/w500/${filmes.backdrop_path}`} alt="" />
            </div>
        </section>
     );
}

export default Heroimage;