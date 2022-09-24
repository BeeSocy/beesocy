import { ReactNode } from 'react';

interface IMusicMenu {
  open: boolean;
}

export interface IMusicMenuContext extends IMusicMenu {
  handleChangeOpen(value: boolean): void;
}

export interface IMusicMenuProvider {
  children: ReactNode;
}
