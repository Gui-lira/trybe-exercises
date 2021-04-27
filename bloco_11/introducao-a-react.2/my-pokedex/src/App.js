import logo from './logo.svg';
import './App.css';
import PokedexCreator from './pokedexCreator';
import pokemons from './data';

function App() {
  return (
    <div className='Pokemoncontainer' >
    {pokemons.map((pokemon) => <PokedexCreator pokemon={pokemon}/>)}
    </div>
  );
}

export default App;
