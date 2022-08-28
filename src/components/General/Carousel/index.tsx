import { ReactNode } from 'react';
import { Container } from './styles';

import { ReactSVG } from 'react-svg';

import LightArrowSrc from '../../../assets/icons/light_arrow.svg';
import DarkArrowSrc from '../../../assets/icons/dark_arrow.svg';
import { useTheme } from '../../../context/ThemeProvider/useTheme';

interface ICarouselProps {
  children: ReactNode;
  smooth?: boolean;
  distance?: number;
}

export function Carousel({ children, smooth, distance }: ICarouselProps) {
  const { title } = useTheme();

  return (
    <Container>
      <ReactSVG
        src={title === 'light' ? DarkArrowSrc : LightArrowSrc}
        role={'button'}
      />
      {children}
      <ReactSVG
        src={title === 'light' ? DarkArrowSrc : LightArrowSrc}
        role={'button'}
      />
    </Container>
  );
}
