import { useContext } from "react";
import { RoutingContext } from "./contexts/routingContext";

export function useRouting() {
  const context = useContext(RoutingContext);
  return context;
}
