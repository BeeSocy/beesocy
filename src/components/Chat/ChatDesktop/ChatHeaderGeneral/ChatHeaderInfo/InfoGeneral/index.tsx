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
import { NickHeader } from '../NickHeader';
import { PhotoHeader } from '../PhotoHeader';
import {
  AlignIcons,
  AlignInfo,
  AlignOnline,
  InfoGeneralStyled
} from './styles';

interface InfoProps {
  children?: ReactNode;
  imgUrl: string;
  nickname: string;
  id: string;
  online: boolean;
  lastmessage: string;
}

export const InfoGeneral = ({
  imgUrl,
  nickname,
  id,
  lastmessage
}: InfoProps) => {
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
            nickname={nickname}
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
            <PhotoHeader imageUrl={imgUrl} />
            <AlignOnline>
              <NickHeader nickname={nickname} />
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
            <PhotoHeader imageUrl={imgUrl} />
            <AlignOnline>
              <NickHeader nickname={nickname} />
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
