import { DefaultTheme } from 'styled-components';

export interface ITheme extends DefaultTheme {}

export interface IThemeContext extends ITheme {
  handleChangeTheme(): void;
}

export interface IThemeProvider {
  children: JSX.Element;
}
