import { useState, useEffect } from 'react';
import './pokemon.css'; // Styles for the component
import PokeCard from './PokeCard'; // Component to display individual Pokémon cards

const Pokemon = () => {
  // State variables to manage data, error, loading state, and search input
  const [getData, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=60'; // API endpoint to fetch Pokémon data

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const res = await fetch(url); // Fetch the list of Pokémon
      const data = await res.json();

      // Fetch detailed data for each Pokémon
      const detailedPokeData = await Promise.all(
        data.results.map(async (currData) => {
          const res = await fetch(currData.url); // Fetch data for each Pokémon
          return res.json(); // Return the JSON response directly
        })
      );
      
      console.log(detailedPokeData);
      setData(detailedPokeData); // Store the detailed data in state
      
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.log(error);
      setLoading(false); // Set loading to false if an error occurs
      setError(error); // Store the error in state
    }
  };

  // useEffect to trigger data fetching when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Handle search input change
  const handleSearch = (event) => {
    setSearch(event.target.value); // Update the search state with the input value
  };

  // Filter Pokémon based on search input
  const searchData = getData.filter((currPokemon) =>
    currPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  // Show loading message if data is being fetched
  if (loading) {
    return <div className="loading">Loading....</div>;
  }

  // Show error message if an error occurs during data fetching
  if (error) {
    return <div className="error">{error.message}</div>;
  }

  return (
    <>
      <section className="container">
        <header>
          <h1>Lets Catch Pokémon</h1>
        </header>
        <div className="pokemon-search">
          <input
            type="text"
            placeholder="Search Pokemon"
            value={search}
            onChange={handleSearch} // Call handleSearch when input changes
          />
        </div>
        <div>
          <ul className="cards">
            {/* Map through filtered Pokémon data and display each using the PokeCard component */}
            {searchData.map((curPokemon) => (
              <PokeCard key={curPokemon.id} pokemonData={curPokemon} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Pokemon;
