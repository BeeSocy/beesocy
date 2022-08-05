import { useLocalStorage } from 'react-use';

import dark from './styles/themes/dark';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';

export function App() {
  const defaultTheme = dark;
  const [theme] = useLocalStorage('theme', defaultTheme);

  return (
    <ThemeProvider theme={theme ? theme : defaultTheme}>
      <h1>Bom dia mundo</h1>

      <GlobalStyle />
    </ThemeProvider>
  );
}
