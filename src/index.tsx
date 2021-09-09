import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { PokemonsProvider } from "./hooks/contexts/pokemonsContext";
import { UseThemeProvider } from "./hooks/useTheme";
import { RoutingProvider } from "./hooks/contexts/routingContext";

ReactDOM.render(
  <React.StrictMode>
    <RoutingProvider>
      <UseThemeProvider>
        <PokemonsProvider>
          <App />
        </PokemonsProvider>
      </UseThemeProvider>
    </RoutingProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
