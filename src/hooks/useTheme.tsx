import { createContext, ReactNode, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "styled-components";
import useLocalStorage from "./useLocalStorage";

import { GlobalStyle } from "../styles/global";
import { light } from "../styles/themes/light";
import { dark } from "../styles/themes/dark";

type ContextType = {
  changeToDark: () => void;
  changeToLight: () => void;
  checked: boolean;
};

type ProviderProps = {
  children: ReactNode;
};

const ThemeContext = createContext({} as ContextType);

export function UseThemeProvider({ children }: ProviderProps) {
  const [theme, setTheme] = useLocalStorage<DefaultTheme>("@theme", dark);
  const [checked, setChecked] = useLocalStorage<boolean>(
    "@theme-checked",
    true
  );

  function changeToDark() {
    setChecked(true);
    setTheme(dark);
  }

  function changeToLight() {
    setChecked(false);
    setTheme(light);
  }

  return (
    <ThemeContext.Provider value={{ changeToDark, changeToLight, checked }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}
