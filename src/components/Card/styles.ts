import styled from "styled-components";

type Props = {
  type: string;
};

const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  width: 25rem;
  height: 28.75rem;
  padding: 2rem;

  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 0 10px 4px ${({ theme }) => theme.palette.shadow};

  text-transform: capitalize;

  background: ${({ theme, type }) => {
    switch (type) {
      case "bug":
        return theme.palette.typeOfPokemon.bug;
      case "dark":
        return theme.palette.typeOfPokemon.dark;
      case "dragon":
        return theme.palette.typeOfPokemon.dragon;
      case "electric":
        return theme.palette.typeOfPokemon.electric;
      case "fairy":
        return theme.palette.typeOfPokemon.fairy;
      case "fighting":
        return theme.palette.typeOfPokemon.fighting;
      case "fire":
        return theme.palette.typeOfPokemon.fire;
      case "flying":
        return theme.palette.typeOfPokemon.flying;
      case "ghost":
        return theme.palette.typeOfPokemon.ghost;
      case "grass":
        return theme.palette.typeOfPokemon.grass;
      case "ground":
        return theme.palette.typeOfPokemon.ground;
      case "ice":
        return theme.palette.typeOfPokemon.ice;
      case "normal":
        return theme.palette.typeOfPokemon.normal;
      case "poison":
        return theme.palette.typeOfPokemon.poison;
      case "psychic":
        return theme.palette.typeOfPokemon.psychic;
      case "rock":
        return theme.palette.typeOfPokemon.rock;
      case "steel":
        return theme.palette.typeOfPokemon.steel;
      case "water":
        return theme.palette.typeOfPokemon.water;
      default:
        return theme.palette.primary;
    }
  }};

  img {
    max-width: 15.625rem;
    max-height: 12.5rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

    width: 100%;
    height: 12.5rem;

    h1 {
      font-size: 1.875rem;
      color: white;
    }
  }
`;

const Types = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  margin: auto;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 15.625rem;
    height: 2rem;

    border-radius: ${({ theme }) => theme.borderRadius};

    font-size: 1.25rem;
    background: white;
  }
`;

const Span = styled.span<Props>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 15.625rem;
  height: 2rem;

  font-size: 1.25rem;
  font-weight: bold;
  background: white;

  /* text-transform: capitalize; */

  border-radius: ${({ theme, type }) => theme.borderRadius};
  color: ${({ theme, type }) => {
    switch (type) {
      case "bug":
        return theme.palette.typeOfPokemon.bug;
      case "dark":
        return theme.palette.typeOfPokemon.dark;
      case "dragon":
        return theme.palette.typeOfPokemon.dragon;
      case "electric":
        return theme.palette.typeOfPokemon.electric;
      case "fairy":
        return theme.palette.typeOfPokemon.fairy;
      case "fighting":
        return theme.palette.typeOfPokemon.fighting;
      case "fire":
        return theme.palette.typeOfPokemon.fire;
      case "flying":
        return theme.palette.typeOfPokemon.flying;
      case "ghost":
        return theme.palette.typeOfPokemon.ghost;
      case "grass":
        return theme.palette.typeOfPokemon.grass;
      case "ground":
        return theme.palette.typeOfPokemon.ground;
      case "ice":
        return theme.palette.typeOfPokemon.ice;
      case "normal":
        return theme.palette.typeOfPokemon.normal;
      case "poison":
        return theme.palette.typeOfPokemon.poison;
      case "psychic":
        return theme.palette.typeOfPokemon.psychic;
      case "rock":
        return theme.palette.typeOfPokemon.rock;
      case "steel":
        return theme.palette.typeOfPokemon.steel;
      case "water":
        return theme.palette.typeOfPokemon.water;
      default:
        return theme.palette.primary;
    }
  }};
`;

export { Container, Types, Span };
