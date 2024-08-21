import { useState, useEffect} from 'react';
import './pokemon.css';
import PokeCard from './PokeCard';

const Pokemon = () => {

    const [getData,setData] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=60';

    const fetchData = async () => {
        try{
            const res = await fetch(url);
            const data = await res.json();
            const detailedPokeData = data.results.map( async (currData)=>{
                const res = await fetch(currData.url);
                const data = await res.json();
                return data;
            })
            // console.log(detailedPokeData); //Promises

            const detailedResponses = await Promise.all(detailedPokeData);
            console.log(detailedResponses);
            setData(detailedResponses);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError(error);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    if(loading) {
        return <div className="loading">Loading....</div>
    }

    if(error) {
        return <div className="error">{error.message}</div>
    }

  return (
    <>
        <section className="container">
            <header>
                <h1> Lets Catch Pokémon</h1>
            </header>
            <div className="pokemon-search">
            </div>
            <div>
                <ul className="cards">
                {getData.map((curPokemon) => {
                    return (
                    <PokeCard key={curPokemon.id} pokemonData={curPokemon} />
                    );
                })}
                </ul>
            </div>
        </section>
    </>
  )
}

export default Pokemon