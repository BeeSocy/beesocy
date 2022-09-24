import { useContext } from 'react';
import { AlertContext } from '.';

export function useAlert() {
  const context = useContext(AlertContext);

  return context;
}
