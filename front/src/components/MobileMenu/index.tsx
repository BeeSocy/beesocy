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
  MdWorkOutline
} from 'react-icons/md';

import { useLocation } from 'react-router-dom';
import { Line } from '../Menu/styles';

import { useMenu } from '../../context/MenuProvider/useMenu';

export function MobileMenu() {
  const { pathname } = useLocation();

  const { open, handleToggleMenu } = useMenu();

  return (
    <>
      <MainContainer>
        <LinkButton to="/" wrap rounded>
          {pathname === '/' ? <MdHome /> : <MdOutlineHome />}
        </LinkButton>

        <LinkButton to="/music" wrap rounded>
          {pathname === '/music' ? <MdMusicNote /> : <MdOutlineMusicNote />}
        </LinkButton>

        <Button rounded onClick={handleToggleMenu}>
          <MdMenu />
        </Button>

        <LinkButton to="/image" wrap rounded>
          {pathname === '/image' ? <MdImage /> : <MdOutlineImage />}
        </LinkButton>

        <LinkButton to="/code" wrap rounded>
          <MdCode />
        </LinkButton>
      </MainContainer>

      <MenuContainer open={open}>
        <Button full onClick={handleToggleMenu}>
          <MdClose />
        </Button>

        <LinkButton to="/list/save" full>
          {pathname === '/list/save' ? <MdBookmark /> : <MdBookmarkBorder />}
          <span>Salvos</span>
        </LinkButton>

        <LinkButton to="/list/history" full>
          {pathname === '/list/history' ? <MdHistory /> : <MdOutlineHistory />}
          <span>Histórico</span>
        </LinkButton>

        <LinkButton to="/list/like" full>
          {pathname === '/list/like' ? <MdFavorite /> : <MdFavoriteBorder />}
          <span>Curtidos</span>
        </LinkButton>

        <LinkButton to="/chat" full>
          {pathname === '/chat' ? <MdChat /> : <MdOutlineChat />}
          <span>Chat</span>
        </LinkButton>

        <LinkButton to="/jobs" full>
          {pathname === '/jobs' ? <MdWork /> : <MdWorkOutline />}
          <span>Vagas</span>
        </LinkButton>

        <LinkButton to="/learn" full>
          {pathname === '/learn' ? <MdSchool /> : <MdOutlineSchool />}
          <span>Aulas</span>
        </LinkButton>

        <Line />

        <LinkButton to="/follow" full>
          {pathname === '/follow' ? (
            <MdPermIdentity />
          ) : (
            <MdOutlinePermIdentity />
          )}
          <span>Seguindo</span>
        </LinkButton>
      </MenuContainer>
    </>
  );
}
