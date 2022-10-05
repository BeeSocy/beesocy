import { createContext, useState } from 'react';
import { ILayoutContext, ILayoutProvider } from './types';

export const LayoutContext = createContext({} as ILayoutContext);

export function LayoutProvider({ children }: ILayoutProvider) {
  const [paddingActive, setPaddingActive] = useState<boolean>(true);

  function handleChangePaddingActive(value: boolean): void {
    setPaddingActive(value);
  }

  return (
    <LayoutContext.Provider
      value={{ handleChangePaddingActive, paddingActive }}
    >
      {children}
    </LayoutContext.Provider>
  );
}
