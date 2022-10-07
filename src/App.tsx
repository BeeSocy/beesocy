import { BrowserRouter, useLocation } from 'react-router-dom';
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
import { useEffect } from 'react';
import { useLayout } from './context/LayoutProvider/useLayout';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ProfileCategoryProvider } from './context/ProfileCategoryProvider';

export function App() {
  const defaultTheme = dark;

  const theme = useTheme();

  const { handleChangePaddingActive } = useLayout();

  useEffect(() => {
    handleChangePaddingActive(true);
  }, []);

  return (
    <StyledThemeProvider theme={theme ?? defaultTheme}>
      <BrowserRouter>
        <IconContext.Provider value={{ size: '28' }}>
          <ModalProvider>
            <AlertProvider>
              <DndProvider backend={HTML5Backend}>
                <MenuProvider>
                  <ProfileCategoryProvider>
                    <CategoryProvider>
                      <Router />
                    </CategoryProvider>
                  </ProfileCategoryProvider>
                </MenuProvider>
              </DndProvider>

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
