import React, { useState, useEffect } from 'react'
import Axios, { Canceler } from 'axios';
import api from '../../services/pokeapi';

import Card from '../Card';

import { CardsArea } from './styles';

interface IPokemon {
  name: string,
  url: string,
}

interface IResourcePokemon {
  results: IPokemon[],

  next: string,
}

interface ICardProps {
  name: string;
  url: string;
}

export default function PokemonsList() {
  const [pokemons, setPokemons] = useState<ICardProps[]>([]);
  const [currentUrl, setCurrentUrl] = useState('pokemon/');
  const [nextUrl, setNextUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel: Canceler;

    api.get<IResourcePokemon>(currentUrl, {
      cancelToken: new Axios.CancelToken(c => cancel = c)
    }).then(response => {
      setLoading(false);
      setNextUrl(response.data.next);
      
      const newPokemons = response.data.results.map(pokemon => pokemon);
      
      setPokemons([...pokemons, ...newPokemons]);
      console.log('> Pokemons:', pokemons);
    });

    return () => cancel();
  }, [currentUrl]);

  function fetchMorePokemons() {
    setCurrentUrl(nextUrl);
  }

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <CardsArea>
        {pokemons.map(pokemon => <Card key={pokemon.name} {...pokemon} /> )}
        <button onClick={fetchMorePokemons}>Next</button>
      </CardsArea>
    </div>
  );
}
