import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from '../../contexts/ThemeContext';
import { animateScroll } from 'react-scroll';
import { Container, WrapMenu, ItemMenu } from './styles';

import pokeball_icon from '../../assets/pokeball_icon.png';
import logo_pokedex from '../../assets/logo_pokedex.svg';

function Header() {
  const context = useContext(ThemeContext);

  function refresPage() {
    const result = window.confirm("This guide will be recharged! Are you sure about this?");
    if (result) window.location.reload();
  }

  return (
    <Container>
      <nav>
        <WrapMenu>
          <li>
            <ItemMenu>
              <img src={pokeball_icon} alt="menu" width={50} onClick={event => refresPage()} />
            </ItemMenu>
          </li>
          <li>
            <ItemMenu onClick={() => animateScroll.scrollToTop()} >
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
              
              onColor={context?.theme.colors.switch.on}
              offColor={context?.theme.colors.switch.off}
              
              onChange={e => context?.toggleTheme()}
              checked={context?.theme.title === 'dark'}
            />
          </li>
        </WrapMenu>
      </nav>
    </Container>
  );
}

export default Header;
