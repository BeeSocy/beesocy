import { HeaderContainer, SubmitButton, UserProfileImage } from './styles';

import {
  MdMenu,
  MdClose,
  MdSearch,
  MdAccountCircle,
  MdLightMode,
  MdDarkMode,
  MdLogout
} from 'react-icons/md';

import { Logo } from '../Logo';
import { Button } from '../../Widgets/Buttons/Button';
import { SearchBar } from '../SearchBar';

import { useMobile } from '../../../hooks/useMobile';
import { useTheme } from '../../../context/ThemeProvider/useTheme';
import { useMenu } from '../../../context/MenuProvider/useMenu';
import { LinkButton } from '../../Widgets/Buttons/LinkButton';
import { useModal } from '../../../context/ModalProvider/useModal';
import { Login } from '../../Login';
import { useAuth } from '../../../context/AuthProvider/useAuth';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../../utils/api';
import { IProfile } from '../../../types/profile';
import Skeleton from 'react-loading-skeleton';
import { profileImageBaseUrl } from '../../../pages/Profile';
import { Link } from 'react-router-dom';

export function Header() {
  const { isMobile } = useMobile();

  const { userId, logout } = useAuth();

  const loggedUserQuery = useQuery(['loggedUser'], () => {
    return getUserById(userId);
  });

  const menu = useMenu();

  const { handleChangeTheme, title } = useTheme();

  const { handleCallModal } = useModal();

  function handleCallLoginModal() {
    handleCallModal(<Login />, {
      center: true,
      overlay: true
    });
  }

  async function handleLogout() {
    await logout();
    return window.location.reload();
  }

  async function getUserById(id: string) {
    const request = await api.get(`/user/${id}`);
    const data = await request.data;

    return data as IProfile;
  }

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

        {userId || loggedUserQuery.data ? (
          <>
            <Button
              full={false}
              rounded
              arial-label="Deslogar"
              onClick={handleLogout}
            >
              <MdLogout />
            </Button>
            <LinkButton
              to={`/${loggedUserQuery.data?.nickname}`}
              full={false}
              rounded
              aria-label="Seu perfil"
            >
              {loggedUserQuery.isLoading ? (
                <Skeleton circle width={24} height={24} />
              ) : (
                <UserProfileImage
                  src={
                    loggedUserQuery.data?.imageUrl ||
                    `${profileImageBaseUrl}${loggedUserQuery.data?.imageFileName}`
                  }
                />
              )}
            </LinkButton>
          </>
        ) : (
          <Button
            full={false}
            rounded
            aria-label="Realizar login"
            onClick={handleCallLoginModal}
          >
            <MdAccountCircle />
          </Button>
        )}

        <SubmitButton>Enviar</SubmitButton>
      </section>
    </HeaderContainer>
  );
}
