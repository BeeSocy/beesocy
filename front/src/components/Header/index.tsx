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
import { Button } from '../Button';
import { SearchBar } from '../SearchBar';

import { useMobile } from '../../hooks/useMobile';
import { useTheme } from '../../context/ThemeProvider/useTheme';
import { useMenu } from '../../context/MenuProvider/useMenu';

export function Header() {
  const { isMobile } = useMobile();

  const menu = useMenu();

  const { handleChangeTheme, title } = useTheme();

  return (
    <HeaderContainer>
      <section className="left">
        {!isMobile && (
          <Button full={false} rounded onClick={menu.handleToggleMenu}>
            {menu.open ? <MdClose /> : <MdMenu />}
          </Button>
        )}

        <Logo to="/" titleIsVisible={!isMobile} />
      </section>

      {!isMobile && (
        <section className="center">
          <SearchBar />
        </section>
      )}

      <section className="right">
        {isMobile && (
          <Button full={false} rounded>
            <MdSearch />
          </Button>
        )}

        <Button full={false} rounded onClick={handleChangeTheme}>
          {title === 'dark' ? <MdLightMode /> : <MdDarkMode />}
        </Button>

        <Button full={false} rounded>
          <MdAccountCircle />
        </Button>

        <SubmitButton>Enviar</SubmitButton>
      </section>
    </HeaderContainer>
  );
}
