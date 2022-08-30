import { ReactNode } from 'react';

export interface IMenu {
  open?: boolean;
}

export interface IMenuContext extends IMenu {
  handleToggleMenu(): void;
}

export interface IMenuProvider {
  children: ReactNode;
}
