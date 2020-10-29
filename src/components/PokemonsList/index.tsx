import React, { useState, useEffect } from 'react'
import Axios, { Canceler } from 'axios';
import api from '../../services/pokeapi';

import Card from '../Card';
import SpinnerLoader from '../SpinnerLoader';

import { CardsArea, CardsAreaBackground } from './styles';

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
    fetchPokemons();
  }, [currentUrl]);

  function fetchPokemons() {
    setLoading(true);
    let cancel: Canceler;

    api.get<IResourcePokemon>(currentUrl, {
      cancelToken: new Axios.CancelToken(c => cancel = c)
    }).then(response => {
      setNextUrl(response.data.next);
      const newPokemons = response.data.results.map(pokemon => pokemon);
      
      setPokemons([...pokemons, ...newPokemons]);
      setLoading(false);
    });

    return () => cancel();
  }

  function handleScroll() {   
    if (!nextUrl || loading || window.innerHeight + document.documentElement.scrollTop < 
      document.documentElement.offsetHeight) {
      return;
    }
    loadMorePokemons();
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  function loadMorePokemons() {
    setCurrentUrl(nextUrl);
  }

  if (loading) return <SpinnerLoader />;

  return (
    <>
      <CardsArea>
        <CardsAreaBackground>
          {pokemons.map(pokemon => <Card key={pokemon.name} {...pokemon} /> )}
        </CardsAreaBackground>
      </CardsArea>
    </>
  );
}
