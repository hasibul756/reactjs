import { useState, useEffect } from 'react';

const PokemonCard = () => {
    // Initialize state to hold the data from the API, any potential errors, and loading status
    const [apiData, setApiData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const url = 'https://pokeapi.co/api/v2/pokemon/pikachu';

    const fetchData = () => {
        fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Could not connect to the API");
            }
            return res.json();
        })
        .then((data) => {
            setApiData(data); // Set the entire response data object to state
            setLoading(false); // Set loading to false when data is successfully fetched
        })
        .catch((error) => {
            setError(error.message);
            setLoading(false); // Set loading to false even when there is an error
        });
    }

    // useEffect to fetch data when the component mounts
    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    // Handle loading state
    if (loading) {
        return <div>Loading...</div>; // You can replace this with any spinner or loader component
    }

    // Handle error state
    if (error) {
        return <div>Error: {error}</div>;
    }

    // Render the Pokémon data
    return (
        <div>
            <h1>{apiData.name}</h1>
            <img src={apiData.sprites.front_default} alt={apiData.name} />
            <p>Height: {apiData.height}</p>
            <p>Weight: {apiData.weight}</p>
        </div>
    );
};

export default PokemonCard;
