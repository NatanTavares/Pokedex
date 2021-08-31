import { createContext, ReactNode, useContext, useState } from "react";
import { GlobalStyle } from "../styles/global";
import { ThemeProvider } from "styled-components";

import { light } from "../styles/themes/light";
import { dark } from "../styles/themes/dark";

type ContextType = {
  onChangeTheme: () => void;
};

type ProviderProps = {
  children: ReactNode;
};

const ThemeContext = createContext({} as ContextType);

export function UseThemeProvider({ children }: ProviderProps) {
  const [theme, setTheme] = useState(light);

  function onChangeTheme() {
    setTheme(theme === light ? dark : light);
  }

  return (
    <ThemeContext.Provider value={{ onChangeTheme }}>
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
