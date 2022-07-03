import '../src/styles/App.css';
import { useState, useCallback } from 'react'
import axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState('pikachu');
  const [pokemonData, setPokemonData] = useState([]);

  const getPokemon = useCallback( async (pokemon) => {
    const pokemonArr = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const response = await axios.get(url)
      pokemonArr.push(response.data)
      setPokemonData(pokemonArr)
    } catch (e) {
      console.log(e)
    }
  }, [])

  function handleChange(e) {
    setPokemon(e.target.value.toLowerCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getPokemon(pokemon)
  }

  return (
    <div className="App">
      <h1>pokedex</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input type='text' onChange={handleChange} placeholder='enter pokemon' />
        </label>
      </form>
      {pokemonData.map((data, key) => {
        return (
          <div key={key}>
            <h1>name: {data.name}</h1>
            <img src={data.sprites.front_default} alt='pokemon sprite'/>
            <h1>abilities: {data.abilities[0].ability.name}</h1>
            <h1>type: {data.types[0].type.name}</h1>
            <h1>height: {data.height}</h1>
            <h1>weight: {data.weight}</h1>
          </div>
        )
      })}
    </div>
  );
}

export default App;
