import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { PokemonsProvider } from "./hooks/contexts/pokemonsContext";
import { RoutingProvider } from "./hooks/contexts/routingContext";
import { UseThemeProvider } from "./hooks/useTheme";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer />
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
