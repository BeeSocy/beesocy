import { MdClose } from 'react-icons/md';
import Sheet from 'react-modal-sheet';
import { useLockBodyScroll } from 'react-use';

import { useModal } from '../../../../context/ModalProvider/useModal';
import { useTheme } from '../../../../context/ThemeProvider/useTheme';
import { Button } from '../../../Widgets/Buttons/Button';
import { Title } from '../../Title';
import { StyledHeader, StyledSheet } from './styles';

export function ModalMobile() {
  const { open, handleSetOpen, content, options } = useModal();

  const { colors } = useTheme();

  const hasTitle = options.title != null && options.title != '';

  useLockBodyScroll(open);

  return (
    <StyledSheet isOpen={open ?? false} onClose={() => handleSetOpen(false)}>
      <StyledSheet.Container>
        <StyledSheet.Header style={{ color: colors.light }}>
          <StyledHeader hasTitle={hasTitle}>
            <Title size="medium">{options.title}</Title>
            {options.easyClose && (
              <Button rounded full={false} data-dialog-close="true">
                <MdClose size={18} />
              </Button>
            )}
          </StyledHeader>
        </StyledSheet.Header>

        <StyledSheet.Content>{content}</StyledSheet.Content>
      </StyledSheet.Container>

      <StyledSheet.Backdrop onTap={() => handleSetOpen(false)} />
    </StyledSheet>
  );
}
