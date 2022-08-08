import { Container, Line } from './styles';

import { LinkButton } from '../LinkButton';

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
import { useMenu } from '../../context/MenuProvider/useMenu';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../Button';
import { UserCard } from '../UserCard';
import { useUtils } from '../../hooks/useUtils';
import { useTheme } from '../../context/ThemeProvider/useTheme';

export function Menu() {
  const [hasVerticalScroll, setHasVerticalScroll] = useState<boolean>();
  const [isShowMoreFollowing, setIsShowMoreFollowing] = useState<boolean>();

  const { elementHasVerticalScroll } = useUtils();

  const { open } = useMenu();

  const themes = useTheme();

  const { pathname } = useLocation();

  function handleShowMoreFollowing() {
    setIsShowMoreFollowing(state => !state);
  }

  const followUsers = [
    {
      id: 45,
      name: 'Jorge na gaita afaf af af af a f',
      img: 'https://source.unsplash.com/random'
    },
    {
      id: 6,
      name: 'Jorge na gaita afaf af af af a f',
      img: 'https://source.unsplash.com/random'
    }
    /*     {
      id: 7,
      name: 'Jorge na gaita afaf af af af a f',
      img: 'https://source.unsplash.com/random'
    },
    {
      id: 8,
      name: 'Jorge na gaita afaf af af af a f',
      img: 'https://source.unsplash.com/random'
    },
    {
      id: 3,
      name: 'Marcelão',
      img: 'https://source.unsplash.com/random'
    } */
  ];

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      setHasVerticalScroll(
        elementHasVerticalScroll(
          menuRef.current.scrollHeight,
          menuRef.current.clientHeight
        )
      );
    }

    window.addEventListener('resize', () => {
      if (menuRef.current) {
        setHasVerticalScroll(
          elementHasVerticalScroll(
            menuRef.current.scrollHeight,
            menuRef.current.clientHeight
          )
        );
      }
    });
  }, []);

  return (
    <Container
      open={open}
      isShowMoreFollowing={isShowMoreFollowing}
      hasVerticalScroll={hasVerticalScroll}
      ref={menuRef}
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
