import { Switch, Route } from "react-router-dom";
import { Details } from "./pages/details";
import { Home } from "./pages/home";

export default function App() {
  return (
    <Switch>
      <Route path="/details">
        <Details />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
