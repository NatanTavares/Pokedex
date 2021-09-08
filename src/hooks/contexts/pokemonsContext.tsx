import { createContext, ReactNode, useEffect, useState } from "react";
import { useRouting } from "../useRouting";

import { api } from "../../services/api";

type RawPokemon = {
  id: number;
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  stats: [
    {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }
  ];
  types: [
    {
      slot: number;
      type: { name: string; url: string };
    }
  ];
};

type Pokemon = {
  id: number;
  name: string;
  imageUrl: string;
  stats: [
    {
      base_stat: number;
      effort: number;
      stat: { name: string; url: string };
    }
  ];
  types: [
    {
      slot: number;
      type: { name: string; url: string };
    }
  ];
};

type ResponseList = {
  count: number;
  results: [
    {
      name: string;
      url: string;
    }
  ];
};

type ContextType = {
  loading: boolean;
  pokemons: Pokemon[];
};

type ProviderProps = {
  children: ReactNode;
};

export const PokemonsContext = createContext({} as ContextType);

export function PokemonsProvider({ children }: ProviderProps) {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const { buildPagingUrl, currentPage, onSetTotalCountOfRegister } =
    useRouting();

  async function fetchPokemon({ results }: ResponseList) {
    try {
      results.forEach(async (currentPokemon) => {
        const { data } = await api.get<RawPokemon>(`${currentPokemon.name}`);
        const pokemon = {
          id: data.id,
          name: data.name,
          imageUrl: data.sprites.other.dream_world.front_default,
          stats: data.stats,
          types: data.types,
        };
        setPokemons((prev) => [...prev, pokemon]);
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function fetchPokemonsPage(page: number) {
    setLoading(true);

    try {
      const { data } = await api.get<ResponseList>(buildPagingUrl({ page }));
      onSetTotalCountOfRegister(data.count);
      await fetchPokemon(data);

      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPokemonsPage(currentPage);
    //eslint-disable-next-line
  }, []);

  return (
    <PokemonsContext.Provider value={{ loading, pokemons }}>
      {children}
    </PokemonsContext.Provider>
  );
}
