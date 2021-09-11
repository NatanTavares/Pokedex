import { Container, Progress } from "./styles";

type Props = {
  slot: number;
  type?: "HP" | "ATK" | "DEF" | "SPD" | "EXP";
};

export function ProgressBar({ slot, type = "HP" }: Props) {
  const progress = (slot / 300) * 100;

  return (
    <Container>
      <Progress percentage={progress} bg={type}>
        <span>{slot}/300</span>
      </Progress>
    </Container>
  );
}
