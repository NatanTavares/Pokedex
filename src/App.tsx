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
      <div className="App">
        <GlobalStyle />
        <Header />
        <PokemonsList />
        
        <PokemonProvider>
          <PokemonStats />
        </PokemonProvider>
      </div>
    </AppThemeProvider>
  );
}

export default App;
