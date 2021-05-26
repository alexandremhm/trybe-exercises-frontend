import './App.css';
import pokemons from './data.js'
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <Pokedex pokemonList={pokemons}/>
    </div>
  );
}

export default App;
