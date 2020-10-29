import React, { useEffect, useState, useContext } from 'react'
import { ProgressBar, StatsScreen, CardPokemon, StatsArea, Stat, ImagePokemon, TypePokemon, IconZone } from './styles'
import { PokemonContext } from '../../contexts/PokemonContext';
import Axios from 'axios';

import { MdClose } from 'react-icons/md';

interface IStats {
  base_stat: number,
}

interface ITypes {
  type: {
    name: string,
  }
}

interface IResponse {
  species: {
    name: string,
  },

  sprites: {
    front_default: string,
    other?: {
      dream_world: {
        front_default: string,
      }
    }

  },

  stats: IStats[],

  types: ITypes[],
}

export default function PokemonStats() {
  const [showStats, setShowStats] = useState(false);

  const [name, setName] = useState<string>('');
  const [img, setImg] = useState<string>('');
  const [stats, setStats] = useState<IStats[]>([]);
  const [types, setTypes] = useState<ITypes[]>([]);

  const context = useContext(PokemonContext);

  useEffect(() => {
    if (context?.url) {
      Axios.get<IResponse>(context!.url).then(response => {
        setShowStats(true);
        // Image with higher quality but unfortunately not all pokemons have
        const currentImg = response.data.sprites.other?.dream_world.front_default
        || response.data.sprites.front_default; 
  
        setName(response.data.species.name);
        setImg(currentImg);
        setStats(response.data.stats);
        setTypes(response.data.types);
      });
    }
  }, [context?.url]);

  return (
    <div style={!showStats ? { display: 'none' } : {}}>
      <StatsScreen>
        <IconZone>
          <MdClose 
            size={30} 
            color='#FFF' 
            display='flex'
            onClick={event => setShowStats(false)}
          />
        </IconZone>
        <CardPokemon>
          <ImagePokemon 
            src={img}
            alt={name}
            width={90}
          />
          
          <h3>{name}</h3>
          {types.map((t, index) => <TypePokemon key={index}>{t.type.name}</TypePokemon>)}
          
        </CardPokemon>

        <StatsArea>
          <h3>Base Stats</h3>
          <ul>
            <Stat>
              <label>HP </label>
              <ProgressBar max="300" value={stats[0]?.base_stat || 0} />
            </Stat>
            <Stat>
              <label>ATK </label>
              <ProgressBar max="300" value={stats[1]?.base_stat || 0} />
            </Stat>
            <Stat>
              <label>DEF </label>
              <ProgressBar max="300" value={stats[2]?.base_stat || 0} />
            </Stat>
            <Stat>
              <label>SPD </label>
              <ProgressBar max="300" value={stats[3]?.base_stat || 0} />
            </Stat>
            <Stat>
              <label>EXP </label>
              <ProgressBar max="300" value={stats[4]?.base_stat || 0} />
            </Stat>
          </ul>
        </StatsArea>
      </StatsScreen>
    </div>
  );
}
