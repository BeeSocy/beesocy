import react, { ReactNode } from 'react';
import { MdDeleteOutline, MdOutlinePushPin, MdPushPin } from 'react-icons/md';
import { useModal } from '../../../../../context/ModalProvider/useModal';
import { Button } from '../../../../Widgets/Buttons/Button';
import { NickHeader } from '../NickHeader';
import { PhotoHeader } from '../PhotoHeader';
import { AlignIcons, InfoGeneralStyled } from './styles';

export const InfoGeneral = () => {
  const { handleSetOpen } = useModal();
  return (
    <InfoGeneralStyled>
      <PhotoHeader />
      <NickHeader />
      <AlignIcons>
        <Button rounded>
          <MdOutlinePushPin />
        </Button>
        <Button
          rounded
          onClick={() => {
            handleSetOpen(false);
          }}
        >
          <MdDeleteOutline />
        </Button>
      </AlignIcons>
    </InfoGeneralStyled>
  );
};
