import { Container, Line } from './styles';

import { LinkButton } from '../../Widgets/Buttons/LinkButton';

import {
  MdHome,
  MdOutlineHome,
  MdMusicNote,
  MdOutlineMusicNote,
  MdImage,
  MdOutlineImage,
  MdCode,
  MdBookmark,
  MdBookmarkBorder,
  MdHistory,
  MdOutlineHistory,
  MdFavorite,
  MdFavoriteBorder,
  MdChat,
  MdOutlineChat,
  MdWork,
  MdWorkOutline,
  MdSchool,
  MdOutlineSchool,
  MdPermIdentity,
  MdOutlinePermIdentity,
  MdExpandMore,
  MdExpandLess
} from 'react-icons/md';
import { useMenu } from '../../../context/MenuProvider/useMenu';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../../Widgets/Buttons/Button';
import { UserCard } from '../../Cards/UserCard';
import { useScroll } from '../../../hooks/useScroll';
import { useTheme } from '../../../context/ThemeProvider/useTheme';
import { IProfile } from '../../../types/profile';

import { useModal } from '../../../context/ModalProvider/useModal';
import { ModalChat } from '../../Chat/ChatDesktop/ModalChat';

import { usePlayer } from '../../../context/PlayerProvider/usePlayer';

export function Menu() {
  const [isShowMoreFollowing, setIsShowMoreFollowing] = useState<boolean>();

  const { elementRef: menuRef, hasVerticalScroll } = useScroll();

  const { open, handleSetOpenMenu } = useMenu();

  const themes = useTheme();

  const { handleChangeLarge } = usePlayer();

  const { pathname } = useLocation();

  function handleShowMoreFollowing() {
    setIsShowMoreFollowing(state => !state);
  }

  function handleOnClickMenu() {
    handleSetOpenMenu(false);
    handleChangeLarge(false);
  }

  const followUsers: IProfile[] = [
    {
      identification: 'c475e623-552e-489a-8ee6-a2071eaf747b',
      nickname: '@jorge',
      name: 'Pica-Pau',
      imageUrl:
        'https://64.media.tumblr.com/6ae2a67ce510029caf6219c6a708f501/60b41a809f52a0b4-8c/s400x600/7e89be3c89e7cd3fdf18e7f6ed9b4639ace24cde.pnj',
      color: '#FFFFFF',
      followers: [],
      follows: [],
      description: '',
      verified: false,
      vip: false
    }
  ];

  const { handleCallModal, handleSetOpen, open: modalOpen } = useModal();

  const handleOpenChat = () => {
    handleCallModal(<ModalChat />, {
      overlay: true,
      positionX: 105,
      positionY: 83
    });
  };

  return (
    <Container
      open={open}
      isShowMoreFollowing={isShowMoreFollowing}
      hasVerticalScroll={hasVerticalScroll}
      ref={menuRef}
      onClick={() => {
        handleOnClickMenu();
      }}
    >
      <LinkButton to="/" aria-label="Página Início">
        {pathname === '/' ? (
          <MdHome style={{ fill: themes.colors.bee }} />
        ) : (
          <MdOutlineHome />
        )}
        <span>Início</span>
      </LinkButton>

      <LinkButton to="/musicas" aria-label="Página Músicas">
        {pathname === '/musicas' ? (
          <MdMusicNote style={{ fill: themes.colors.bee }} />
        ) : (
          <MdOutlineMusicNote />
        )}
        <span>Músicas</span>
      </LinkButton>

      <LinkButton to="/imagens" aria-label="Página Imagens">
        {pathname === '/imagens' ? (
          <MdImage style={{ fill: themes.colors.bee }} />
        ) : (
          <MdOutlineImage />
        )}
        <span>Imagens</span>
      </LinkButton>

      <LinkButton to="/codigos" aria-label="Página Código">
        <MdCode
          style={{
            fill:
              pathname === '/codigos' ? themes.colors.bee : themes.colors.text
          }}
        />
        <span>Códigos</span>
      </LinkButton>

      <Line />

      <LinkButton to="/salvos" aria-label="Postagens salvas">
        {pathname === '/salvos' ? (
          <MdBookmark style={{ fill: themes.colors.bee }} />
        ) : (
          <MdBookmarkBorder />
        )}
        <span>Salvos</span>
      </LinkButton>

      <LinkButton to="/historico" aria-label="Postagens vistas">
        {pathname === '/historico' ? (
          <MdHistory style={{ fill: themes.colors.bee }} />
        ) : (
          <MdOutlineHistory />
        )}
        <span>Histórico</span>
      </LinkButton>

      <LinkButton to="/curtidos" aria-label="Postagens curtidas">
        {pathname === '/curtidos' ? (
          <MdFavorite style={{ fill: themes.colors.bee }} />
        ) : (
          <MdFavoriteBorder />
        )}
        <span>Curtidos</span>
      </LinkButton>

      <Button
        onClick={() => {
          handleOpenChat();
        }}
        aria-label="Abrir chat"
      >
        {pathname === '/chat' ? (
          <MdChat style={{ fill: themes.colors.bee }} />
        ) : (
          <MdOutlineChat />
        )}
        <span>Chat</span>
      </Button>

      <LinkButton to="/vagas" aria-label="Página Trabalhos">
        {pathname === '/vagas' ? (
          <MdWork style={{ fill: themes.colors.bee }} />
        ) : (
          <MdWorkOutline />
        )}
        <span>Vagas</span>
      </LinkButton>

      <LinkButton to="/aulas" aria-label="Página Aulas">
        {pathname === '/aulas' ? (
          <MdSchool style={{ fill: themes.colors.bee }} />
        ) : (
          <MdOutlineSchool />
        )}
        <span>Aulas</span>
      </LinkButton>

      <Line />

      <LinkButton to="/seguindo" aria-label="Seguindo">
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
            />
          );
        }
      })}

      {followUsers.length > 2 && (
        <Button
          aria-label={`${
            isShowMoreFollowing ? 'Mostrar menos' : 'Mostrar mais'
          } seguidores`}
          onClick={handleShowMoreFollowing}
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
    </Container>
  );
}
