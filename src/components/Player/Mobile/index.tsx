import { useLockBodyScroll } from 'react-use';
import { usePlayer } from '../../../context/PlayerProvider/usePlayer';
import { MobileLargePlayer } from './LargePlayer';
import { MobileSmallPlayer } from './SmallPlayer';

export function MobilePlayer() {
  const player = usePlayer();

  useLockBodyScroll(player.getLarge());

  return (
    <>
      <MobileLargePlayer />
      <MobileSmallPlayer />
    </>
  );
}
