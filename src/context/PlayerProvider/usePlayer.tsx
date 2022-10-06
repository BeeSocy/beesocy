import { useContext } from 'react';
import { PlayerContext } from '.';

export function usePlayer() {
  const context = useContext(PlayerContext);

  return context;
}
