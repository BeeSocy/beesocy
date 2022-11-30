import { useModal } from '../../../../context/ModalProvider/useModal';
import { useMobile } from '../../../../hooks/useMobile';
import { ChatCards } from '../../ChatDesktop/ChatCards/CardInterface';
import { ICardInfoProps } from '../../ChatDesktop/ChatGeneral';
import { MessageGeneral } from '../../ChatMobile/MessageMobile/General';
import { BoxCards } from '../BoxCard';

interface IRecentMessageProps {
  imgUrl: string;
  nickname: string;
  id: string;
  lastmessage: string;
}

export const RecentMessage = ({
  id,
  imgUrl,
  nickname,
  lastmessage
}: IRecentMessageProps) => {
  const { isMobile } = useMobile();

  const { handleCallModal } = useModal();

  const handleOpenMessage = () => {
    if (isMobile) {
      handleCallModal(<MessageGeneral />, {
        overlay: true,
        positionX: 50,
        positionY: 50
      });
    }
  };

  const ListContacts = [
    <ChatCards
      onClick={() => {
        handleOpenMessage();
      }}
    />
  ];

  return (
    <BoxCards
      imgUser={imgUrl}
      nick={nickname}
      identification={id}
      lastMessage={lastmessage}
    >
      {' '}
      {ListContacts}{' '}
    </BoxCards>
  );
};
