import { HeaderContainer, SubmitButton } from './styles';

import {
  MdMenu,
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

export function Header() {
  const { isMobile } = useMobile();

  const { handleChangeTheme, title } = useTheme();

  return (
    <HeaderContainer>
      <section className="left">
        {!isMobile && (
          <Button rounded>
            <MdMenu />
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
          <Button rounded>
            <MdSearch />
          </Button>
        )}

        <Button rounded onClick={handleChangeTheme}>
          {title === 'dark' ? <MdLightMode /> : <MdDarkMode />}
        </Button>

        <Button rounded>
          <MdAccountCircle />
        </Button>

        <SubmitButton>Enviar</SubmitButton>
      </section>
    </HeaderContainer>
  );
}
