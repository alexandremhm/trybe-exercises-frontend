import React from 'react'
import Pokemon from './Pokemon.js'

class Pokedex extends React.Component {
  render() {
    const { pokemonList } = this.props;
    return (
      <div>
        { pokemonList.map((pokemon, index) => <Pokemon pokemon={pokemon} key={index} />)}
      </div>
    )
  }
}

export default Pokedex