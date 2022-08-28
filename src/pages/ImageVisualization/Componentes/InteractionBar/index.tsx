import { useMobile } from '../../../../hooks/useMobile';
import { BodyBar } from './styles';
import {
  MdFavoriteBorder,
  MdOutlinedFlag,
  MdOutlineChat,
  MdOutlineShare,
  MdBookmarkBorder
} from 'react-icons/md';
import { IconProfile } from '../IconProfile';
import { Button } from '../../../../components/Widgets/Buttons/Button';

export function InteractionBar() {
  const { isMobile } = useMobile();
  return (
    <>
      {!isMobile && (
        <BodyBar>
          <IconProfile />

          <Button rounded>
            <MdFavoriteBorder size={40} />
          </Button>
          <Button rounded>
            <MdOutlineChat size={40} />
          </Button>
          <Button rounded>
            <MdOutlineShare size={40} />
          </Button>
          <Button rounded>
            <MdBookmarkBorder size={40} />
          </Button>
          <Button rounded>
            <MdOutlinedFlag size={40} />
          </Button>
        </BodyBar>
      )}
    </>
  );
}
