import { useContext } from "react";
import { PokemonsContext } from "./contexts/pokemonsContext";

export function usePokemon() {
  const context = useContext(PokemonsContext);
  return context;
}
