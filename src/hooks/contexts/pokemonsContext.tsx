import { createContext, ReactNode, useState } from "react";
import { useRouting } from "../useRouting";
import { api } from "../../services/api";

import Ball from "../../assets/ball-icon.jpeg";

type ContextType = {
  loading: boolean;
  listOfPokemons: listOfPokemons;
  pokemon: Pokemon;
  fetchPokemon: (name: string) => Promise<void>;
  fetchPokemonsPage: (currentPage: number) => Promise<void>;
};

type ProviderProps = {
  children: ReactNode;
};

type Stat = {
  base_stat: number;
  name: "HP" | "ATK" | "DEF" | "SPD" | "EXP";
};

type Pokemon = {
  base_experience: number;
  id: number;
  name: string;
  sprite: string;
  stats: Stat[];
  types: string[];
};

type rawPokemonResponse = {
  base_experience: number;
  id: number;
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string | null;
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
      type: {
        name: string;
        url: string;
      };
    }
  ];
};

type listOfPokemons = {
  id: number;
  name: string;
  sprite: string | null;
}[];

type Results = {
  name: string;
  url: string;
}[];

type ResponseListOfPokemons = {
  count: number;
  results: Results;
};

export const PokemonsContext = createContext({} as ContextType);

export function PokemonsProvider({ children }: ProviderProps) {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({} as Pokemon);
  const [listOfPokemons, setListOfPokemons] = useState<listOfPokemons>([]);

  const { buildPagingUrl, onSetTotalCountOfRegister } = useRouting();

  async function fetchPokemon(name: string) {
    setLoading(true);
    try {
      const { data } = await api.get<rawPokemonResponse>(name);
      const types = data.types.reduce<string[]>(
        (prev, { type }) => [...prev, type.name],
        []
      );

      const stats = data.stats.reduce<Stat[]>((prev, { base_stat, stat }) => {
        switch (stat.name) {
          case "hp":
            return [...prev, { name: "HP", base_stat }];
          case "attack":
            return [...prev, { name: "ATK", base_stat }];
          case "defense":
            return [...prev, { name: "DEF", base_stat }];
          case "speed":
            return [...prev, { name: "SPD", base_stat }];
          default:
            return prev;
        }
      }, []);

      const formattedData = {
        base_experience: data.base_experience,
        id: data.id,
        name: data.name,
        sprite: data.sprites.other.dream_world.front_default || Ball,
        stats: stats.concat({ name: "EXP", base_stat: data.base_experience }),
        types,
      };

      setPokemon(formattedData);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  async function createListOfPokemons(results: Results) {
    try {
      setListOfPokemons([]);
      results.forEach(async ({ name }) => {
        const { data } = await api.get<rawPokemonResponse>(name);
        const formattedData = {
          id: data.id,
          name: data.name,
          sprite: data.sprites.other.dream_world.front_default || Ball,
        };
        setListOfPokemons((prev) => [...prev, formattedData]);
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function fetchPokemonsPage(page: number) {
    setLoading(true);
    try {
      const { data } = await api.get<ResponseListOfPokemons>(
        buildPagingUrl({ page })
      );
      onSetTotalCountOfRegister(data.count);

      await createListOfPokemons(data.results);

      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  return (
    <PokemonsContext.Provider
      value={{
        loading,
        listOfPokemons,
        pokemon,
        fetchPokemon,
        fetchPokemonsPage,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
}
