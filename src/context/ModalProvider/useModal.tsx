import { useContext } from 'react';
import { ModalContext } from '.';

export function useModal() {
  const context = useContext(ModalContext);

  return context;
}
