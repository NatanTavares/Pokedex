import React, { createContext } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import usePeristedState from '../utils/usePersistedState';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

type ContextValue = {
  theme: DefaultTheme;
  toggleTheme: Function;
}

const ThemeContext = createContext<ContextValue | undefined>(void 0);

const AppThemeProvider: React.FC = ({ children }) => {
  
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);

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

export { ThemeContext, AppThemeProvider };
