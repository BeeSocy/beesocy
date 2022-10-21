import { useState } from 'react';

import { Button } from '../../Widgets/Buttons/Button';
import { LinkButton } from '../../Widgets/Buttons/LinkButton';
import { MainContainer, MenuContainer } from './styles';

import {
  MdHome,
  MdOutlineHome,
  MdMusicNote,
  MdOutlineMusicNote,
  MdMenu,
  MdImage,
  MdOutlineImage,
  MdCode,
  MdClose,
  MdBookmark,
  MdBookmarkBorder,
  MdChat,
  MdFavorite,
  MdFavoriteBorder,
  MdHistory,
  MdOutlineChat,
  MdOutlineHistory,
  MdOutlinePermIdentity,
  MdOutlineSchool,
  MdPermIdentity,
  MdSchool,
  MdWork,
  MdWorkOutline,
  MdExpandLess,
  MdExpandMore
} from 'react-icons/md';

import { useLocation } from 'react-router-dom';

import { Line } from '../Menu/styles';

import { useMenu } from '../../../context/MenuProvider/useMenu';
import { UserCard } from '../../Cards/UserCard';
import { useTheme } from '../../../context/ThemeProvider/useTheme';
import { IProfile } from '../../../types/profile';
import { useModal } from '../../../context/ModalProvider/useModal';
import { ModalChat } from '../../Chat/ChatDesktop/ModalChat';

