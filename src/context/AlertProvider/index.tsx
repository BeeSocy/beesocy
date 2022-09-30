import { createContext, useState } from 'react';
import { IAlertContext, IAlertProvider } from './types';

export const AlertContext = createContext({} as IAlertContext);

export function AlertProvider({ children }: IAlertProvider) {
  const [open, setOpen] = useState<boolean>(false);
  const [alertState, setAlertState] = useState<string>('');

  function handleCallAlert(alert: string) {
    setAlertState(alert);
    setOpen(true);
  }

  function handleSetOpen(state: boolean): void {
    setOpen(state);
  }

  return (
    <AlertContext.Provider
      value={{ open, alert: alertState, handleCallAlert, handleSetOpen }}
    >
      {children}
    </AlertContext.Provider>
  );
}
