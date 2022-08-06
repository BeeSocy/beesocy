import { useLocalStorage } from 'react-use';

import dark from './styles/themes/dark';
import light from './styles/themes/light';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';

import { IconContext } from 'react-icons';
import { Header } from './components/Header';
import { BrowserRouter } from 'react-router-dom';

export function App() {
  const defaultTheme = dark;

  const [theme, setTheme] = useLocalStorage('theme', defaultTheme);

  function handleChangeTheme() {
    setTheme(theme?.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme ? theme : defaultTheme}>
      <BrowserRouter>
        <IconContext.Provider value={{ size: '24' }}>
          <Header
            handleChangeTheme={handleChangeTheme}
            themeTitle={theme?.title ? theme?.title : 'dark'}
          />
        </IconContext.Provider>

        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}
