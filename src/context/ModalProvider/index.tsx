import { createContext, ReactNode, useEffect, useRef, useState } from 'react';
import { IModalContext, IModalProps, IModalProvider } from './types';

export const ModalContext = createContext({} as IModalContext);

export function ModalProvider({ children }: IModalProvider) {
  const [open, setOpen] = useState<boolean>(false);
  const [contentState, setContentState] = useState<ReactNode>();

  const [optionsState, setOptionsState] = useState<IModalProps>({});

  function handleCallModal(content: ReactNode, options: IModalProps): void {
    setOptionsState(options);
    setContentState(content);
    setOpen(true);
  }

  function handleSetOpen(value: boolean): void {
    setOpen(value);
  }

  function handleSetOptions(value: IModalProps): void {
    setOptionsState(value);
  }

  return (
    <ModalContext.Provider
      value={{
        open,
        handleSetOpen,
        handleCallModal,
        content: contentState,
        options: optionsState,
        handleSetOptions
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
