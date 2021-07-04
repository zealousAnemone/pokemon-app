import { useEffect, useState } from 'react';
import Card from './Card';

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    fetch(' https://pokeapi.co/api/v2/pokemon?limit=50')
      .then((response) => response.json())
      .then((data) => {
        data.results.forEach((element) => {
          setPokemon((pokemon) => [
            ...pokemon,
            <Card key={element.name} name={element.name} />,
          ]);
        });
      });
  }, []);
  return (
    <div className="App">
      <h1>pokemon</h1>
      {pokemon}
    </div>
  );
};

export default App;
