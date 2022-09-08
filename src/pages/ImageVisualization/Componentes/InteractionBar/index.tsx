import { useMobile } from '../../../../hooks/useMobile';
import { Bar, BodyBar, ContentUnBodyBar, OpenBar, UnBodyBar } from './styles';
import { MdOutlineChat, MdOutlineShare } from 'react-icons/md';
import { IconProfile } from '../IconProfile';
import { Button } from '../../../../components/Widgets/Buttons/Button';
import { LikeButton } from '../../../../components/Widgets/Buttons/ActionButtons/LikeButton';
import { IconContext } from 'react-icons';
import { SaveButton } from '../../../../components/Widgets/Buttons/ActionButtons/SaveButton';
import { ReportButton } from '../../../../components/Widgets/Buttons/ActionButtons/ReportButton';

/* function openUnBodyBar() {
  document.getElementById('#UnBodyBar').style.width = '100%';
}
 */
export function InteractionBar() {
  const { isMobile } = useMobile();
  return (
    <>
      {!isMobile ? (
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
      ) : (
        <UnBodyBar>
          <OpenBar>
            <LikeButton />
          </OpenBar>
          <Bar className="">
            <ContentUnBodyBar>
              <IconContext.Provider value={{ size: '32' }}>
                <LikeButton />
                <Button rounded>
                  {/* TROCAR */}
                  <MdOutlineChat />
                </Button>
                <Button rounded>
                  {/* TROCAR */}
                  <MdOutlineShare />
                </Button>
                <SaveButton />
                <ReportButton />
              </IconContext.Provider>
            </ContentUnBodyBar>
          </Bar>
        </UnBodyBar>
      )}
    </>
  );
}
