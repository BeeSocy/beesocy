import { useMobile } from '../../../../hooks/useMobile';
import { IMusicCardProps } from '..';

import { MusicCardSmallMobile } from './MusicCardSmallMobile';
import { MusicCardSmallDesktop } from './MusicCardSmallDesktop';

export function MusicCardSmall(props: IMusicCardProps) {
  const { isMobile } = useMobile();

  return (
    <>
      {isMobile ? (
        <MusicCardSmallMobile {...props} />
      ) : (
        <MusicCardSmallDesktop {...props} />
      )}
    </>
  );
}
