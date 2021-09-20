import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  borderRadius: "0.8rem",
  scales: {
    padding: {
      sm: ".25rem",
      lg: "0.8rem",
    },
  },
  palette: {
    bg: "transparent",
    contrast: "#222222",
    primary: {
      main: "#d53b47",
      contrast: "#F6F6F7",
    },
    disabled: {
      bg: "#6F6F6F",
      contrast: "#C4CDD5",
    },
    shadow: "rgba(0, 0, 0, 0.1)",
    typesStats: {
      atk: "#FBA924",
      def: "#0291EF",
      exp: "#398C3C",
      hp: "#D53B47",
      spd: "#91AFC6",
    },
  },
};
