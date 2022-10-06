import { HeaderContainer, SubmitButton } from './styles';

import {
  MdMenu,
  MdClose,
  MdSearch,
  MdAccountCircle,
  MdLightMode,
  MdDarkMode
} from 'react-icons/md';

import { Logo } from '../Logo';
import { Button } from '../../Widgets/Buttons/Button';
import { SearchBar } from '../SearchBar';

import { useMobile } from '../../../hooks/useMobile';
import { useTheme } from '../../../context/ThemeProvider/useTheme';
import { useMenu } from '../../../context/MenuProvider/useMenu';
import { LinkButton } from '../../Widgets/Buttons/LinkButton';

export function Header() {
  const { isMobile } = useMobile();

  const menu = useMenu();

  const { handleChangeTheme, title } = useTheme();

  return (
    <HeaderContainer>
      <section className="left">
        {!isMobile && (
          <Button
            full={false}
            rounded
            onClick={menu.handleToggleMenu}
            aria-label={`${menu.open ? 'Fechar' : 'Abrir'} menu lateral`}
          >
            {menu.open ? <MdClose /> : <MdMenu />}
          </Button>
        )}

        <Logo to="/" titleIsVisible={!isMobile} />
      </section>

      {!isMobile && (
        <section className="center">
          <SearchBar aria-label="Pesquisar" />
        </section>
      )}

      <section className="right">
        <Button
          full={false}
          rounded
          onClick={handleChangeTheme}
          aria-label="Trocar tema"
        >
          {title === 'dark' ? <MdLightMode /> : <MdDarkMode />}
        </Button>

        <Button full={false} rounded aria-label="Seu perfil">
          <MdAccountCircle />
        </Button>

        <SubmitButton>Enviar</SubmitButton>
      </section>
    </HeaderContainer>
  );
}
