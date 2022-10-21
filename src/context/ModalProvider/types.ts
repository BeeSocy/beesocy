import { ReactNode } from 'react';

export interface IModalProps {
  easyClose?: boolean;
  overlay?: boolean;
  positionX?: number;
  positionY?: number;
  center?: boolean;
  fullHeight?: boolean;
  title?: string;
  disableDrag?: boolean;
  onClose?(): void;
}

interface IModal {
  open?: boolean;
  content: ReactNode;
  options: IModalProps;
}

export interface IModalContext extends IModal {
  handleCallModal(content: ReactNode, options: IModalProps): void;
  handleSetOpen(value: boolean): void;
  handleSetOptions(value: IModalProps): void;
}

export interface IModalProvider {
  children: ReactNode;
}
