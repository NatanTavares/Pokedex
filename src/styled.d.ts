import "styled-components";

type IPlatte = {
  main: string;
  contrast: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    scales: {
      padding: {
        sm: string;
        lg: string;
      };
    };
    palette: {
      bg: string;
      contrast: string;
      primary: IPlatte;
      disabled: {
        bg: string;
        contrast: string;
      };
      shadow: string;
      typesStats: {
        hp: string;
        atk: string;
        def: string;
        spd: string;
        exp: string;
      };
      typeOfPokemon: {
        bug: string;
        dark: string;
        dragon: string;
        electric: string;
        fairy: string;
        fighting: string;
        fire: string;
        flying: string;
        ghost: string;
        grass: string;
        ground: string;
        ice: string;
        normal: string;
        poison: string;
        psychic: string;
        rock: string;
        steel: string;
        water: string;
      };
    };
  }
}
