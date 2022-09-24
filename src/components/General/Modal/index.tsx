import { ReactNode } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { MdClose } from 'react-icons/md';

import {
  StyledDialogOverlay,
  StyledDialogContent,
  StyledDialogClose
} from './styles';
import { useModal } from '../../../context/ModalProvider/useModal';
import { IModalProps } from '../../../context/ModalProvider/types';

export function Modal() {
  const { open, handleSetOpen, content, options } = useModal();

  return (
    <DialogPrimitive.Root
      open={open}
      onOpenChange={value => handleSetOpen(value)}
    >
      <DialogPrimitive.Portal>
        <StyledDialogOverlay $active={options.overlay} />
        <StyledDialogContent
          $xPos={options.positionX}
          $yPos={options.positionY}
          $center={options.center}
          onInteractOutside={event => {
            !options.easyClose && event.preventDefault();
          }}
        >
          {content}
          {options.easyClose && (
            <StyledDialogClose>
              <MdClose size={18} />
            </StyledDialogClose>
          )}
        </StyledDialogContent>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