export function MobileMenu() {
  const [isShowMoreFollowing, setIsShowMoreFollowing] = useState<boolean>();

  const { pathname } = useLocation();

  const { open, handleToggleMenu } = useMenu();

  function handleShowMoreFollowing() {
    setIsShowMoreFollowing(state => !state);
  }

  const themes = useTheme();

  const followUsers: IProfile[] = [
    {
      identification: 'c475e623-552e-489a-8ee6-a2071eaf747b',
      nickname: '@jorge',
      name: 'Jorge na gaita afaf af af af a f',
      imageUrl: 'https://source.unsplash.com/random',
      color: '#FFFFFF',
      followers: [],
      follows: [],
      description: '',
      verified: false,
      vip: false
    },
    {
      identification: '8dc15ebc-f951-4315-b568-48f89f7ccf40',
      nickname: '@jorge',
      name: 'Jorge na gaita afaf af af af a f',
      imageUrl: 'https://source.unsplash.com/random',
      color: '#FFFFFF',
      followers: [],
      follows: [],
      description: '',
      verified: false,
      vip: false
    }
  ];

  function handleChangeRoute() {
    if (open) {
      handleToggleMenu();
    }
  }

  const { handleCallModal, handleSetOpen, open: modalOpen } = useModal();

  const handleOpenChat = () => {
    handleCallModal(<ModalChat />, {
      overlay: true,
      positionX: 105,
      positionY: 83,
      fullHeight: true
    });
  };

  return (
    <>
      <MainContainer>
        <LinkButton
          to="/"
          aria-label="Página Início"
          full={false}
          rounded
          onClick={handleChangeRoute}
        >
          {pathname === '/' ? (
            <MdHome style={{ fill: themes.colors.bee }} />
          ) : (
            <MdOutlineHome />
          )}
        </LinkButton>

        <LinkButton
          to="/musicas"
          aria-label="Página Músicas"
          full={false}
          rounded
          onClick={handleChangeRoute}
        >
          {pathname === '/musicas' ? (
            <MdMusicNote style={{ fill: themes.colors.bee }} />
          ) : (
            <MdOutlineMusicNote />
          )}
        </LinkButton>

        <Button
          full={false}
          rounded
          onClick={handleToggleMenu}
          aria-label={`${open ? 'Fechar' : 'Abrir'} menu auxiliar`}
        >
          {open ? (
            <MdClose style={{ transform: 'scale(1.25)' }} />
          ) : (
            <MdMenu style={{ transform: 'scale(1.25)' }} />
          )}
        </Button>

        <LinkButton
          to="/imagens"
          aria-label="Página Imagens"
          full={false}
          rounded
          onClick={handleChangeRoute}
        >
          {pathname === '/imagens' ? (
            <MdImage style={{ fill: themes.colors.bee }} />
          ) : (
            <MdOutlineImage />
          )}
        </LinkButton>

        <LinkButton
          to="/codigos"
          aria-label="Página Código"
          full={false}
          rounded
          onClick={handleChangeRoute}
        >
          <MdCode
            style={{
              fill:
                pathname === '/codigos' ? themes.colors.bee : themes.colors.text
            }}
          />
        </LinkButton>
      </MainContainer>

      <MenuContainer open={open}>
        <Button
          onClick={handleToggleMenu}
          aria-label="Fechar menu auxiliar"
          tabIndex={open ? 0 : -1}
        >
          <MdClose />
          <span>Fechar</span>
        </Button>

        <LinkButton
          to="/salvos"
          aria-label="Postagens salvas"
          tabIndex={open ? 0 : -1}
          onClick={handleChangeRoute}
        >
          {pathname === '/salvos' ? (
            <MdBookmark style={{ fill: themes.colors.bee }} />
          ) : (
            <MdBookmarkBorder />
          )}
          <span>Salvos</span>
        </LinkButton>

        <LinkButton
          to="/historico"
          aria-label="Postagens vistas"
          tabIndex={open ? 0 : -1}
          onClick={handleChangeRoute}
        >
          {pathname === '/historico' ? (
            <MdHistory style={{ fill: themes.colors.bee }} />
          ) : (
            <MdOutlineHistory />
          )}
          <span>Histórico</span>
        </LinkButton>

        <LinkButton
          to="/curtidos"
          aria-label="Postagens curtidentificationas"
          tabIndex={open ? 0 : -1}
          onClick={handleChangeRoute}
        >
          {pathname === '/curtidos' ? (
            <MdFavorite style={{ fill: themes.colors.bee }} />
          ) : (
            <MdFavoriteBorder />
          )}
          <span>Curtidos</span>
        </LinkButton>

        <Button
          onClick={() => {
            handleChangeRoute();
            handleOpenChat();
          }}
          aria-label="Abrir chat"
          tabIndex={open ? 0 : -1}
        >
          {pathname === '/chat' ? (
            <MdChat style={{ fill: themes.colors.bee }} />
          ) : (
            <MdOutlineChat />
          )}
          <span>Chat</span>
        </Button>

        <LinkButton
          to="/vagas"
          aria-label="Página Trabalhos"
          tabIndex={open ? 0 : -1}
          onClick={handleChangeRoute}
        >
          {pathname === '/vagas' ? (
            <MdWork style={{ fill: themes.colors.bee }} />
          ) : (
            <MdWorkOutline />
          )}
          <span>Vagas</span>
        </LinkButton>

        <LinkButton
          to="/aulas"
          aria-label="Página Aulas"
          tabIndex={open ? 0 : -1}
          onClick={handleChangeRoute}
        >
          {pathname === '/aulas' ? (
            <MdSchool style={{ fill: themes.colors.bee }} />
          ) : (
            <MdOutlineSchool />
          )}
          <span>Aulas</span>
        </LinkButton>

        <Line />

        <LinkButton
          to="/seguindo"
          aria-label="Seguindo"
          tabIndex={open ? 0 : -1}
          onClick={handleChangeRoute}
        >
          {pathname === '/seguindo' ? (
            <MdPermIdentity style={{ fill: themes.colors.bee }} />
          ) : (
            <MdOutlinePermIdentity />
          )}
          <span>Seguindo</span>
          <span>{followUsers.length}</span>
        </LinkButton>

        {followUsers.map((user, index) => {
          if (isShowMoreFollowing ? index >= 0 : index <= 2) {
            return (
              <UserCard
                key={user.identification}
                user={user}
                aria-label={`Perfil de ${user.name}`}
                tabIndex={open ? 0 : -1}
              />
            );
          }
        })}

        {followUsers.length > 2 && (
          <Button
            aria-label={`${
              isShowMoreFollowing ? 'Mostrar menos' : 'Mostrar mais'
            } seguidentificationores`}
            onClick={handleShowMoreFollowing}
            tabIndex={open ? 0 : -1}
          >
            {isShowMoreFollowing ? (
              <>
                <MdExpandLess />
                <span>Mostrar menos</span>
              </>
            ) : (
              <>
                <MdExpandMore />
                <span>Mostrar mais</span>
              </>
            )}
          </Button>
        )}
      </MenuContainer>
    </>
  );
}
