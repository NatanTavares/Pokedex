import React, { createContext, useState } from 'react';

type ContextValue = {
  url: string;
  newUrl: Function;
}

const PokemonContext = createContext<ContextValue | undefined>(void 0);

const PokemonProvider: React.FC = ({ children }) => {
  const [url, setUrl] = useState<string>('');

  const newUrl = (url: string) => {
    setUrl(url);
  }

  return (
    <PokemonContext.Provider value={{ url, newUrl }}>
      {children}
    </PokemonContext.Provider>
  );
}

export { PokemonContext, PokemonProvider };
