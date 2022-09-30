import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { IconContext } from 'react-icons';

import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';

import { useTheme } from './context/ThemeProvider/useTheme';
import { Router } from './routes/Router';
import { MenuProvider } from './context/MenuProvider';
import { CategoryProvider } from './context/CategoryProvider';
import { Alert } from './components/General/Alert';
import { AlertProvider } from './context/AlertProvider';
import { ModalProvider } from './context/ModalProvider';
import { Modal } from './components/General/Modal';

export function App() {
  const defaultTheme = dark;

  const theme = useTheme();

  return (
    <StyledThemeProvider theme={theme ?? defaultTheme}>
      <BrowserRouter>
        <IconContext.Provider value={{ size: '28' }}>
          <ModalProvider>
            <AlertProvider>
              <MenuProvider>
                <CategoryProvider>
                  <Router />
                </CategoryProvider>
              </MenuProvider>

              <Alert />
              <Modal />
            </AlertProvider>
          </ModalProvider>
        </IconContext.Provider>

        <GlobalStyle />
      </BrowserRouter>
    </StyledThemeProvider>
  );
}
