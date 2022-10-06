import { useContext } from 'react';
import { LayoutContext } from '.';

export function useLayout() {
  const context = useContext(LayoutContext);

  return context;
}
