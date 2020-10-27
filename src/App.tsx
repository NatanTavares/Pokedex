import React from 'react';
import { AppThemeProvider } from './contexts/ThemeContext';

import Header from './components/Header';
import PokemonsList from './components/PokemonsList';

import GlobalStyle from './styles/global';

function App() {
  return (
    <AppThemeProvider>
      <div className="App">
        <GlobalStyle />
        <Header />
        
        <PokemonsList />
      </div>
    </AppThemeProvider>
  );
}

export default App;
