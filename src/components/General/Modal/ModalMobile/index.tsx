import { MdClose } from 'react-icons/md';
import Sheet from 'react-modal-sheet';
import { useLockBodyScroll } from 'react-use';

import { useModal } from '../../../../context/ModalProvider/useModal';
import { useTheme } from '../../../../context/ThemeProvider/useTheme';
import { Button } from '../../../Widgets/Buttons/Button';
import { Title } from '../../Title';
import { StyledHeader } from './styles';

export function ModalMobile() {
  const { open, handleSetOpen, content, options } = useModal();

  const { colors } = useTheme();

  useLockBodyScroll(open);

  return (
    <Sheet isOpen={open ?? false} onClose={() => handleSetOpen(false)}>
      <Sheet.Container
        style={{
          background: colors.primary,
          height: 'fit-content',
          padding: '0.8rem'
        }}
        onTap={() => handleSetOpen(false)}
      >
        <Sheet.Header style={{ color: colors.light }}>
          <StyledHeader>
            <Title size="medium">{options.title}</Title>
            {options.easyClose && (
              <Button rounded full={false}>
                <MdClose size={18} />
              </Button>
            )}
          </StyledHeader>
        </Sheet.Header>
        <Sheet.Content>{content}</Sheet.Content>
      </Sheet.Container>

      <Sheet.Backdrop onTap={() => handleSetOpen(false)} />
    </Sheet>
  );
}
