import react, { ReactNode } from 'react';
import {
  MdClose,
  MdDeleteOutline,
  MdOutlineChevronLeft,
  MdOutlinePushPin,
  MdPushPin
} from 'react-icons/md';
import { useModal } from '../../../../../../context/ModalProvider/useModal';
import { useMobile } from '../../../../../../hooks/useMobile';
import { Button } from '../../../../../Widgets/Buttons/Button';
import { HeaderCards } from '../../../../ChatMobile/CardsMobile/HeaderCardGeneral';
import { MobileCards } from '../../../../ChatMobile/CardsMobile/MobileCards';
import { RecentMessage } from '../../../../RecentMessege/General';
import { NickHeader } from '../NickHeader';
import { PhotoHeader } from '../PhotoHeader';
import { AlignIcons, AlignInfo, InfoGeneralStyled } from './styles';

export const InfoGeneral = () => {
  const { handleSetOpen } = useModal();
  const { isMobile } = useMobile();

  const { handleCallModal } = useModal();

  const handleOpenCards = () => {
    if (isMobile) {
      handleCallModal(
        <MobileCards>
          <HeaderCards title={'Chat BeeSocy'} />
          <RecentMessage />
        </MobileCards>,
        {
          overlay: true,
          positionX: 50,
          positionY: 50
        }
      );
    }
  };

  return (
    <>
      {!isMobile ? (
        <InfoGeneralStyled>
          <AlignInfo>
            <PhotoHeader imageUrl={''} />
            <NickHeader nickname={'undefined'} />
          </AlignInfo>

          <AlignIcons>
            <Button rounded>
              <MdOutlinePushPin />
            </Button>

            <Button rounded>
              <MdDeleteOutline />
            </Button>

            <Button
              rounded
              onClick={() => {
                handleSetOpen(false);
              }}
            >
              <MdClose />
            </Button>
          </AlignIcons>
        </InfoGeneralStyled>
      ) : (
        <InfoGeneralStyled>
          <AlignInfo>
            <Button
              rounded
              full={false}
              onClick={() => {
                handleOpenCards();
              }}
            >
              <MdOutlineChevronLeft />
            </Button>
            <PhotoHeader imageUrl={''} />
            <NickHeader nickname={'undefined'} />
          </AlignInfo>
          <AlignIcons>
            <Button rounded>
              <MdOutlinePushPin />
            </Button>

            <Button rounded>
              <MdDeleteOutline />
            </Button>
          </AlignIcons>
        </InfoGeneralStyled>
      )}
    </>
  );
};
