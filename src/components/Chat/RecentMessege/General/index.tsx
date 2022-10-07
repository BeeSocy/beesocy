import { useModal } from '../../../../context/ModalProvider/useModal';
import { ChatCards } from '../../ChatDesktop/ChatCards/CardInterface';
import { BoxCards } from '../BoxCard';
import { SectionBoxChat } from '../BoxCard/styles';

export const RecentMessage = () => {
  const { handleCallModal } = useModal();

  const handleOpenSection = () => {
    handleCallModal(<SectionBoxChat />, {});
  };

  return (
    <BoxCards>
      <ChatCards
        onClick={() => {
          handleOpenSection();
        }}
      />
      <ChatCards
        onClick={() => {
          handleOpenSection();
        }}
      />
      <ChatCards
        onClick={() => {
          handleOpenSection();
        }}
      />
      <ChatCards
        onClick={() => {
          handleOpenSection();
        }}
      />
      <ChatCards
        onClick={() => {
          handleOpenSection();
        }}
      />
      <ChatCards
        onClick={() => {
          handleOpenSection();
        }}
      />
      <ChatCards
        onClick={() => {
          handleOpenSection();
        }}
      />
    </BoxCards>
  );
};
