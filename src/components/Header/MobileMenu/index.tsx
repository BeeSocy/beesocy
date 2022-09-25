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

export function MobileMenu() {
  const [isShowMoreFollowing, setIsShowMoreFollowing] = useState<boolean>();

  const { pathname } = useLocation();

  const { open, handleToggleMenu } = useMenu();

  function handleShowMoreFollowing() {
    setIsShowMoreFollowing(state => !state);
  }

  const themes = useTheme();

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
    },
    {
      id: 7,
      name: 'Jorge na gaita afaf af af af a f',
      img: 'https://source.unsplash.com/random'
    },
    {
      id: 8,
      name: 'Jorge na gaita afaf af af af a faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      img: 'https://source.unsplash.com/random'
    },
    {
      id: 3,
      name: 'Marcelão',
      img: 'https://source.unsplash.com/random'
    }
  ];

  function handleChangeRoute() {
    if (open) {
      handleToggleMenu();
    }
  }

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
          to="/music"
          aria-label="Página Músicas"
          full={false}
          rounded
          onClick={handleChangeRoute}
        >
          {pathname === '/music' ? (
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
          to="/image"
          aria-label="Página Imagens"
          full={false}
          rounded
          onClick={handleChangeRoute}
        >
          {pathname === '/image' ? (
            <MdImage style={{ fill: themes.colors.bee }} />
          ) : (
            <MdOutlineImage />
          )}
        </LinkButton>

        <LinkButton
          to="/code"
          aria-label="Página Código"
          full={false}
          rounded
          onClick={handleChangeRoute}
        >
          <MdCode
            style={{
              fill:
                pathname === '/code' ? themes.colors.bee : themes.colors.text
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
          to="/list/save"
          aria-label="Postagens salvas"
          tabIndex={open ? 0 : -1}
          onClick={handleChangeRoute}
        >
          {pathname === '/list/save' ? (
            <MdBookmark style={{ fill: themes.colors.bee }} />
          ) : (
            <MdBookmarkBorder />
          )}
          <span>Salvos</span>
        </LinkButton>

        <LinkButton
          to="/list/history"
          aria-label="Postagens vistas"
          tabIndex={open ? 0 : -1}
          onClick={handleChangeRoute}
        >
          {pathname === '/list/history' ? (
            <MdHistory style={{ fill: themes.colors.bee }} />
          ) : (
            <MdOutlineHistory />
          )}
          <span>Histórico</span>
        </LinkButton>

        <LinkButton
          to="/list/like"
          aria-label="Postagens curtidas"
          tabIndex={open ? 0 : -1}
          onClick={handleChangeRoute}
        >
          {pathname === '/list/like' ? (
            <MdFavorite style={{ fill: themes.colors.bee }} />
          ) : (
            <MdFavoriteBorder />
          )}
          <span>Curtidos</span>
        </LinkButton>

        <LinkButton
          to="/chat"
          aria-label="Abrir chat"
          tabIndex={open ? 0 : -1}
          onClick={handleChangeRoute}
        >
          {pathname === '/chat' ? (
            <MdChat style={{ fill: themes.colors.bee }} />
          ) : (
            <MdOutlineChat />
          )}
          <span>Chat</span>
        </LinkButton>

        <LinkButton
          to="/jobs"
          aria-label="Página Trabalhos"
          tabIndex={open ? 0 : -1}
          onClick={handleChangeRoute}
        >
          {pathname === '/jobs' ? (
            <MdWork style={{ fill: themes.colors.bee }} />
          ) : (
            <MdWorkOutline />
          )}
          <span>Vagas</span>
        </LinkButton>

        <LinkButton
          to="/learn"
          aria-label="Página Aulas"
          tabIndex={open ? 0 : -1}
          onClick={handleChangeRoute}
        >
          {pathname === '/learn' ? (
            <MdSchool style={{ fill: themes.colors.bee }} />
          ) : (
            <MdOutlineSchool />
          )}
          <span>Aulas</span>
        </LinkButton>

        <Line />

        <LinkButton
          to="/follow"
          aria-label="Seguindo"
          tabIndex={open ? 0 : -1}
          onClick={handleChangeRoute}
        >
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
                tabIndex={open ? 0 : -1}
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
