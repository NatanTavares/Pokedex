import React, { useContext } from 'react';
import { AppThemeProvider } from './contexts/ThemeContext';

import Header from './components/Header';
import GlobalStyle from './styles/global';

function App() {
  return (
    <AppThemeProvider>
      <div className="App">
        <GlobalStyle />
        <Header />
      </div>
    </AppThemeProvider>
  );
}

export default App;
