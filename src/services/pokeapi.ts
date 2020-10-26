import { useContext } from 'react';
import axios from 'axios';

import { PokemonContext } from '../contexts/PokemonContext';

export function fetchPokemons() {
  const context = useContext(PokemonContext);

  axios.get("https://pokeapi.co/api/v2/pokemon").then(res => {
    
    context?.
  });
}
