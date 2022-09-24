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
import * as ToastPrimitive from '@radix-ui/react-toast';
import { AlertProvider } from './context/AlertProvider';

export function App() {
  const defaultTheme = dark;

  const theme = useTheme();

  return (
    <StyledThemeProvider theme={theme ?? defaultTheme}>
      <BrowserRouter>
        <IconContext.Provider value={{ size: '28' }}>
          <AlertProvider>
            <MenuProvider>
              <CategoryProvider>
                <Router />
              </CategoryProvider>
            </MenuProvider>
            <Alert />
          </AlertProvider>
        </IconContext.Provider>

        <GlobalStyle />
      </BrowserRouter>
    </StyledThemeProvider>
  );
}
