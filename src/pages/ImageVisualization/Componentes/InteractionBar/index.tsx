import { useMobile } from '../../../../hooks/useMobile';
import { Bar, BodyBar, ButtonBar, ContentUnBodyBar, LikeBar } from './styles';
import { MdChevronLeft, MdOutlineChat, MdOutlineShare } from 'react-icons/md';
import { IconProfile } from '../../../../components/General/IconProfile';
import { Button } from '../../../../components/Widgets/Buttons/Button';
import { LikeButton } from '../../../../components/Widgets/Buttons/ActionButtons/LikeButton';
import { IconContext } from 'react-icons';
import { SaveButton } from '../../../../components/Widgets/Buttons/ActionButtons/SaveButton';
import { ReportButton } from '../../../../components/Widgets/Buttons/ActionButtons/ReportButton';
import { useState } from 'react';

export function InteractionBar() {
  const { isMobile } = useMobile();
  const [interactionBarActive, setInteractionBarActive] =
    useState<boolean>(false);

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
        <div>
          <Bar $active={interactionBarActive}>
            {/*  */}
            <ContentUnBodyBar>
              <ButtonBar
                onClick={() => setInteractionBarActive(state => !state)}
              >
                <MdChevronLeft size={20} />
              </ButtonBar>

              <div>
                <IconContext.Provider value={{ size: '32' }}>
                  <IconProfile />
                  <Button full={false} rounded>
                    <MdOutlineChat />
                  </Button>
                  <Button full={false} rounded>
                    <MdOutlineShare />
                  </Button>
                  <SaveButton />
                  <ReportButton />
                </IconContext.Provider>
              </div>
            </ContentUnBodyBar>
          </Bar>

          <LikeBar>
            <LikeButton />
          </LikeBar>
        </div>
      )}
    </>
  );
}
