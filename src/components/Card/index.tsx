import React, { useState, useEffect, useContext } from 'react';
import api from '../../services/pokeapi';
import { PokemonContext } from '../../contexts/PokemonContext';

import { CardTemplate, LinkOnCard, ImagePokemon, TitleCard } from './styles';

interface IPokemonData {
  sprites: {
    front_default: string;
    
    other?: {
      dream_world: {
        front_default: string,
      }
    }
  },
}

interface ICardProps {
  name: string;
  url: string;
}

export default function Card({ name, url }: ICardProps ) {
  const [currentImage, setCurrentImage] = useState<string>('');
  const context = useContext(PokemonContext);

  useEffect(() => {     
    api.get<IPokemonData>(url).then(response => {

      // Image with higher quality but unfortunately not all pokemons have
      const image = response.data.sprites.other?.dream_world.front_default
      || response.data.sprites.front_default;
      
      setCurrentImage(image);
    });
  }, [url]);

  function getCurrentUrl() {
    context?.newUrl(url);
  }

  return (
    <>
      <CardTemplate key={name} onClick={getCurrentUrl}>
        <LinkOnCard>
          <ImagePokemon src={currentImage} alt={`${name}`} width={90} />
          <TitleCard>{name}</TitleCard>
        </LinkOnCard>
      </CardTemplate>
    </>
  );
}
