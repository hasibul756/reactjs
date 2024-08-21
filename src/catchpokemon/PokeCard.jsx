
import { useState, useEffect } from "react";

const PokeCard = () => {

    const [apiData, setApiData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const url = 'https://pokeapi.co/api/v2/pokemon';

    const fetchData = () => {
        fetch(url)
        .then((res)=>res.json())
        // .then((data)=>console.log(data))
        .then((data)=> {
            setApiData(data)
            setLoading(false)
        })
        .catch((error)=> setError(error.message))
    }

    useEffect(() => {
        fetchData();
    }, [])
    
    if(error) {
        return <div className="">{error}</div>
    }

    if(loading) {
        return <div className="">loading...</div>
    }

  return (
    <div className="pokecard">
        {apiData.results.map((currData)=> {
            return <li key={currData.id}>{currData.name}</li>
        })}
    </div>
  )
}

export default PokeCard