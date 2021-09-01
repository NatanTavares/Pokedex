import Switch from "react-switch";
import { useTheme } from "../../hooks/useTheme";

import LogoSVG from "../../assets/logo.svg";
import { Container } from "./styles";

export function Header() {
  const { changeToDark, changeToLight, checked } = useTheme();

  return (
    <Container>
      <img src={LogoSVG} alt="Pokedex" />
      <Switch
        width={40}
        height={10}
        handleDiameter={18}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor={"#BD3540"}
        offColor={"#9e2d37"}
        onChange={() => {
          checked ? changeToLight() : changeToDark();
        }}
        checked={checked}
      />
    </Container>
  );
}
