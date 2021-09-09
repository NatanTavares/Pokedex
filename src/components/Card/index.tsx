import { Container, Types } from "./styles";

export function Card() {
  return (
    <Container>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
        alt="Charizard"
      />
      <div>
        <h1>Charizard</h1>
        <Types>
          <span>Flying</span>
          <span>Fire</span>
        </Types>
      </div>
    </Container>
  );
}
