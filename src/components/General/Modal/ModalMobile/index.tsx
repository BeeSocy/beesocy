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

  const hasTitle = options.title != null && options.title != '';

  useLockBodyScroll(open);

  return (
    <Sheet isOpen={open ?? false} onClose={() => handleSetOpen(false)}>
      <Sheet.Container
        style={{
          background: colors.primary,
          height: options.fullHeight ? '100vh' : 'fit-content'
        }}
        onTap={() => handleSetOpen(false)}
      >
        <Sheet.Header style={{ color: colors.light }}>
          <StyledHeader hasTitle={hasTitle}>
            <Title size="medium">{options.title}</Title>
            {options.easyClose && (
              <Button rounded full={false} data-dialog-close="true">
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
