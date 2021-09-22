import { usePokemon } from "../../hooks/usePokemon";
import { CardItem } from "../CardItem";

import { Container } from "./styles";

export function Grid() {
  const { listOfPokemons } = usePokemon();

  const variants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 1,
      },
    },
  };

  return (
    <Container variants={variants} initial="hidden" animate="visible">
      {listOfPokemons.map(({ id, name, sprite }) => (
        <CardItem key={id} name={name} url={sprite} />
      ))}
    </Container>
  );
}
