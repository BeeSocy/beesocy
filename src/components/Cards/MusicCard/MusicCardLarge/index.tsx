import { useMobile } from '../../../../hooks/useMobile';
import { IMusicCardProps } from '..';

import { MusicCardLargeMobile } from './MusicCardLargeMobile';
import { MusicCardLargeDesktop } from './MusicCardLargeDesktop';

export function MusicCardLarge(props: IMusicCardProps) {
  const { isMobile } = useMobile();

  return (
    <>
      {isMobile ? (
        <MusicCardLargeMobile {...props} />
      ) : (
        <MusicCardLargeDesktop {...props} />
      )}
    </>
  );
}
