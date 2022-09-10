import { Outlet } from 'react-router-dom';

import { Header } from '../../components/Header/Header';
import { Menu } from '../../components/Header/Menu';
import { MobileMenu } from '../../components/Header/MobileMenu';
import { Player } from '../../components/Player';

import { useMobile } from '../../hooks/useMobile';
import { useScroll } from '../../hooks/useScroll';

import { Container } from './styles';

export function GlobalLayout() {
  const { isMobile } = useMobile();

  const { elementRef, hasVerticalScroll } = useScroll();

  elementRef.current = document.documentElement;

  return (
    <>
      <Header />
      {isMobile ? <MobileMenu /> : <Menu />}
      <Container hasVerticalScroll={hasVerticalScroll}>
        <Outlet />
      </Container>

      <Player />
    </>
  );
}
