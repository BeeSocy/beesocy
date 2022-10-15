import { ReactNode } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { MdClose } from 'react-icons/md';

import {
  StyledDialogOverlay,
  StyledDialogContent,
  StyledDialogClose,
  StyledDialogHeader
} from './styles';
import { useModal } from '../../../../context/ModalProvider/useModal';
import { Title } from '../../Title';

export function ModalDesktop() {
  const { open, handleSetOpen, content, options } = useModal();

  const hasTitle = options.title != null && options.title != '';

  return (
    <DialogPrimitive.Root
      open={open}
      onOpenChange={value => {
        if (!value && options.onClose) {
          options.onClose();
          return;
        }
        handleSetOpen(value);
      }}
    >
      <DialogPrimitive.Portal>
        <StyledDialogOverlay $active={options.overlay} />
        <StyledDialogContent
          $xPos={options.positionX}
          $yPos={options.positionY}
          $center={options.center}
        >
          <StyledDialogHeader hasTitle={hasTitle}>
            {hasTitle && <Title size="medium">{options.title}</Title>}
            {options.easyClose && (
              <StyledDialogClose data-dialog-close="true">
                <MdClose size={18} />
              </StyledDialogClose>
            )}
          </StyledDialogHeader>
          {content}
        </StyledDialogContent>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
