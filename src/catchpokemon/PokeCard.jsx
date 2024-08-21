
const PokeCard = ({pokemonData}) => {
  return (
    <li className="pokemon-card">
        <figure>
            <img className="pokemon-image" src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name} />
        </figure>
        <h1 className="pokemon-name">{pokemonData.name}</h1>
    </li>
  )
}

export default PokeCard