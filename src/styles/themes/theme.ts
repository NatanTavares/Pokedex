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
    typeOfPokemon: {
      bug: "#479180",
      dark: "#595978",
      dragon: "#438792",
      electric: "#F0CF98",
      fairy: "#d35a83",
      fighting: "#F8A05E",
      fire: "#D7705F",
      flying: "#498899",
      ghost: "#5d4a7d",
      grass: "#67A88F",
      ground: "#936228",
      ice: "#a8def7",
      normal: "#b78996",
      poison: "#9EAFD0",
      psychic: "#ba6393",
      rock: "#7a594e",
      steel: "#60756e",
      water: "#50B0D8",
    },
  },
};
