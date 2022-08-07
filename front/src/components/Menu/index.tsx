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

export function Menu() {
  const [hasVerticalScroll, setHasVerticalScroll] = useState<boolean>();
  const [isShowMoreFollowing, setIsShowMoreFollowing] = useState<boolean>();

  const { open } = useMenu();

  const { pathname } = useLocation();

  function handleShowMoreFollowing() {
    setIsShowMoreFollowing(state => !state);
  }

  const menuRef = useRef<HTMLDivElement>(null);

  const elementHasVerticalScroll = (
    scrollHeight: number,
    clientHeight: number
  ) => {
    return scrollHeight > clientHeight;
  };
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
      name: 'Jorge na gaita afaf af af af a f',
      img: 'https://source.unsplash.com/random'
    },
    {
      id: 3,
      name: 'Marcelão',
      img: 'https://source.unsplash.com/random'
    }
  ];

  return (
    <Container
      open={open}
      isShowMoreFollowing={isShowMoreFollowing}
      hasVerticalScroll={hasVerticalScroll}
      ref={menuRef}
    >
      <LinkButton to="/">
        {pathname === '/' ? <MdHome /> : <MdOutlineHome />}
        <span>Início</span>
      </LinkButton>

      <LinkButton to="/music">
        {pathname === '/music' ? <MdMusicNote /> : <MdOutlineMusicNote />}
        <span>Músicas</span>
      </LinkButton>

      <LinkButton to="/image">
        {pathname === '/image' ? <MdImage /> : <MdOutlineImage />}
        <span>Imagens</span>
      </LinkButton>

      <LinkButton to="/code">
        <MdCode />
        <span>Códigos</span>
      </LinkButton>

      <Line />

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
      </LinkButton>

      {followUsers.map((user, index) => {
        if (isShowMoreFollowing ? index >= 0 : index <= 2) {
          return <UserCard user={user} />;
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
    </Container>
  );
}
