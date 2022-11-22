import { useModal } from '../../../../context/ModalProvider/useModal';
import { useMobile } from '../../../../hooks/useMobile';
import { ChatCards } from '../../ChatDesktop/ChatCards/CardInterface';
import { MessageGeneral } from '../../ChatMobile/MessageMobile/General';
import { BoxCards } from '../BoxCard';

export const RecentMessage = () => {
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

  return <BoxCards> {ListContacts} </BoxCards>;
};
