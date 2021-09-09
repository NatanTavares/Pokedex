import { usePokemon } from "../../hooks/usePokemon";
import { CardItem } from "../CardItem";

import { Container } from "./styles";

export function Grid() {
  const { pokemons } = usePokemon();

  return (
    <Container>
      {pokemons.map((pokemon) => (
        <CardItem key={pokemon.id} name={pokemon.name} url={pokemon.imageUrl} />
      ))}
    </Container>
  );
}
