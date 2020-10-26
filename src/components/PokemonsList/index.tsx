import React, { useState, useContext } from 'react'
import Card from '../Card';
import { PokemonContext } from '../../contexts/PokemonContext';

export default function PokemonsList() {
  const context = useContext(PokemonContext);
  console.log(context);

  return (
    <div>
      <h1>PokemonsList</h1>
      {/* {pokemons.map(pokemon => (
        <Card pokemon={pokemon} />
      ))} */}
    </div>
  )
}
