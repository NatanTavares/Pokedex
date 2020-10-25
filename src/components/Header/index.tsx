import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Container, WrapMenu, ItemMenu } from './styles';

import pokeball_icon from '../../assets/pokeball_icon.png';
import logo_pokedex from '../../assets/logo_pokedex.svg';

interface HeaderProps {
  toggleTheme(): void
}

function Header(props: HeaderProps) {
  const { title, colors } = useContext(ThemeContext);

  return (
    <Container>
      <nav>
        <WrapMenu>
          <li>
            <ItemMenu href="">
              <img src={pokeball_icon} alt="menu" width={50} />
            </ItemMenu>
          </li>
          <li>
            <ItemMenu href="">
              <img src={logo_pokedex} alt="pokedex" />
            </ItemMenu>
          </li>
          <li>
            <Switch
              width={50}
              height={10}
              handleDiameter={18}
              checkedIcon={false}
              uncheckedIcon={false}
              
              onColor={colors.switch.on}
              offColor={colors.switch.off}
              
              onChange={props.toggleTheme}
              checked={title === 'dark'}
            />
          </li>
        </WrapMenu>
      </nav>
    </Container>
  );
}

export default Header;
