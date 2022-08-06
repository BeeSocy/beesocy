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

interface IHeader {
  handleChangeTheme(): void;
  themeTitle: string;
}

export function Header({ handleChangeTheme, themeTitle }: IHeader) {
  const { isMobile } = useMobile();

  return (
    <HeaderContainer>
      <section className="left">
        <Button rounded>
          <MdMenu />
        </Button>

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
          {themeTitle === 'dark' ? <MdLightMode /> : <MdDarkMode />}
        </Button>

        <Button rounded>
          <MdAccountCircle />
        </Button>

        <SubmitButton>Enviar</SubmitButton>
      </section>
    </HeaderContainer>
  );
}
