import { ReactNode } from 'react';

interface IAlert {
  open: boolean;
  alert: string;
}

export interface IAlertContext extends IAlert {
  handleCallAlert(alert: string): void;
  handleSetOpen(state: boolean): void;
}

export interface IAlertProvider {
  children: ReactNode;
}
