import { Container, Progress, Span } from "./styles";

type Props = {
  slot: number;
  type: "HP" | "ATK" | "DEF" | "SPD" | "EXP";
};

export function ProgressBar({ slot, type }: Props) {
  const progress = Math.round((slot / 300) * 100);

  return (
    <Container>
      <Progress
        bg={type}
        percentage={progress}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.6 }}
      >
        <Span>{slot}/300</Span>
      </Progress>
    </Container>
  );
}
