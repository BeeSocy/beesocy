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
import { LikeButton } from '../../../../components/Widgets/Buttons/ActionButtons/LikeButton';
import { IconContext } from 'react-icons';
import { SaveButton } from '../../../../components/Widgets/Buttons/ActionButtons/SaveButton';
import { ReportButton } from '../../../../components/Widgets/Buttons/ActionButtons/ReportButton';

export function InteractionBar() {
  const { isMobile } = useMobile();
  return (
    <>
      {!isMobile && (
        <BodyBar>
          <IconProfile />

          <IconContext.Provider value={{ size: '40' }}>
            <LikeButton />
            <Button rounded>
              <MdOutlineChat />
            </Button>
            <Button rounded>
              <MdOutlineShare />
            </Button>
            <SaveButton />
            <ReportButton />
          </IconContext.Provider>
        </BodyBar>
      )}
    </>
  );
}
