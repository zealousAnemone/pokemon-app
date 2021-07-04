import { useEffect, useState } from 'react';
import './styles.css';

const Card = (props) => {
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
  })
}, [])


  return (
    <div className="card">
      {pokemon.sprites && <div><h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} /></div>}
      <ul>
      </ul>
    </div>
  );
};

export default Card;
