import { usePokemon } from "../../hooks/usePokemon";
import { Card } from "../Card";

import { Container } from "./styles";

export function Grid() {
  const { pokemons } = usePokemon();

  return (
    <Container>
      {pokemons.map((pokemon) => (
        <Card key={pokemon.id} name={pokemon.name} url={pokemon.imageUrl} />
      ))}
    </Container>
  );
}
