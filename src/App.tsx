import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { IconContext } from 'react-icons';

import dark from './styles/themes/dark';

import GlobalStyle, { StyledSkeletonTheme } from './styles/global';

import { useTheme } from './context/ThemeProvider/useTheme';
import { Router } from './routes/Router';
import { MenuProvider } from './context/MenuProvider';
import { CategoryProvider } from './context/CategoryProvider';
import { Alert } from './components/General/Alert';
import { AlertProvider } from './context/AlertProvider';
import { ModalProvider } from './context/ModalProvider';
import { Modal } from './components/General/Modal';
import { useLayout } from './context/LayoutProvider/useLayout';
import { ProfileCategoryProvider } from './context/ProfileCategoryProvider';
import { SignupProvider } from './context/SignupProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'react-loading-skeleton/dist/skeleton.css';
import { AuthProvider } from './context/AuthProvider';

export function App() {
  const defaultTheme = dark;

  const theme = useTheme();

  const { handleChangePaddingActive } = useLayout();

  const queryClient = new QueryClient();

  useEffect(() => {
    handleChangePaddingActive(true);
  }, []);

  return (
    <StyledThemeProvider theme={theme ?? defaultTheme}>
      <BrowserRouter>
        <IconContext.Provider value={{ size: '28' }}>
          <QueryClientProvider client={queryClient}>
            <StyledSkeletonTheme
              baseColor={theme.colors.light}
              highlightColor={theme.colors.secondaryLight}
            >
              <SignupProvider>
                <ModalProvider>
                  <AlertProvider>
                    <AuthProvider>
                      <MenuProvider>
                        <ProfileCategoryProvider>
                          <CategoryProvider>
                            <Router />
                          </CategoryProvider>
                        </ProfileCategoryProvider>
                      </MenuProvider>

                      <Alert />
                      <Modal />
                    </AuthProvider>
                  </AlertProvider>
                </ModalProvider>
              </SignupProvider>
            </StyledSkeletonTheme>
          </QueryClientProvider>
        </IconContext.Provider>

        <GlobalStyle />
      </BrowserRouter>
    </StyledThemeProvider>
  );
}
