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
    };
  }
}
