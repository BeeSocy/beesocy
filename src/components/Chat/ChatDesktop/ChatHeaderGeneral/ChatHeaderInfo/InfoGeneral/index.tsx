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
import { Online } from '../../../ChatCards/CardInfo/Online';
import { ICardInfoProps } from '../../../ChatGeneral';
import { IChatHeaderProps } from '../../ChatHeader';
import { NickHeader } from '../NickHeader';
import { PhotoHeader } from '../PhotoHeader';
import {
  AlignIcons,
  AlignInfo,
  AlignOnline,
  InfoGeneralStyled
} from './styles';

interface InfoGeneralProps {
  imgUrl: string;
  nickname: string;
  id: string;
  lastmessage: string;
  online: boolean;
}

export const InfoGeneral = ({
  imgUrl,
  nickname,
  id,
  lastmessage
}: InfoGeneralProps) => {
  const { handleSetOpen } = useModal();
  const { isMobile } = useMobile();

  const { handleCallModal } = useModal();

  const handleOpenCards = () => {
    if (isMobile) {
      handleCallModal(
        <MobileCards>
          <HeaderCards title={'Chat BeeSocy'} />
          <RecentMessage
            imgUrl={imgUrl}
            nickname={'Carti Play'}
            id={id}
            lastmessage={lastmessage}
          />
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
            <PhotoHeader
              imageUrl={
                'https://i.pinimg.com/564x/1c/3f/43/1c3f43ce30c8ba4e699d20fef8ba8548.jpg'
              }
            />
            <AlignOnline>
              <NickHeader nickname={'Carti Play'} />
              <Online online={'online'} />
            </AlignOnline>
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
            <PhotoHeader
              imageUrl={
                'https://i.pinimg.com/564x/1c/3f/43/1c3f43ce30c8ba4e699d20fef8ba8548.jpg'
              }
            />
            <AlignOnline>
              <NickHeader nickname={'Carti Play'} />
              <Online online={'online'} />
            </AlignOnline>
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
