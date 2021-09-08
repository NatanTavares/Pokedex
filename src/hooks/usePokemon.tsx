import { useContext } from "react";
import { PokemonsContext } from "../context/pokemonsContext";

export function usePokemon() {
  const context = useContext(PokemonsContext);
  return context;
}
