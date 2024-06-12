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
        <h1>teste</h1> 
        <p>{filme.title}</p>
    </>
    );
}

export default SobreFilmes;