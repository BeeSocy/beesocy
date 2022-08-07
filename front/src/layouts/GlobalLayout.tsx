import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { MobileMenu } from '../components/MobileMenu';
import { useMobile } from '../hooks/useMobile';

export function GlobalLayout() {
  const { isMobile } = useMobile();
  return (
    <>
      <Header />
      {isMobile ? <MobileMenu /> : <Menu />}
      <Outlet />
    </>
  );
}
