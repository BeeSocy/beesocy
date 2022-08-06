import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

export function GlobalLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
