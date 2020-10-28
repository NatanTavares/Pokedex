import React from 'react';
import { AppThemeProvider } from './contexts/ThemeContext';
import { PokemonProvider } from './contexts/PokemonContext';

import Header from './components/Header';
import PokemonsList from './components/PokemonsList';
import PokemonStats from './components/PokemonStats';

import GlobalStyle from './styles/global';

function App() {
  return (
    <AppThemeProvider>
      <PokemonProvider>
        <div className="App">
          <GlobalStyle />
          <Header />
          <PokemonsList />
          
          <PokemonStats />
        </div>
      </PokemonProvider>
    </AppThemeProvider>
  );
}

export default App;
