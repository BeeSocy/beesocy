import { ReactNode } from 'react';

export interface IMenu {
  open?: boolean;
}

export interface IMenuContext extends IMenu {
  handleToggleMenu(): void;
  handleSetOpenMenu(value: boolean): void;
}

export interface IMenuProvider {
  children: ReactNode;
}
