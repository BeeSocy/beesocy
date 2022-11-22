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
import { NickHeader } from '../NickHeader';
import { PhotoHeader } from '../PhotoHeader';
import { AlignIcons, InfoGeneralStyled } from './styles';

interface IInfoGeneralProps {
  color: string;
}

export const InfoGeneral = ({ color }: IInfoGeneralProps) => {
  const { handleSetOpen } = useModal();
  const { isMobile } = useMobile();

  return (
    <>
      {!isMobile ? (
        <InfoGeneralStyled>
          <PhotoHeader color={color} />
          <NickHeader />
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
          <Button rounded full={false}>
            <MdOutlineChevronLeft />
          </Button>
          <PhotoHeader color={color} />
          <NickHeader />
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
