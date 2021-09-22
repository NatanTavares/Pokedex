import styled from "styled-components";
import { motion } from "framer-motion";

type ProgressProps = {
  percentage: number;
  bg: "HP" | "ATK" | "DEF" | "SPD" | "EXP";
};

const Container = styled.div`
  height: 1.375rem;

  border-radius: 5px;

  background: ${({ theme }) => theme.palette.contrast};
`;

const Progress = styled(motion.div)<ProgressProps>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: end;

  width: 0;
  height: 100%;

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
`;

const Span = styled.span`
  position: absolute;
  top: auto;
  right: 0.125rem;

  font-weight: bold;
  color: white;
`;

export { Container, Span, Progress };
