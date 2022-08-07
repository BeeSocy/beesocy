import { useState } from 'react';

import { Button } from '../Button';
import { LinkButton } from '../LinkButton';
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

import { useMenu } from '../../context/MenuProvider/useMenu';
import { UserCard } from '../UserCard';

export function MobileMenu() {
  const [isShowMoreFollowing, setIsShowMoreFollowing] = useState<boolean>();

  const { pathname } = useLocation();

  const { open, handleToggleMenu } = useMenu();

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

  return (
    <>
      <MainContainer>
        <LinkButton to="/" aria-label="Página Início" full={false} rounded>
          {pathname === '/' ? <MdHome /> : <MdOutlineHome />}
        </LinkButton>

        <LinkButton
          to="/music"
          aria-label="Página Músicas"
          full={false}
          rounded
        >
          {pathname === '/music' ? <MdMusicNote /> : <MdOutlineMusicNote />}
        </LinkButton>

        <Button
          full={false}
          rounded
          onClick={handleToggleMenu}
          aria-label={`${open ? 'Fechar' : 'Abrir'} menu auxiliar`}
        >
          {open ? <MdClose /> : <MdMenu />}
        </Button>

        <LinkButton
          to="/image"
          aria-label="Página Imagens"
          full={false}
          rounded
        >
          {pathname === '/image' ? <MdImage /> : <MdOutlineImage />}
        </LinkButton>

        <LinkButton to="/code" aria-label="Página Código" full={false} rounded>
          <MdCode />
        </LinkButton>
      </MainContainer>

      <MenuContainer open={open}>
        <Button onClick={handleToggleMenu} aria-label="Fechar menu auxiliar">
          <MdClose />
        </Button>

        <LinkButton to="/list/save" aria-label="Postagens salvas">
          {pathname === '/list/save' ? <MdBookmark /> : <MdBookmarkBorder />}
          <span>Salvos</span>
        </LinkButton>

        <LinkButton to="/list/history" aria-label="Postagens vistas">
          {pathname === '/list/history' ? <MdHistory /> : <MdOutlineHistory />}
          <span>Histórico</span>
        </LinkButton>

        <LinkButton to="/list/like" aria-label="Postagens curtidas">
          {pathname === '/list/like' ? <MdFavorite /> : <MdFavoriteBorder />}
          <span>Curtidos</span>
        </LinkButton>

        <LinkButton to="/chat" aria-label="Abrir chat">
          {pathname === '/chat' ? <MdChat /> : <MdOutlineChat />}
          <span>Chat</span>
        </LinkButton>

        <LinkButton to="/jobs" aria-label="Página Trabalhos">
          {pathname === '/jobs' ? <MdWork /> : <MdWorkOutline />}
          <span>Vagas</span>
        </LinkButton>

        <LinkButton to="/learn" aria-label="Página Aulas">
          {pathname === '/learn' ? <MdSchool /> : <MdOutlineSchool />}
          <span>Aulas</span>
        </LinkButton>

        <Line />

        <LinkButton to="/follow" aria-label="Seguindo">
          {pathname === '/follow' ? (
            <MdPermIdentity />
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
      </MenuContainer>
    </>
  );
}
