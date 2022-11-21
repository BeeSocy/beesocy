import { useModal } from '../../../../context/ModalProvider/useModal';
import { useMobile } from '../../../../hooks/useMobile';
import {
  ChatCards,
  ChatCardsSecondary
} from '../../ChatDesktop/ChatCards/CardInterface';
import { ChatHeader } from '../../ChatDesktop/ChatHeaderGeneral/ChatHeader';
import { ChatSection } from '../../ChatDesktop/ChatSection/ChatSectionGeneral';
import { SectionMessege } from '../../ChatDesktop/ContainerMessegers';
import { InputMessege } from '../../ChatDesktop/InputMessege/InputGeneral';
import { ModalChat } from '../../ChatDesktop/ModalChat';
import { MessageGeneral } from '../../ChatMobile/MessageMobile/General';
import { BoxCards } from '../BoxCard';
import { SectionBoxChat } from '../BoxCard/styles';

export const RecentMessage = () => {
  const { isMobile } = useMobile();

  const { handleCallModal, handleSetOpen, open: modalOpen } = useModal();

  const handleOpenMessage = () => {
    if (isMobile) {
      handleCallModal(<MessageGeneral />, {
        overlay: true,
        positionX: 50,
        positionY: 50
      });
    }
  };

  return (
    <BoxCards>
      <ChatCards
        onClick={() => {
          handleOpenMessage();
        }}
      />
    </BoxCards>
  );
};
