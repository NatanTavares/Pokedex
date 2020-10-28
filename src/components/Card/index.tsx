import React, { useState, useEffect } from 'react';
import api from '../../services/pokeapi';

import { CardTemplate, LinkOnCard, ImagePokemon, TitleCard } from './styles';

import PokemonStats from '../PokemonStats';

interface IPokemonData {
  sprites: {
    other?: {
      dream_world: {
        front_default: string,
      }
    }

    front_default: string;
  },
}

interface ICardProps {
  name: string;
  url: string;
}

export default function Card({ name, url }: ICardProps ) {
  const [currentImage, setCurrentImage] = useState<string>('');
  const [showStatsCurrentPokemon, setShowStatsCurrentPokemon] = useState(false);

  useEffect(() => {     
    api.get<IPokemonData>(url).then(response => {
      
      // Image with higher quality but unfortunately not all pokemons have
      const image = response.data.sprites.other?.dream_world.front_default
      || response.data.sprites.front_default;
      
      setCurrentImage(image);
    });
  }, []);

  function toggleShowStats() {
    setShowStatsCurrentPokemon(!showStatsCurrentPokemon);
  }

  return (
    <>
      <CardTemplate key={name} onClick={toggleShowStats}>
        <LinkOnCard>
          <ImagePokemon src={currentImage} alt={`${name}`} width={90} />
          <TitleCard>{name}</TitleCard>
        </LinkOnCard>
      </CardTemplate>

      {showStatsCurrentPokemon && <PokemonStats />}
    </>
  );
}
