import { useState } from "react";

function UseEfeectSy(data) {
    const [filme, setFilme] = useState([])
    useEffect(()=> {
        fetch(data)
        .then(response => response.json())
        .then(response => setFilme(response))
        .catch(error => console.error(error))
    },[])
    return ( 
        filme
    );
}

export default UseEfeectSy;