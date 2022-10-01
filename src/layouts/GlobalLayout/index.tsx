import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../../components/Header/Header';
import { Menu } from '../../components/Header/Menu';
import { MobileMenu } from '../../components/Header/MobileMenu';
import { Player } from '../../components/Player';
import { LayoutContext } from '../../context/LayoutProvider';
import { useLayout } from '../../context/LayoutProvider/useLayout';

import { useMobile } from '../../hooks/useMobile';
import { useScroll } from '../../hooks/useScroll';

import { Container } from './styles';

export function GlobalLayout() {
  const { isMobile } = useMobile();

  const { elementRef, hasVerticalScroll } = useScroll();

  const { paddingActive, handleChangePaddingActive } = useLayout();

  elementRef.current = document.documentElement;

  return (
    <>
      <Header />
      {isMobile ? <MobileMenu /> : <Menu />}
      <Container
        hasVerticalScroll={hasVerticalScroll}
        hasPaddingActive={paddingActive}
      >
        <Outlet />
      </Container>

      <Player />
    </>
  );
}
