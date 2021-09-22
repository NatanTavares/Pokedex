import { Container, Span, Types } from "./styles";

type Props = {
  url: string;
  name: string;
  types: string[];
};

export function Card({ url, name, types }: Props) {
  return (
    <Container type={!!types ? types[0] : ""}>
      <img src={url} alt={name} />
      <div>
        <h1>{name}</h1>

        <Types>
          {types?.map((type) => (
            <Span type={type} key={type}>
              {type}
            </Span>
          ))}
        </Types>
      </div>
    </Container>
  );
}
