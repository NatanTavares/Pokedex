import React, { useState, useEffect } from 'react';
import api from '../../services/pokeapi';

import { CardTemplate, LinkOnCard, ImagePokemon, TitleCard } from './styles';

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
  const [currentUrl, setCurrentUrl] = useState('');
  const [currentImage, setCurrentImage] = useState<string>('');

  useEffect(() => {     
    api.get<IPokemonData>(url).then(response => {
      
      // Image with higher quality but unfortunately not all pokemons have
      const image = response.data.sprites.other?.dream_world.front_default
      || response.data.sprites.front_default;
      
      setCurrentImage(image);
    });
  }, []);

  return (
    <CardTemplate key={name}>
      <LinkOnCard href="">
        <ImagePokemon src={currentImage} alt={`${name}`} width={90} />
        <TitleCard>{name}</TitleCard>
      </LinkOnCard>
    </CardTemplate>
  );
}
