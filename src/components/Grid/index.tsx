import { usePokemon } from "../../hooks/usePokemon";
import { CardItem } from "../CardItem";

import { Container } from "./styles";

export function Grid() {
  const { listOfPokemons } = usePokemon();

  return (
    <Container>
      {listOfPokemons.map(({ id, name, sprite }) => (
        <CardItem key={id} name={name} url={sprite} />
      ))}
    </Container>
  );
}
