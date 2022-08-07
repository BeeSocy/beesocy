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
        <LinkButton full={false} to="/" wrap rounded>
          {pathname === '/' ? <MdHome /> : <MdOutlineHome />}
        </LinkButton>

        <LinkButton full={false} to="/music" wrap rounded>
          {pathname === '/music' ? <MdMusicNote /> : <MdOutlineMusicNote />}
        </LinkButton>

        <Button full={false} rounded onClick={handleToggleMenu}>
          {open ? <MdClose /> : <MdMenu />}
        </Button>

        <LinkButton full={false} to="/image" wrap rounded>
          {pathname === '/image' ? <MdImage /> : <MdOutlineImage />}
        </LinkButton>

        <LinkButton full={false} to="/code" wrap rounded>
          <MdCode />
        </LinkButton>
      </MainContainer>

      <MenuContainer open={open}>
        <Button onClick={handleToggleMenu}>
          <MdClose />
        </Button>

        <LinkButton to="/list/save">
          {pathname === '/list/save' ? <MdBookmark /> : <MdBookmarkBorder />}
          <span>Salvos</span>
        </LinkButton>

        <LinkButton to="/list/history">
          {pathname === '/list/history' ? <MdHistory /> : <MdOutlineHistory />}
          <span>Histórico</span>
        </LinkButton>

        <LinkButton to="/list/like">
          {pathname === '/list/like' ? <MdFavorite /> : <MdFavoriteBorder />}
          <span>Curtidos</span>
        </LinkButton>

        <LinkButton to="/chat">
          {pathname === '/chat' ? <MdChat /> : <MdOutlineChat />}
          <span>Chat</span>
        </LinkButton>

        <LinkButton to="/jobs">
          {pathname === '/jobs' ? <MdWork /> : <MdWorkOutline />}
          <span>Vagas</span>
        </LinkButton>

        <LinkButton to="/learn">
          {pathname === '/learn' ? <MdSchool /> : <MdOutlineSchool />}
          <span>Aulas</span>
        </LinkButton>

        <Line />

        <LinkButton to="/follow">
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
            return <UserCard key={user.id} user={user} />;
          }
        })}

        {followUsers.length > 2 && (
          <Button onClick={handleShowMoreFollowing}>
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
