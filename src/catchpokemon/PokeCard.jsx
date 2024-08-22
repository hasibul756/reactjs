const PokeCard = ({ pokemonData }) => {
  return (
    <li className="pokemon-card">
      <figure>
        <img
          className="pokemon-image"
          src={pokemonData.sprites.other.dream_world.front_default} // Display the Pokémon's sprite image
          alt={pokemonData.name} // Use the Pokémon's name as the alt text
        />
      </figure>
      <h1 className="pokemon-name">{pokemonData.name}</h1> {/* Display the Pokémon's name */}
      
      <div className="pokemon-info pokemon-highlight">
        <p>{pokemonData.types.map((currType) => currType.type.name).join(', ')}</p> {/* Display the Pokémon's types */}
      </div>

      <div className="grid-three-cols">
        <p className="pokemon-info">
          <span>Height:</span> {pokemonData.height} {/* Display the Pokémon's height */}
        </p>
        <p className="pokemon-info">
          <span>Weight:</span> {pokemonData.weight} {/* Display the Pokémon's weight */}
        </p>
        <p className="pokemon-info">
          <span>Speed:</span> {pokemonData.stats.find(stat => stat.stat.name === "speed").base_stat} {/* Display the Pokémon's speed */}
        </p>
      </div>

      <div className="grid-three-cols">
        <p className="pokemon-info">
          <span>Experience:</span> {pokemonData.base_experience} {/* Display the Pokémon's base experience */}
        </p>
        <p className="pokemon-info">
          <span>Attack:</span> {pokemonData.stats.find(stat => stat.stat.name === "attack").base_stat} {/* Display the Pokémon's attack stat */}
        </p>
        <p className="pokemon-info">
          <span>Abilities:</span> {pokemonData.abilities[0].ability.name} {/* Display the Pokémon's abilities */}
        </p>
      </div>
    </li>
  )
}

export default PokeCard;
