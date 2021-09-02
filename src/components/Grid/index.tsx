import { Card } from "../Card";
import { Container } from "./styles";

export function Grid() {
  return (
    <Container>
      <Card
        name="Bulbasaur"
        url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
      />
      <Card
        name="Ivysaur"
        url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
      />
      <Card
        name="Venusaur"
        url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
      />
      <Card
        name="Charmander"
        url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
      />
    </Container>
  );
}
