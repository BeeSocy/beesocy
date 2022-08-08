import { createContext } from 'react';
import { useLocalStorage } from 'react-use';
import { IThemeContext, IThemeProvider } from './types';

import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';

export const ThemeContext = createContext({} as IThemeContext);

const defaultTheme = dark;

export function ThemeProvider({ children }: IThemeProvider) {
  const [theme, setTheme] = useLocalStorage('theme', defaultTheme);

  function handleChangeTheme() {
    if (theme?.title === 'dark') {
      setTheme(light);
    } else {
      setTheme(dark);
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        title: theme?.title ?? defaultTheme.title,
        colors: theme?.colors ?? defaultTheme.colors,
        handleChangeTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
