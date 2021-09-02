import { DefaultTheme } from "styled-components";
import { defaultTheme } from "./theme";

export const dark: DefaultTheme = {
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    bg: "#2B2A2C",
    contrast: "#f6f6f7",
  },
};
