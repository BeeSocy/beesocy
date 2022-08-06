import React, { createContext, useCallback, useState } from 'react';
import { IMenuContext, IMenuProvider } from './types';

export const MenuContext = createContext({} as IMenuContext);

export function MenuProvider({ children }: IMenuProvider) {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggleMenu = useCallback(() => {
    setOpen(state => !state);
  }, []);

  return (
    <MenuContext.Provider value={{ open, handleToggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
}
