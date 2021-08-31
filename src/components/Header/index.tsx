import { useTheme } from "../../hooks/useTheme";

import LogoSVG from "../../assets/logo.svg";
import { Container } from "./styles";

export function Header() {
  const { onChangeTheme } = useTheme();

  return (
    <Container>
      <img src={LogoSVG} alt="Pokedex" />
      <button onClick={onChangeTheme}>Change</button>
    </Container>
  );
}
