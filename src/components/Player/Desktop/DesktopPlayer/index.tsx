import { useLockBodyScroll } from 'react-use';
import { usePlayer } from '../../../../context/PlayerProvider/usePlayer';
import { DesktopLargePlayer } from '../LargePlayer';
import { DesktopSmallPlayer } from '../SmallPlayer';

export function DesktopPlayer() {
  const player = usePlayer();

  useLockBodyScroll(player.getLarge());

  return (
    <>
      <DesktopLargePlayer active={player.getLarge()} />
      <DesktopSmallPlayer />
    </>
  );
}
