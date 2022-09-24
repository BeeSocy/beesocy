import { useContext } from 'react';
import { MusicMenuContext } from '.';

export function useMusicMenu() {
  const context = useContext(MusicMenuContext);

  return context;
}
