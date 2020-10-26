import React, { createContext, ReactNode, useState } from 'react';

type ContextValue = {
  pokemons: PokemonProps;
  capturePokemons: Function;
}

type PokemonProviderProps = {
  children: ReactNode;
}

interface PokemonProps {
  id: string;
  
  species: {
    name: string;
  },

  sprites: {
    front_default: string;
  },

  stats: [
    {
      base_state: number;
      stat: {
        name: string,
      },
    },
  ];
}

const PokemonContext = createContext<ContextValue | undefined>(void 0);

function PokemonProvider({ children }: PokemonProviderProps) {
  const [pokemons, setPokemons] = useState<PokemonProps>({} as PokemonProps);

  const capturePokemons = (data: PokemonProps) => {
    if (data) setPokemons(data);
  }

  const value = {pokemons, capturePokemons}

  return (
    <PokemonContext.Provider value={value}>
      {children}
    </PokemonContext.Provider>
  );
}

export { PokemonContext, PokemonProvider };
