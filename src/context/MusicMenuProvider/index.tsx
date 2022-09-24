import { createContext, useState } from 'react';
import { IMusicMenuContext, IMusicMenuProvider } from './types';

export const MusicMenuContext = createContext({} as IMusicMenuContext);

export function MusicMenuProvider({ children }: IMusicMenuProvider) {
  const [open, setOpen] = useState<boolean>(false);

  function handleChangeOpen(value: boolean): void {
    setOpen(value);
  }

  return (
    <MusicMenuContext.Provider value={{ open, handleChangeOpen }}>
      {children}
    </MusicMenuContext.Provider>
  );
}
