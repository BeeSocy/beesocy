import { useMobile } from '../../../../hooks/useMobile';
import { BodyBar } from './style';
import { MdFavoriteBorder, MdOutlinedFlag } from 'react-icons/md';
import * as HoverCard from '@radix-ui/react-hover-card';

export function BarOfInterage() {
  const { isMobile } = useMobile();
  return (
    <>
      {!isMobile && (
        <BodyBar>
          <HoverCard.Root open={true}>
            <HoverCard.Trigger />
            <HoverCard.Portal>
              <HoverCard.Content>
                <HoverCard.Arrow />
              </HoverCard.Content>
            </HoverCard.Portal>
          </HoverCard.Root>

          <MdFavoriteBorder size={20} />
          <MdOutlinedFlag size={20} />
        </BodyBar>
      )}
    </>
  );
}
