import { useHistory } from "react-router";

import { Container } from "./styles";

type Props = {
  name: string;
  url: string | null;
};

export function CardItem({ name, url }: Props) {
  const history = useHistory();

  const variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  function goDetails(name: string) {
    history.push(`/details?name=${name}`);
  }

  return (
    <Container
      onClick={() => goDetails(name)}
      variants={variants}
      initial="hidden"
    >
      <img src={url || ""} alt={name} />
      <h1>{name}</h1>
    </Container>
  );
}
