import { useHistory } from "react-router";

import { Container } from "./styles";

type Props = {
  name: string;
  url: string | null;
};

export function CardItem({ name, url }: Props) {
  const history = useHistory();

  function goDetails(name: string) {
    history.push(`/details?name=${name}`);
  }

  return (
    <Container onClick={() => goDetails(name)}>
      <img src={url || ""} alt={name} />
      <h1>{name}</h1>
    </Container>
  );
}
