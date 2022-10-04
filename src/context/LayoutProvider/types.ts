import { ReactNode } from 'react';

interface ILayout {
  paddingActive: boolean;
}

export interface ILayoutContext extends ILayout {
  handleChangePaddingActive: (value: boolean) => void;
}

export interface ILayoutProvider {
  children: ReactNode;
}
