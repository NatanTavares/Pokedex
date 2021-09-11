import styled from "styled-components";

type Props = {
  percentage: number;
  bg: "HP" | "ATK" | "DEF" | "SPD" | "EXP";
};

const Container = styled.div`
  height: 1.375rem;

  border-radius: 5px;
  overflow: hidden;

  background: ${({ theme }) => theme.palette.contrast};
`;

const Progress = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: end;

  width: ${({ percentage }) => percentage}%;
  height: 100%;
  padding: 0 0.25rem;

  border-radius: 5px;
  background-color: ${({ bg, theme }) => {
    switch (bg) {
      case "ATK":
        return theme.palette.typesStats.atk;
      case "DEF":
        return theme.palette.typesStats.def;
      case "EXP":
        return theme.palette.typesStats.exp;
      case "HP":
        return theme.palette.typesStats.hp;
      case "SPD":
        return theme.palette.typesStats.spd;
    }
  }};

  span {
    color: white;
    font-weight: bold;
  }
`;

export { Container, Progress };
