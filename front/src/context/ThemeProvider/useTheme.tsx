import { useContext } from 'react';
import { ThemeContext } from '.';

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}
