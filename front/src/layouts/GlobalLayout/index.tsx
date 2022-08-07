import { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { MobileMenu } from '../../components/MobileMenu';

import { useMobile } from '../../hooks/useMobile';
import { useUtils } from '../../hooks/useUtils';

import { Container } from './styles';

export function GlobalLayout() {
  const [hasVerticalScroll, setHasVerticalScroll] = useState<boolean>();

  const { isMobile } = useMobile();

  const { elementHasVerticalScroll } = useUtils();

  useEffect(() => {
    setHasVerticalScroll(
      elementHasVerticalScroll(
        document.documentElement.scrollHeight,
        document.documentElement.clientHeight
      )
    );

    window.addEventListener('resize', () => {
      setHasVerticalScroll(
        elementHasVerticalScroll(
          document.documentElement.scrollHeight,
          document.documentElement.clientHeight
        )
      );
    });
  }, []);

  return (
    <>
      <Header />
      {isMobile ? <MobileMenu /> : <Menu />}
      <Container hasVerticalScroll={hasVerticalScroll}>
        <Outlet />
      </Container>
    </>
  );
}
