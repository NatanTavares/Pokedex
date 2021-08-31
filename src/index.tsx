import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { UseThemeProvider } from "./hooks/useTheme";

ReactDOM.render(
  <React.StrictMode>
    <UseThemeProvider>
      <App />
    </UseThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
