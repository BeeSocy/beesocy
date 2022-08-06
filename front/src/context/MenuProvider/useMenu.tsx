import { useContext } from 'react';
import { MenuContext } from '.';

export function useMenu() {
  const context = useContext(MenuContext);
  return context;
}
