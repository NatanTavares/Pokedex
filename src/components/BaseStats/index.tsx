import { ProgressBar } from "../ProgressBar";

import { Container, Label } from "./styles";

type Props = {
  stats: {
    base_stat: number;
    name: "HP" | "ATK" | "DEF" | "SPD" | "EXP";
  }[];
};

export function BaseStats({ stats }: Props) {
  return (
    <Container>
      <caption>
        <h1>Base Stats</h1>
      </caption>

      <tbody>
        {stats?.map(({ base_stat, name }) => (
          <tr key={name}>
            <Label>{name}</Label>
            <td>
              <ProgressBar slot={base_stat} type={name} />
            </td>
          </tr>
        ))}
      </tbody>
    </Container>
  );
}
