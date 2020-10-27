import React, { useState, useEffect } from 'react'
import api from '../../services/pokeapi';

import Card from '../Card';
import { stringify } from 'querystring';
import { parse } from 'path';

interface IPokemon {
  id: number,
  name: string,
  
  img_front: string,
  
  stats: [
    { 
      name: string,
      base_state: number,
    },
  ],
}

interface IRawDataFromApi {
  species: {
    name: string,
  },

  sprites: {
    other?: {
      dream_world: {
        front_default: string,
      }
    }

    front_default: string;
  },
}
interface IPokemonCard {
  name: string;
  url: string;
  pathImage: string;
}

export default function PokemonsList() {
  const [pokemons, setPokemons] = useState<IPokemonCard[]>([
    {
      name: '',
      url: '',
      pathImage: '',
    }
  ]);

  useEffect(() => {     
    let i = 1;
    api.get<IRawDataFromApi>(`pokemon/${i}`).then(response => {
      const data = { 
        name: response.data.species.name,
        url: i.toString(),

        pathImage: 
          response.data.sprites.other?.dream_world.front_default 
          || response.data.sprites.front_default,
      }

      console.log('> Data:', data);
      setPokemons([...pokemons, data]);
    });
  }, []);

  return (
    <div>
      <h1>PokemonsList</h1>
      <ul>
        { pokemons.map(pokemon => <Card key={pokemon.name} {...pokemon} /> )}
      </ul>
    </div>
  )
}
