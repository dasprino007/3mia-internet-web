import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Heroimage() {

    const [filmes, setFilmes] = useState([])

    useEffect(()=> {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e")
        .then(response => response.json())
        .then(response => setFilmes(response.results[Math.floor(Math.random() * response.results.length)]))
        .catch(error => console.error(error))
    },[])

    return ( 
        <section className="HeroImage relative flex flex-row items-center justify-between">
                <img className="aspect-16/9 w-[100wv]" src={`https://image.tmdb.org/t/p/original/${filmes.backdrop_path}`} alt="" />
                <div className="HeroTexT min-w-full flex flex-col p-6 justify-center absolute h-full bg-gradient-to-r via-100% from-primary-color">
                    <h2 className="text-3xl font-bold mb-3">{filmes.title}</h2>
                    <p className="md:w-[40rem] sm:w-72 mobile:w-72 sm:text-sm mobile:text-xs text-wrap mb-3">{filmes.overview}</p>
                    <Link to={`${filmes.id}`}><button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-third-color rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4">Assistir agora</button></Link>
                </div>
        </section>
     );
}

export default Heroimage;