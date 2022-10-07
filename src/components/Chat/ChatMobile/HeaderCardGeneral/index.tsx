import { MdClose } from 'react-icons/md';
import { useModal } from '../../../../context/ModalProvider/useModal';
import { Button } from '../../../Widgets/Buttons/Button';
import { HeaderCard } from '../HeaderCards';

interface IHeaderCardsProps {
  title: string;
}

export const HeaderCards = ({ title }: IHeaderCardsProps) => {
  const { handleSetOpen } = useModal();
  return (
    <HeaderCard>
      <h1>{title}</h1>
      <Button
        rounded
        full={false}
        onClick={() => {
          handleSetOpen(false);
        }}
      >
        <MdClose />
      </Button>
    </HeaderCard>
  );
};
