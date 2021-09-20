import { Container, Types } from "./styles";

type Props = {
  url: string | null;
  name?: string;
  types?: string[];
};

export function Card({ url, name, types }: Props) {
  return (
    <Container>
      <img src={url || ""} alt={name} />
      <div>
        <h1>{name}</h1>

        <Types>
          {types?.map((type) => (
            <span key={type}>{type}</span>
          ))}
        </Types>
      </div>
    </Container>
  );
}
