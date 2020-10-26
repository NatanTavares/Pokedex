import React, { createContext, ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import usePeristedState from '../utils/usePersistedState';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

type ContextValue = {
  theme: DefaultTheme;
  toggleTheme: Function;
}

type ThemeProviderProps = {
  children: ReactNode;
}

export const ThemeContext = createContext<ContextValue | undefined>(void 0);

export function AppThemeProvider(props: ThemeProviderProps) {
  const { children } = props;
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  }

  const value = {theme, toggleTheme};

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={value.theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
