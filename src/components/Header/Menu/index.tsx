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

export function Menu() {
  const [isShowMoreFollowing, setIsShowMoreFollowing] = useState<boolean>();

  const { elementRef: menuRef, hasVerticalScroll } = useScroll();

  const { open, handleSetOpenMenu } = useMenu();

  const themes = useTheme();

  const { pathname } = useLocation();

  function handleShowMoreFollowing() {
    setIsShowMoreFollowing(state => !state);
  }

  const followUsers: IProfile[] = [
    {
      id: 'c475e623-552e-489a-8ee6-a2071eaf747b',
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
      id: '8dc15ebc-f951-4315-b568-48f89f7ccf40',
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

  return (
    <Container
      open={open}
      isShowMoreFollowing={isShowMoreFollowing}
      hasVerticalScroll={hasVerticalScroll}
      ref={menuRef}
      onClick={() => {
        handleSetOpenMenu(false);
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

      <LinkButton to="/music" aria-label="Página Músicas">
        {pathname === '/music' ? (
          <MdMusicNote style={{ fill: themes.colors.bee }} />
        ) : (
          <MdOutlineMusicNote />
        )}
        <span>Músicas</span>
      </LinkButton>

      <LinkButton to="/image" aria-label="Página Imagens">
        {pathname === '/image' ? (
          <MdImage style={{ fill: themes.colors.bee }} />
        ) : (
          <MdOutlineImage />
        )}
        <span>Imagens</span>
      </LinkButton>

      <LinkButton to="/code" aria-label="Página Código">
        <MdCode
          style={{
            fill: pathname === '/code' ? themes.colors.bee : themes.colors.text
          }}
        />
        <span>Códigos</span>
      </LinkButton>

      <Line />

      <LinkButton to="/list/save" aria-label="Postagens salvas">
        {pathname === '/list/save' ? (
          <MdBookmark style={{ fill: themes.colors.bee }} />
        ) : (
          <MdBookmarkBorder />
        )}
        <span>Salvos</span>
      </LinkButton>

      <LinkButton to="/list/history" aria-label="Postagens vistas">
        {pathname === '/list/history' ? (
          <MdHistory style={{ fill: themes.colors.bee }} />
        ) : (
          <MdOutlineHistory />
        )}
        <span>Histórico</span>
      </LinkButton>

      <LinkButton to="/list/like" aria-label="Postagens curtidas">
        {pathname === '/list/like' ? (
          <MdFavorite style={{ fill: themes.colors.bee }} />
        ) : (
          <MdFavoriteBorder />
        )}
        <span>Curtidos</span>
      </LinkButton>

      <LinkButton to="/chat" aria-label="Abrir chat">
        {pathname === '/chat' ? (
          <MdChat style={{ fill: themes.colors.bee }} />
        ) : (
          <MdOutlineChat />
        )}
        <span>Chat</span>
      </LinkButton>

      <LinkButton to="/jobs" aria-label="Página Trabalhos">
        {pathname === '/jobs' ? (
          <MdWork style={{ fill: themes.colors.bee }} />
        ) : (
          <MdWorkOutline />
        )}
        <span>Vagas</span>
      </LinkButton>

      <LinkButton to="/learn" aria-label="Página Aulas">
        {pathname === '/learn' ? (
          <MdSchool style={{ fill: themes.colors.bee }} />
        ) : (
          <MdOutlineSchool />
        )}
        <span>Aulas</span>
      </LinkButton>

      <Line />

      <LinkButton to="/follow" aria-label="Seguindo">
        {pathname === '/follow' ? (
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
              key={user.id}
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
