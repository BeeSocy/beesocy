import 'styled-components';

export interface IPaleteColors {
  primary: string;
  secondary: string;
  light: string;
  secondaryLight: string;
  text: string;
  bee: string;

  javascript: string;
  html: string;
  php: string;
  css: string;
  python: string;
  typescript: string;
  dart: string;
  ruby: string;
  java: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: IPaleteColors;
  }
}
