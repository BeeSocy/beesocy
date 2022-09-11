import { usePlayer } from '../../../../context/PlayerProvider/usePlayer';
import { DesktopLargePlayer } from '../LargePlayer';
import { DesktopSmallPlayer } from '../SmallPlayer';

export function DesktopPlayer() {
  const player = usePlayer();

  return (
    <>
      <DesktopLargePlayer active={player.getLarge()} />
      <DesktopSmallPlayer />
    </>
  );
}
