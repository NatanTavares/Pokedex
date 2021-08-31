import { DefaultTheme } from "styled-components";
import { defaultTheme } from "./theme";

export const light: DefaultTheme = {
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    bg: "#f6f6f7",
    contrast: "#222222",
  },
};
