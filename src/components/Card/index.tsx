import { Container } from "./styles";

type Props = {
  name: string;
  url: string;
};

export function Card({ name, url }: Props) {
  return (
    <Container>
      <img src={url} alt={name} />
      <h1>{name}</h1>
    </Container>
  );
}
